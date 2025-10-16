<script setup lang="ts">
import { computed, ref } from "vue";
import type { TaskItemData } from "../Types/TaskItemData";
import { TaskItemPriority } from "../Types/TaskItemPriority";

interface Props {
  data: TaskItemData;
}

const props = defineProps<Props>();

const isDone = ref<boolean>(props.data.isDone);

const emit = defineEmits<{
  delete: [id: string];
  change: [id: string, isDone: boolean];
}>();

const checkboxInputId = computed(() => `checkbox-${props.data.id}`);

function handleDelete() {
  emit("delete", props.data.id);
}

function handleIsDoneFlagChange(e: Event) {
  isDone.value = (e.target as HTMLInputElement).checked;
  emit("change", props.data.id, isDone.value);
}
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
      <input
        :id="checkboxInputId"
        type="checkbox"
        :checked="props.data.isDone"
        @change="handleIsDoneFlagChange"
        class="mr-2"
      />
      <label
        class="text-black leading-none cursor-pointer"
        :class="{ 'line-through': isDone, 'text-gray-400': isDone }"
        :for="checkboxInputId"
      >
        {{ props.data.taskName }}
      </label>
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
