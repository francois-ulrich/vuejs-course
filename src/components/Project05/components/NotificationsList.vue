<script setup lang="ts">
import { onMounted, ref } from "vue";
import useNotifications from "../composables/useNotifications";
import NotificationItem from "./NotificationItem.vue";
const { notifications } = useNotifications();

const isMounted = ref<boolean>(false);

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <Teleport to="body" v-if="isMounted">
    <ul class="notification-list">
      <li v-for="item in notifications" :key="item.id">
        <NotificationItem :data="item" />
      </li>
    </ul>
  </Teleport>
</template>
