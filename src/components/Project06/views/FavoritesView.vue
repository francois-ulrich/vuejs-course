<script setup lang="ts">
import { computed } from "vue";
import { useRecipeStore } from "../stores/recipe";

const { recipes, favouriteRecipesIds } = useRecipeStore();

const favouriteRecipes = computed(() =>
  favouriteRecipesIds.map((id) => {
    return recipes.find((recipe) => id === recipe.id);
  })
);
</script>

<template>
  <h1 class="text-2xl">Favourite recipes</h1>

  <div v-if="favouriteRecipes && favouriteRecipes.length > 0">
    <ul class="ml-8 list-disc">
      <li v-for="recipe in favouriteRecipes">
        <RouterLink :to="{ name: 'recipe', params: { id: recipe?.id } }">{{
          recipe?.name
        }}</RouterLink>
      </li>
    </ul>
  </div>
  <p v-else>No recipes found !</p>
</template>
