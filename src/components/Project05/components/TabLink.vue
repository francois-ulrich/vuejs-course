<script setup lang="ts">
import { computed } from "vue";
import type { Tab } from "../types/Tab";

const props = defineProps<{
  tab: Tab;
  activeTab: Tab | undefined;
}>();

const emit = defineEmits<{
  click: [tab: Tab];
}>();

const isActive = computed(() => props.tab === props.activeTab);
</script>

<template>
  <div
    class="p-4 border-gray-300 border-b-2 cursor-pointer"
    :class="{ 'border-b-blue-500': isActive }"
    @click="
      () => {
        emit('click', props.tab);
      }
    "
  >
    <p
      class="font-medium select-none"
      :class="{ 'text-blue-500': isActive, 'text-gray-500': !isActive }"
    >
      {{ props.tab.label }}
    </p>
  </div>
</template>
