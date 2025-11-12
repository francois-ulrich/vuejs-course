import { ref } from "vue";
import { initializeLocalStorage, watchAndStore } from "../util";
import type { GeneralSettings } from "../types/types";

const storageKey = "generalSettings";

const generalSettings = ref<GeneralSettings>(
  (() =>
    initializeLocalStorage(storageKey, {
      username: "MyUsername",
      email: "test@gmail.com",
      aboutMe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      gender: "",
      country: "",
    }))()
);

watchAndStore(storageKey, generalSettings);

export default function useGeneralSettings() {
  return {
    generalSettings,
  };
}
