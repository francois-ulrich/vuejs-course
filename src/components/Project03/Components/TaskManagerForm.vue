<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from "vue";
import type TaskManagerFormData from "../Types/TaskManagerFormData";
import { TaskItemPriority } from "../Types/TaskItemPriority";

const taskNameInputRef = useTemplateRef("taskNameInputRef");

let form = ref<TaskManagerFormData>({
  taskName: "",
  priority: null,
});

const emit = defineEmits<{
  submit: [value: TaskManagerFormData];
}>();

function onSubmit() {
  if (form.value.taskName === "" || form.value.priority === null) return;
  emit("submit", form.value);
}

onMounted(() => {
  taskNameInputRef.value?.focus();
});
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-2">
    <div>
      <label for="taskName">Task name :</label>
      <input
        type="text"
        id="taskName"
        name="taskName"
        v-model="form.taskName"
        ref="taskNameInputRef"
        class="rounded-sm border border-solid border-gray-400 ml-2 p-1"
      />
    </div>

    <div>
      <label for="priority">Priority :</label>
      <select
        id="priority"
        name="priority"
        v-model="form.priority"
        class="rounded-sm border border-solid border-gray-400 ml-2 p-1"
      >
        <option disabled :value="null">Please select a priority</option>
        <option v-for="option in TaskItemPriority" :value="option">
          {{ option }}
        </option>
      </select>
    </div>

    <input
      type="submit"
      value="Add task"
      class="rounded-md bg-blue-500 hover:bg-blue-300 px-4 py-2 text-sm font-semibold text-white opacity-100 focus:outline-none cursor-pointer transition-colors"
    />
  </form>
</template>
