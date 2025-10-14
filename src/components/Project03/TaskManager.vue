<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import TaskManagerForm from "./Components/TaskManagerForm.vue";
import TaskItem from "./Components/TaskItem.vue";
import type { TaskItemData } from "./Types/TaskItemData";
import type TaskManagerFormData from "./Types/TaskManagerFormData";
import { v4 as uuidv4 } from "uuid";
import FilterForm from "./Components/FilterForm.vue";

const localStorageItemKey = "taskItems";

const items = ref<TaskItemData[]>([]);
const filter = ref<string>("");

const filteredItems = computed<TaskItemData[]>(() =>
  items.value.filter(
    (item) =>
      filter.value === "" ||
      item.taskName.toLowerCase().includes(filter.value.toLowerCase())
  )
);

function onFormSubmit(formData: TaskManagerFormData) {
  const newItem = {
    id: uuidv4(),
    taskName: formData.taskName,
    priority: formData.priority,
  };

  items.value.push(newItem);
}

function onFilterValueChange(filterValue: string) {
  filter.value = filterValue;

  var a = items.value.filter(
    (item) =>
      filter.value === "" ||
      item.taskName.toLowerCase().includes(filter.value.toLowerCase())
  );
}

function onItemDelete(itemId: string) {
  items.value = items.value.filter((item) => item.id != itemId);
}

onMounted(() => {
  const localStorageData = localStorage.getItem(localStorageItemKey);

  if (localStorageData === null) return;

  try {
    items.value = JSON.parse(localStorageData) as TaskItemData[];
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
  <div class="p-4 max-w-3xl">
    <TaskManagerForm
      @submit="onFormSubmit"
      class="rounded-sm border rounded-md border-solid border-gray-400 p-2 mb-4"
    />

    <FilterForm
      :value="filter"
      v-model="filter"
      @update:filter="onFilterValueChange"
      class="rounded-sm border rounded-md border-solid border-gray-400 p-2 mb-4"
    />

    <div>
      <ul class="flex flex-col gap-4">
        <li v-for="(item, index) in filteredItems" :key="index">
          <TaskItem :data="item" @delete="onItemDelete"></TaskItem>
        </li>
      </ul>
    </div>
  </div>
</template>
