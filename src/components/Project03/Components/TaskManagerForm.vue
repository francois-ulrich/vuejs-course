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
  <form @submit.prevent="onSubmit">
    <label for="taskName">Task name :</label>
    <input
      type="text"
      id="taskName"
      name="taskName"
      v-model="form.taskName"
      ref="taskNameInputRef"
    />

    <br />

    <label for="priority">Priority</label>
    <select id="priority" name="priority" v-model="form.priority">
      <option disabled :value="null">Please select a priority</option>
      <option v-for="option in TaskItemPriority" :value="option">
        {{ option }}
      </option>
    </select>

    <br />

    <input type="submit" value="Add task" />
  </form>
</template>
