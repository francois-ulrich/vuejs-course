<script setup lang="ts">
import SelectInput from "../../shared/Components/SelectInput.vue";
import BooleanInput from "../../shared/Components/BooleanInput.vue";
import usePrivacySettings from "../composables/usePrivacySettings";

const onSubmit = () => {
  console.log("submit");
};

const { privacySettings } = usePrivacySettings();
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">Privacy</h1>

    <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
      <BooleanInput
        id="searchEngineIndexing"
        label="Search engine indexing"
        v-model="privacySettings.searchEngineIndexing"
      />

      <SelectInput
        id="visibility"
        label="Visibility"
        v-model="privacySettings.visibility"
        :options="['Private', 'Public']"
      />
    </form>
  </div>
</template>
