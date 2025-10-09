<script setup lang="ts">
import { ref } from "vue";
import TaskManagerForm from "./Components/TaskManagerForm.vue";
import TaskItem from "./Components/TaskItem.vue";
import type { TaskItemData } from "./Types/TaskItemData";
import type TaskManagerFormData from "./Types/TaskManagerFormData";
import { v4 as uuidv4 } from "uuid";

let items = ref<TaskItemData[]>([]);

function onFormSubmit(formData: TaskManagerFormData) {
  const newItem = {
    id: uuidv4(),
    taskName: formData.taskName,
    priority: formData.priority,
  };

  console.log(newItem);

  items.value.push(newItem);
}
</script>

<template>
  <TaskManagerForm @submit="onFormSubmit" />

  <hr />

  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <TaskItem :data="item"></TaskItem>
      </li>
    </ul>
  </div>
</template>
