"use client"
import { useEffect, useState } from 'react'; // Importa hooks do React
import { db, auth } from './firebase/firebase'; // Importa a instância do Firebase
import { doc, getDoc, collection, getDocs } from 'firebase/firestore'; // Funções do Firestore para manipulação de documentos
import { onAuthStateChanged } from 'firebase/auth'; // Função para monitorar a autenticação
import { useNavigate } from 'react-router-dom'; // Hook para navegação entre páginas
import Sidebar from './sidebar/Sidebar'; // Componente da barra lateral
import RenderContent from './renderContent/RenderContent'; // Componente para exibir o conteúdo
import DashboardNav from './dashboardNav/DashboardNav'; // Componenzte de navegação superior

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [activeSection, setActiveSection] = useState('recentActivity'); // Seção inicial: Recent Activity
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;

      try {
        const userDocRef = doc(db, 'users', userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const data = userDocSnap.data();
          setUserData(data);

          const notificationsRef = collection(db, 'notifications');
          const notificationsSnapshot = await getDocs(notificationsRef);
          const notificationsList = notificationsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setNotifications(notificationsList);

          const activityRef = collection(db, 'documents');
          const activitySnapshot = await getDocs(activityRef);
          const activityList = activitySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

          // Filtrando atividades recentes com base no tipo de usuário
          if (data.userType === 'auditor') {
            const assignedActivities = activityList.filter((doc) => doc.assignedTo === userId);
            setRecentActivity(assignedActivities);
          } else {
            const organizationActivities = activityList.filter((doc) => doc.uploadedBy === userId);
            setRecentActivity(organizationActivities);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarOptionClick = (section) => {
    setActiveSection(section);
    if (window.innerWidth <= 1024) {
      setIsSidebarOpen(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex min-h-screen bg-gray-800">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform transition-transform duration-300 bg-gray-900 shadow-lg overflow-y-auto ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-96 z-10`}
      >
        {userData && (
          <Sidebar
            activeSection={activeSection}
            setActiveSection={handleSidebarOptionClick}
            userType={userData.userType}
          />
        )}
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'pl-96' : 'pl-0'
        } lg:pl-96`}
      >
        {/* Top Navigation */}
        <DashboardNav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <div className="p-4 sm:p-6 md:p-8 mt-20">
          <RenderContent
            activeSection={activeSection}
            notifications={notifications}
            recentActivity={recentActivity}
            userType={userData?.userType}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
