<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useRecipeStore } from "../stores/recipe";

const route = useRoute();
const router = useRouter();
const recipeStore = useRecipeStore();

const { getRecipeById } = recipeStore;

const recipe = computed(() => getRecipeById(route.params.id as string));

watchEffect(() => {
  if (recipe.value === undefined) router.push({ name: "not-found" });
});
</script>

<template>
  <div v-if="recipe !== undefined">
    <RouterLink
      :to="{ name: 'edit-recipe', params: { id: recipe.id } }"
      class="btn-primary"
      >Edit</RouterLink
    >

    <hr />

    <p>Name : {{ recipe.name }}</p>
    <p>Description :</p>
    <p>{{ recipe.description }}</p>
  </div>
</template>
