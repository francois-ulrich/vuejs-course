<script setup lang="ts">
import type { TaskItemData } from "../Types/TaskItemData";

interface Props {
  data: TaskItemData;
}

const props = defineProps<Props>();
</script>

<template>
  <article class="task-item">
    <p>{{ props }}</p>
  </article>
</template>
