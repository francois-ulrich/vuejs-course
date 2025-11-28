<script setup lang="ts">
import TextInput from "../../../components/shared/Components/TextInput.vue";
import RecipeList from "../components/RecipeList.vue";
import { useRecipeStore } from "../stores/recipe";
import { computed, ref } from "vue";

const { filteredRecipes } = useRecipeStore();

const searchQuery = ref<string>("");

const recipeItems = computed(() => filteredRecipes(searchQuery.value));
</script>

<template>
  <h1 class="text-2xl">Home</h1>

  <h2 class="text-xl">Recipes</h2>

  <div class="py-4">
    <TextInput id="search" label="Search recipe" v-model="searchQuery" />
  </div>

  <hr />

  <RecipeList :recipes="recipeItems"></RecipeList>
</template>
