<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, ref, watchEffect } from "vue";
import { useRecipeStore, type RecipeArgs } from "../stores/recipe";
import TextInput from "../../../components/shared/Components/TextInput.vue";

const route = useRoute();
const router = useRouter();
const recipeStore = useRecipeStore();

const { getRecipeById } = recipeStore;

const recipe = computed(() => getRecipeById(route.params.id as string));

const form = ref<RecipeArgs>({
  name:recipe.value?.name ?? "",
  description:recipe.value?.description ?? ""
});

const onSubmit = () => {
  if(recipe.value === undefined)
    return;

  if(form.value.name==="" && form.value.description==="")
    return;

  recipeStore.editRecipe(recipe.value?.id, form.value);
  router.push({name:"recipe", params: {id:recipe.value?.id}})
};

watchEffect(() => {
  if (recipe.value === undefined) router.push({ name: "not-found" });
});
</script>

<template>
  <h1>Edit recipe</h1>

  <form @submit.prevent="onSubmit" class="flex flex-col gap-4">

  <TextInput
    id="name"
    label="Name"
    v-model="form.name"
  />
  
  <TextInput
    id="description"
    label="Description"
    v-model="form.description"
    type="textarea"
  />

  <input type="submit" class="btn-primary cursor-pointer" value="Submit"></input>
</form>
</template>
