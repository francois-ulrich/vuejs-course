<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import TaskManagerForm from "./Components/TaskManagerForm.vue";
import TaskItem from "./Components/TaskItem.vue";
import type { TaskItemData } from "./Types/TaskItemData";
import type TaskManagerFormData from "./Types/TaskManagerFormData";
import { v4 as uuidv4 } from "uuid";

const localStorageItemKey = "taskItems";

let items = ref<TaskItemData[]>([]);

function onFormSubmit(formData: TaskManagerFormData) {
  const newItem = {
    id: uuidv4(),
    taskName: formData.taskName,
    priority: formData.priority,
  };

  items.value.push(newItem);
}

onMounted(() => {
  const localStorageData = localStorage.getItem(localStorageItemKey);

  console.log({ localStorageData });

  if (localStorageData === null) return;

  try {
    // ✅ Parse proprement et typé
    items.value = JSON.parse(localStorageData) as TaskItemData[];

    console.log({ parsedItems: items.value });
  } catch (err) {
    console.error("Erreur de parsing du localStorage:", err);
  }
});

watch(
  items,
  () => {
    localStorage.setItem(localStorageItemKey, JSON.stringify(items.value));
  },
  { deep: true }
);
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
