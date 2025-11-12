import { watch, type Ref } from "vue";
import type { SettingsKey, SettingsMap } from "./types/types";

const initializeLocalStorage = <T extends SettingsKey>(
  storageKey: T,
  defaultValue: SettingsMap[T]
): SettingsMap[T] => {
  const storedData = localStorage.getItem(storageKey);

  if (storedData === null) {
    return defaultValue;
  }

  return JSON.parse(storedData);
};

const watchAndStore = <T extends SettingsKey>(
  storageKey: T,
  obj: Ref<SettingsMap[T]>
) => {
  watch(
    obj,
    (newValue) => {
      localStorage.setItem(storageKey, JSON.stringify(newValue));
    },
    { deep: true }
  );
};

export { initializeLocalStorage, watchAndStore };
