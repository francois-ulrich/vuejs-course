<script setup lang="ts">
import { ref } from "vue";
import TabLink from "./components/TabLink.vue";

const currentTab = ref<string>("general");
</script>

<template>
  <div class="flex flex-row">
    <TabLink name="general" label="General" :activeTabName="currentTab" />
    <TabLink
      name="notifications"
      label="Notifications"
      :activeTabName="currentTab"
    />
    <TabLink name="privacy" label="Privacy" :activeTabName="currentTab" />
  </div>
</template>
