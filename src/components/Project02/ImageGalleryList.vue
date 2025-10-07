<script setup lang="ts">
import type { ImageItemData } from "./Interfaces/ImageItemData";
import ImageItem from "./ImageItem.vue";

interface Props {
  items: ImageItemData[];
}

const props = defineProps<Props>();
</script>

<template>
  <ul>
    <li v-for="item in props.items">
      <ImageItem :data="item" />
    </li>
  </ul>
</template>
