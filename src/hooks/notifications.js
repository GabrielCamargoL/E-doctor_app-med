import { useContext } from 'react';
import { NotificationsContext } from '../contexts/notifications';

const useNotification = () => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    );
  }

  return context;
};

export default useNotification;