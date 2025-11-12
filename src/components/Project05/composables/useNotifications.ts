import { ref } from "vue";
import type { Notification } from "../types/types";
import { v4 as uuidv4 } from "uuid";

const notifications = ref<Notification[]>([]);

const addNotification = (message: string) => {
  const newNotification = { id: uuidv4(), message };
  const timeout = 5000;

  notifications.value.push(newNotification);

  setTimeout(() => {
    deleteNotification(newNotification.id);
  }, timeout);
};

const deleteNotification = (notificationId: string) => {
  notifications.value = notifications.value.filter(
    (notification) => notification.id != notificationId
  );
};

export default function useNotifications() {
  return {
    notifications,
    addNotification,
    deleteNotification,
  };
}
