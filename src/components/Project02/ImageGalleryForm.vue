<script setup lang="ts">
import { ref } from "vue";
import type { ImageGalleryFormData } from "./Interfaces/ImageGalleryFormData";

let form = ref<ImageGalleryFormData>({ imageUrl: "" });
const emit = defineEmits<{
  submit: [value: ImageGalleryFormData];
}>();

function onSubmit() {
  emit("submit", form.value);
}
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input v-model="form.imageUrl" name="imageUrl" ref="imageUrlInputRef" />

      <input type="submit" value="Add Photo" />
    </form>
  </div>
</template>
