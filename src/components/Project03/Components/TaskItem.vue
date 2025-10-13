<script setup lang="ts">
import type { TaskItemData } from "../Types/TaskItemData";
import { TaskItemPriority } from "../Types/TaskItemPriority";

interface Props {
  data: TaskItemData;
}

const emit = defineEmits<{
  delete: [id: string];
}>();

function handleDelete() {
  emit("delete", props.data.id);
}

const props = defineProps<Props>();
</script>

<template>
  <article
    class="bg-white rounded-lg overflow-hidden shadow-md h-10 flex flex-row"
  >
    <div
      class="w-2 h-full"
      :class="{
        'bg-red-500': props.data.priority == TaskItemPriority.High,
        'bg-yellow-500': props.data.priority == TaskItemPriority.Medium,
        'bg-green-500': props.data.priority == TaskItemPriority.Low,
      }"
    ></div>
    <div class="flex flex-row flex-grow p-3">
      <p class="text-black leading-none">{{ props.data.taskName }}</p>
    </div>
    <div class="flex flex-shrink items-center">
      <button
        class="rounded-md text-red-500 text-sm font-bold opacity-100 focus:outline-none leading-none grow w-8 h-8"
        v-on:click="handleDelete"
      >
        X
      </button>
    </div>
  </article>
</template>
