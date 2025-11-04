<script setup lang="ts">
import type { Tab } from "@/components/Project05/types/Tab";
import { computed } from "vue";

const props = defineProps<Tab>();

defineEmits<{
  click: void;
}>();

const isActive = computed(() => props.name === props.activeTabName);
</script>

<template>
  <div
    class="p-4 border-gray-300 border-b-2 cursor-pointer"
    :class="{ 'border-blue-500': isActive }"
  >
    <p class="text-gray-500 font-medium" :class="{ 'text-blue-500': isActive }">
      {{ props.label }}
    </p>
  </div>
</template>
