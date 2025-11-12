<script setup lang="ts">
import { KeepAlive, markRaw, onBeforeMount, ref } from "vue";
import TabLink from "./components/TabLink.vue";
import GeneralSettings from "./components/GeneralSettings.vue";
import NotificationsSettings from "./components/NotificationsSettings.vue";
import PrivacySettings from "./components/PrivacySettings.vue";
import FadeTransition from "./components/FadeTransition.vue";
import "./main.css";
import type { Tab } from "./types/types";
import NotificationsList from "./components/NotificationsList.vue";

const tabs = ref<Tab[]>([
  { name: "general", label: "General", component: markRaw(GeneralSettings) },
  {
    name: "notifications",
    label: "Notifications",
    component: markRaw(NotificationsSettings),
  },
  { name: "privacy", label: "Privacy", component: markRaw(PrivacySettings) },
]);

const currentTab = ref<Tab>();

const onTabClick = (tab: Tab) => {
  currentTab.value = tab;
};

onBeforeMount(() => {
  currentTab.value = tabs.value[0];
});
</script>

<template>
  <nav>
    <ul class="flex flex-row">
      <li v-for="tab in tabs">
        <TabLink :tab="tab" :activeTab="currentTab" @click="onTabClick" />
      </li>
    </ul>
  </nav>

  <main>
    <div class="p-4" v-if="currentTab && currentTab.component">
      <FadeTransition>
        <KeepAlive>
          <component :is="currentTab.component" markRaw></component>
        </KeepAlive>
      </FadeTransition>
    </div>

    <hr />

    <NotificationsList />
  </main>
</template>

<style></style>
