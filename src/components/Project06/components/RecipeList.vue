<script setup lang="ts">
import type { Recipe } from "../stores/recipe";

const props = defineProps<{ recipes: Recipe[] }>();
</script>

<template>
  <div class="ml-8">
    <ul v-if="props.recipes && props.recipes.length > 0" class="list-disc">
      <li v-for="recipe in props.recipes">
        <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }">{{
          recipe.name
        }}</RouterLink>
      </li>
    </ul>
    <p v-else>No recipes found !</p>
  </div>
</template>
