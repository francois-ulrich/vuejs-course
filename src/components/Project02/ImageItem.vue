<script setup lang="ts">
import { ref } from "vue";
import type { ImageItemData } from "./Interfaces/ImageItemData";

interface Props {
  data: ImageItemData;
}

let isInFavorites = ref<boolean>(false);

const emit = defineEmits<{
  delete: [id: string];
}>();

function addToFavorites() {
  isInFavorites.value = !isInFavorites.value;
}

function handleDelete() {
  emit("delete", props.data.id);
}

const props = defineProps<Props>();
</script>

<template>
  <article class="image-item">
    <img :src="props.data.imageUrl" class="image-item-img" />
    <button class="btn-delete" v-on:click="handleDelete">X</button>
    <button
      v-on:click="addToFavorites"
      :class="{ 'btn-favorite': true, 'btn-favorite--favorite': isInFavorites }"
    >
      {{ isInFavorites ? "In favourites" : "Not in favourites" }}
    </button>
  </article>
</template>

<style>
.image-item {
  width: 100%;
  position: relative;
}

.image-item-img {
  width: 100%;
}

button {
  font-size: 14px;
}

.btn-favorite {
  position: absolute;
  bottom: 10px;
  right: 10px;

  /* width: 20px;
  height: 20px; */
}

.btn-favorite--favorite {
  background-color: gold;
  color: black;
}

.btn-delete {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
