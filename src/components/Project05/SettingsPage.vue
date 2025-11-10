<script setup lang="ts">
import { KeepAlive, markRaw, onBeforeMount, ref } from "vue";
import TabLink from "./components/TabLink.vue";
import type { Tab } from "./types/Tab";
import General from "./components/General.vue";
import Notifications from "./components/Notifications.vue";
import Privacy from "./components/Privacy.vue";
import FadeTransition from "./components/FadeTransition.vue";
import "./main.css";

const tabs = ref<Tab[]>([
  { name: "general", label: "General", component: markRaw(General) },
  {
    name: "notifications",
    label: "Notifications",
    component: markRaw(Notifications),
  },
  { name: "privacy", label: "Privacy", component: markRaw(Privacy) },
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
  </main>
</template>

<style></style>
