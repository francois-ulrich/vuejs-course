<script setup lang="ts">
import ImageGalleryForm from "./ImageGalleryForm.vue";
import ImageGalleryList from "./ImageGalleryList.vue";
import type { ImageGalleryFormData } from "./Interfaces/ImageGalleryFormData";

function onFormSubmit(data: ImageGalleryFormData) {
  console.log(data.imageUrl);
}
</script>

<template>
  <div class="image-gallery">
    <ImageGalleryForm @submit="onFormSubmit" />
    <hr />
    <ImageGalleryList />
  </div>
</template>

<style>
.image-gallery {
  text-align: left;
}
</style>
