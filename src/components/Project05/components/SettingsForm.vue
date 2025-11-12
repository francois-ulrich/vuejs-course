<script setup lang="ts">
const onSubmit = () => {
  console.log("submit");
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
    <slot></slot>
  </form>
</template>
