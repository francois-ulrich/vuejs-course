<script setup lang="ts">
import type { ImageItemData } from "./Interfaces/ImageItemData";
import ImageItem from "./ImageItem.vue";

interface Props {
  items: ImageItemData[];
}

const emit = defineEmits<{
  delete: [id: string];
}>();

function onItemDelete(itemId: string) {
  emit("delete", itemId);
}

const props = defineProps<Props>();
</script>

<template>
  <ul class="image-gallery-list">
    <li
      class="image-gallery-list-item"
      v-for="item in props.items"
      :key="item.id"
    >
      <ImageItem :data="item" @delete="onItemDelete" />
    </li>
  </ul>
</template>

<style>
.image-gallery-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.image-gallery-list-item {
  width: calc(20% - (10px / 5));
  font-size: 0;
}
</style>
