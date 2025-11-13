<script setup lang="ts">
import TextInput from "../../../components/shared/Components/TextInput.vue";
import { useRecipeStore } from "../stores/recipe";
import { computed, ref } from "vue";

const { filteredRecipes } = useRecipeStore();

const searchQuery = ref<string>("");

const recipeItems = computed(() => filteredRecipes(searchQuery.value));
</script>

<template>
  <h1>Home</h1>

  <h2>Recipes</h2>

  <TextInput id="search" label="Search recipe" v-model="searchQuery" />

  <hr />

  <ul v-if="recipeItems && recipeItems.length > 0">
    <li v-for="recipe in recipeItems">
      <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }">{{
        recipe.name
      }}</RouterLink>
    </li>
  </ul>
  <p v-else>No recipes found !</p>
</template>
