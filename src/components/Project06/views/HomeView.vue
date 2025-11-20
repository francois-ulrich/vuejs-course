<script setup lang="ts">
import TextInput from "../../../components/shared/Components/TextInput.vue";
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

  <div class="ml-8">
    <ul v-if="recipeItems && recipeItems.length > 0" class="list-disc">
      <li v-for="recipe in recipeItems">
        <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }">{{
          recipe.name
        }}</RouterLink>
      </li>
    </ul>
    <p v-else>No recipes found !</p>
  </div>
</template>
