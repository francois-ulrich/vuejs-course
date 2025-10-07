<script setup lang="ts">
import { ref } from "vue";
import type { ImageItemData } from "./Interfaces/ImageItemData";

let data = ref<ImageItemData>();
</script>

<template>
  <article>
    <p>id&nbsp;:{{ data?.id }}</p>
    <p>imageUrl&nbsp;:{{ data?.imageUrl }}</p>
    <p>isInFavorites&nbsp;:{{ data?.isInFavorites }}</p>
  </article>
</template>
