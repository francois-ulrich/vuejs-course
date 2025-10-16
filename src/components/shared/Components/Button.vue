<script setup lang="ts">
interface Props {
  color?: "primary" | "danger";
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

function handleClick() {
  emit("click");
}
</script>

<template>
  <button
    class="rounded-md bg-blue-500 hover:bg-blue-300 px-4 py-2 text-sm font-semibold text-white opacity-100 focus:outline-none cursor-pointer transition-colors"
    :class="{ 'bg-red-500 hover:bg-red-300': props.color === 'danger' }"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
