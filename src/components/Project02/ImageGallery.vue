<script setup lang="ts">
import { ref } from "vue";
import ImageGalleryForm from "./ImageGalleryForm.vue";
import ImageGalleryList from "./ImageGalleryList.vue";
import type { ImageGalleryFormData } from "./Interfaces/ImageGalleryFormData";
import type { ImageItemData } from "./Interfaces/ImageItemData";
import { v4 as uuidv4 } from "uuid";

let items = ref<ImageItemData[]>([]);

function onFormSubmit(data: ImageGalleryFormData) {
  const newItem = {
    imageUrl: data.imageUrl,
    isInFavorites: false,
    id: uuidv4(),
  };

  items.value.push(newItem);
}

function onItemDelete(itemId: string) {
  items.value = items.value.filter((item) => item.id != itemId);
}
</script>

<template>
  <div class="image-gallery">
    <ImageGalleryForm @submit="onFormSubmit" />
    <hr />
    <div>
      <ImageGalleryList
        :items="items"
        v-if="items.length > 0"
        @delete="onItemDelete"
      />
      <div v-else>
        <p>No images added yet. Add some !</p>
      </div>
    </div>
  </div>
</template>

<style>
.image-gallery {
  text-align: left;
}
</style>
