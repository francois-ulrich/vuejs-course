<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useRecipeStore } from "../stores/recipe";

const route = useRoute();
const router = useRouter();
const recipeStore = useRecipeStore();

const { getRecipeById, isInFavourites, toggleFavourite } = recipeStore;

const recipe = computed(() => getRecipeById(route.params.id as string));
const inFavourites = computed<boolean>(
  () => recipe.value !== undefined && isInFavourites(recipe.value)
);

watchEffect(() => {
  if (recipe.value === undefined) router.push({ name: "not-found" });
});

const toggleFavourites = () => {
  if (recipe.value !== undefined) toggleFavourite(recipe.value);
};
</script>

<template>
  <div v-if="recipe !== undefined">
    <div class="space-x-4">
      <button @click="toggleFavourites">
        {{ inFavourites ? "Remove from favourites" : "Add to favourites" }}
      </button>
      <RouterLink
        :to="{ name: 'edit-recipe', params: { id: recipe.id } }"
        class="btn-primary"
        >Edit</RouterLink
      >
    </div>

    <hr />

    <p>Name : {{ recipe.name }}</p>
    <p>Description :</p>
    <p>{{ recipe.description }}</p>
  </div>
</template>
