<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <h1>project 06</h1>

  <nav class="flex gap-4 border-b pb-2 mb-4">
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'favorites' }">Favorites</RouterLink>
    <RouterLink :to="{ name: 'recipe', params: { id: 1 } }"
      >Recipe 1</RouterLink
    >
    <RouterLink :to="{ name: 'recipe', params: { id: 2 } }"
      >Recipe 2</RouterLink
    >
    <RouterLink :to="{ name: 'recipe', params: { id: 3 } }"
      >Recipe 3</RouterLink
    >
    <RouterLink :to="{ name: 'add-recipe' }">Add recipe</RouterLink>
  </nav>

  <RouterView />
</template>
