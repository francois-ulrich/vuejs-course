<script setup lang="ts">
import { ref } from "vue";
import ImageGalleryForm from "./ImageGalleryForm.vue";
import ImageGalleryList from "./ImageGalleryList.vue";
import type { ImageGalleryFormData } from "./Interfaces/ImageGalleryFormData";
import type { ImageItemData } from "./Interfaces/ImageItemData";

let items = ref<ImageItemData[]>([]);

function onFormSubmit(data: ImageGalleryFormData) {
  console.log(data.imageUrl);

  const newItem = {
    imageUrl: data.imageUrl,
    isInFavorites: false,
    id: 0,
  };

  items.value.push(newItem);
}
</script>

<template>
  <div class="image-gallery">
    <ImageGalleryForm @submit="onFormSubmit" />
    <hr />
    <ImageGalleryList :items="items" />
  </div>
</template>

<style>
.image-gallery {
  text-align: left;
}
</style>
