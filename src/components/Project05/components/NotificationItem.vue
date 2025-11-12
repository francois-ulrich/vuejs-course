<script setup lang="ts">
import useNotifications from "../composables/useNotifications";
import type { Notification } from "../types/types";

const props = defineProps<{ data: Notification }>();

const { deleteNotification } = useNotifications();
</script>

<template>
  <div class="notification-item">
    <div>
      <p>{{ props.data.message }}</p>
    </div>

    <button
      class="notification-ack-button"
      @click="deleteNotification(props.data.id)"
    >
      Ok
    </button>
  </div>
</template>
