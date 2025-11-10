import { ref } from "vue";

interface GeneralSettings {
  username: string;
  email: string;
  aboutMe: string;
  gender: string;
  country: string;
}

const generalSettings = ref<GeneralSettings>({
  username: "MyUsername",
  email: "test@gmail.com",
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  gender: "",
  country: "",
});

export default function useGeneralSettings() {
  return {
    generalSettings,
  };
}
