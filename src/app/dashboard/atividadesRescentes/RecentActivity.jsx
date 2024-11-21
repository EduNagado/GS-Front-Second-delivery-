import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const RecentActivity = () => {
  const [investments, setInvestments] = useState([]); // Mudei de 'documents' para 'investments'
  const [notifications, setNotifications] = useState([]);

  // Fetching investments, notifications, and comments summaries
  useEffect(() => {
    fetchInvestments(); // Mudei para buscar investimentos
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    const notificationsRef = collection(db, 'notifications');
    const notificationsSnapshots = await getDocs(query(notificationsRef, orderBy('timestamp', 'desc'), limit(3)));
    setNotifications(notificationsSnapshots.docs.map(notification => notification.data()));
  };

  const fetchInvestments = async () => { // Função alterada para buscar investimentos
    const investmentsRef = collection(db, 'investments');
    const investmentsSnapshots = await getDocs(query(investmentsRef, orderBy('date', 'desc'), limit(3))); // Buscando investimentos
    setInvestments(investmentsSnapshots.docs.map(investment => investment.data())); // Atualizando o estado de 'investments'
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    
    // Convert timestamp string to a Date object
    const date = new Date(timestamp);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }
    
    return date.toLocaleString();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Notifications Summary */}
      <div className="border p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Notifications</h3>
        <ul>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <li key={index} className="text-sm mb-1">
                {notification.message}
                <p className="text-xs text-gray-500">Received on: {formatTimestamp(notification.timestamp)}</p>
              </li>
            ))
          ) : (
            <li className="text-sm text-gray-500">No notifications available.</li>
          )}
        </ul>
      </div>

      {/* Investments Section */}
      <div className="border p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Investments</h3>
        <ul>
          {investments.length > 0 ? ( // Alterei para 'investments'
            investments.map((investment, index) => ( // Alterei de 'doc' para 'investment'
              <li key={index} className="text-sm mb-2">
                <strong>{investment.type}</strong> {/* 'title' para 'type' de investimento */}
                <p>{investment.description}</p> {/* Exibindo descrição */}
                <a href={investment.url} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                  View Document
                </a>
                <p className="text-xs text-gray-500">Uploaded on: {formatTimestamp(investment.date?.seconds * 1000)}</p> {/* Alterei para 'date' de investimento */}
              </li>
            ))
          ) : (
            <li className="text-sm text-gray-500">No investments available.</li> 
          )}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivity;
