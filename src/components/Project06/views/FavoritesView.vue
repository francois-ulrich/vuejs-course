<script setup lang="ts">
import { useRecipeStore } from "../stores/recipe";
import RecipeList from "../components/RecipeList.vue";

const { favouriteRecipes } = useRecipeStore();
</script>

<template>
  <h1 class="text-2xl">Favourite recipes</h1>

  <RecipeList :recipes="favouriteRecipes"></RecipeList>
</template>
