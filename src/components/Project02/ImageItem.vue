<script setup lang="ts">
import type { ImageItemData } from "./Interfaces/ImageItemData";

interface Props {
  data: ImageItemData;
}

const props = defineProps<Props>();
</script>

<template>
  <article>
    <p>id&nbsp;:{{ props.data.id }}</p>
    <p>imageUrl&nbsp;:{{ props.data.imageUrl }}</p>
    <p>isInFavorites&nbsp;:{{ props.data.isInFavorites }}</p>
  </article>
</template>
