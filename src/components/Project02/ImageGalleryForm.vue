<script setup lang="ts">
import { ref } from "vue";
import type { ImageGalleryFormData } from "./Interfaces/ImageGalleryFormData";

let form = ref<ImageGalleryFormData>({ imageUrl: "" });

const emit = defineEmits<{
  submit: [value: ImageGalleryFormData];
}>();

function onSubmit() {
  if (form.value.imageUrl === "") return;

  emit("submit", form.value);
}
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="imageUrl">Add image url</label>
      <br></br>
      <input
        v-model="form.imageUrl"
        id="imageUrl"
        name="imageUrl"
        ref="imageUrlInputRef"
      />

      <input type="submit" value="Add image" />
    </form>
  </div>
</template>
