<script setup lang="ts">
import { ref } from "vue";

let filter = ref<string>("");

const emit = defineEmits<{
  submit: [value: string];
}>();

function onSubmit() {
  if (filter.value === "") return;
  emit("submit", filter.value);
}
</script>
<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-2">
    <div>
      <label for="taskName">Filter :</label>
      <input
        type="text"
        id="taskName"
        name="taskName"
        v-model="filter"
        ref="filterInputRef"
        class="rounded-sm border border-solid border-gray-400 ml-2"
      />
    </div>
  </form>
</template>
