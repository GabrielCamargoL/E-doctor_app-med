import React, {
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
  useContext,
} from 'react';
import { AsyncStorage } from 'react-native';

import AppContext from '../contexts/app';

export const NotificationsContext = createContext();

const NotificationsProvider = ({ children }) => {
  const [notification, setNotification] = useState({});
  const [notifications, setNotifications] = useState([]);
  const { socketIO } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      const namespace = await socketIO();
      namespace.on('new:message', (message) => {
        setNotification({
          eventName: 'new:message',
          message,
        });
      });

      namespace.on('update:appointment', (message) => {
        setNotification({
          eventName: 'update:appointment',
          message,
        });
      });

      setNotifications(
        JSON.parse(await AsyncStorage.getItem('notifications')) || [],
      );
    })();
  }, [socketIO]);

  const generateId = useCallback(() => {
    if (notifications.length) {
      return notifications[0].id + 1;
    }

    return 1;
  }, [notifications]);

  const add = useCallback(
    (title, description) => {
      (async () => {
        const id = generateId();

        const updatedNotifications = [
          {
            id,
            title,
            description,
          },
          ...notifications,
        ];

        await AsyncStorage.setItem(
          'notifications',
          JSON.stringify(updatedNotifications),
        );

        setNotifications(updatedNotifications);
      })();
    },
    [generateId, notifications],
  );

  const remove = useCallback(
    (id) => {
      (async () => {
        const updatedNotifications = notifications.filter((n) => n.id !== id);

        await AsyncStorage.setItem(
          'notifications',
          JSON.stringify(updatedNotifications),
        );

        setNotifications(updatedNotifications);
      })();
    },
    [notifications],
  );

  const value = useMemo(() => ({ notifications, notification, add, remove }), [
    notifications,
    notification,
    add,
    remove,
  ]);

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;