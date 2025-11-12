<script setup lang="ts">
import RadioGroup from "../../shared/Components/RadioGroup.vue";
import TextInput from "../../shared/Components/TextInput.vue";
import SelectInput from "../../shared/Components/SelectInput.vue";
import useGeneralSettings from "../composables/useGeneralSettings";

type Gender = "Male" | "Female" | "Other";
type Country = "France" | "United States";

const onSubmit = () => {
  console.log("submit");
};

const genderOptions: Gender[] = ["Male", "Female", "Other"];
const countryOptions: Country[] = ["France", "United States"];

const { generalSettings } = useGeneralSettings();
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">General</h1>

    <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
      <TextInput
        id="username"
        label="Username"
        v-model="generalSettings.username"
      />
      <TextInput
        id="email"
        label="Email adress"
        v-model="generalSettings.email"
        type="email"
      />
      <TextInput
        id="aboutMe"
        label="About me"
        v-model="generalSettings.aboutMe"
        type="textarea"
      />
      <RadioGroup
        id="gender"
        label="Gender"
        v-model="generalSettings.gender"
        :options="genderOptions"
      />
      <SelectInput
        id="country"
        label="Country"
        v-model="generalSettings.country"
        :options="countryOptions"
      />
    </form>
  </div>
</template>
