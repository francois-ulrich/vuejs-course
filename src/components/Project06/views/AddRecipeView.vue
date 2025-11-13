<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useRecipeStore, type RecipeArgs } from "../stores/recipe";
import TextInput from "../../../components/shared/Components/TextInput.vue";

const router = useRouter();

const recipeStore = useRecipeStore();

const form = ref<RecipeArgs>({name:"",description:""});

const onSubmit = () => {
  if(form.value.name==="" && form.value.description==="")
    return;

  const newRecipe = recipeStore.addRecipe(form.value);

  router.push({name:"recipe", params: {id:newRecipe.id}})
};
</script>

<template>
  <h1>Add recipe</h1>

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
