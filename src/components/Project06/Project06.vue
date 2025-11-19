<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="p-4">
    <h1>project 06</h1>

    <nav class="flex gap-4 border-b pb-2 mb-4">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'favorites' }">Favorites</RouterLink>
      <RouterLink :to="{ name: 'add-recipe' }">Add recipe</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>
