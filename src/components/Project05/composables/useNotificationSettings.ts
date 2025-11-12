import { ref } from "vue";
import { initializeLocalStorage, watchAndStore } from "../util";
import type { NotificationsSettings } from "../types/types";

const storageKey = "notificationsSettings";

const notificationSettings = ref<NotificationsSettings>(
  (() => {
    return initializeLocalStorage(storageKey, {
      email: false,
      sms: false,
    });
  })()
);

watchAndStore(storageKey, notificationSettings);

export default function useNotificationSettings() {
  return {
    notificationSettings,
  };
}
