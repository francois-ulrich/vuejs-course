import { ref } from "vue";
import { initializeLocalStorage, watchAndStore } from "../util";
import type { PrivacySettings } from "../types/types";

const storageKey = "privacySettings";

const privacySettings = ref<PrivacySettings>(
  (() => {
    return initializeLocalStorage(storageKey, {
      searchEngineIndexing: false,
      visibility: "Private",
    });
  })()
);

watchAndStore(storageKey, privacySettings);

export default function usePrivacySettings() {
  return {
    privacySettings,
  };
}
