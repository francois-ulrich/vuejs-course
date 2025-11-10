<script setup lang="ts">
import BooleanInput from "../../shared/Components/BooleanInput.vue";
import { ref } from "vue";

const onSubmit = () => {
  console.log("submit");
};

const boolTest = ref<boolean | undefined>();
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">Notifications</h1>
    <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
      <BooleanInput
        id="emailNotifications"
        label="Email notifications"
        v-model="boolTest"
      />
    </form>
  </div>
</template>
