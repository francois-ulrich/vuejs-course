<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useRecipeStore } from "../stores/recipe";

const route = useRoute();
const recipeStore = useRecipeStore();

const { getRecipeById } = recipeStore;
// watch(
//   () => route.params.id,
//   () => {
//     console.log(
//       "Fetching data inside watch? Route params id: " + route.params.id
//     );
//   },
//   { immediate: true }
// );

const recipe = computed(() => getRecipeById(route.params.id as string));
</script>

<template>
  <div v-if="recipe !== undefined">
    {{ recipe }}
  </div>

  <!-- <h1>Recipe id : {{ $route.params.id }}</h1> -->
</template>
