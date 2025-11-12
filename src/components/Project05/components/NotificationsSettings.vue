<script setup lang="ts">
import BooleanInput from "../../shared/Components/BooleanInput.vue";
import useNotificationSettings from "../composables/useNotificationSettings";

const onSubmit = () => {
  console.log("submit");
};

const { notificationSettings } = useNotificationSettings();
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">Notifications</h1>
    <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
      <BooleanInput
        id="emailNotifications"
        label="Email notifications"
        v-model="notificationSettings.email"
      />

      <BooleanInput
        id="smsNotifications"
        label="SMS notifications"
        v-model="notificationSettings.sms"
      />
    </form>
  </div>
</template>
