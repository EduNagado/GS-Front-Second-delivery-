// Notifications.js
import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    const notificationsRef = collection(db, 'notifications');
    const notificationsSnapshots = await getDocs(query(notificationsRef, orderBy('timestamp', 'desc'), limit(3)));
    setNotifications(notificationsSnapshots.docs.map(notification => notification.data()));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Notifications</h2>
      <ul>
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <li key={index} className="text-sm mb-1">
              {notification.message}
              <p className="text-xs text-gray-500">Received on: {new Date(notification.timestamp?.seconds * 1000).toLocaleString()}</p>
            </li>
          ))
        ) : (
          <li>No notifications available.</li>
        )}
      </ul>
    </div>
  );
};

export default Notifications;
