<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const onSubmit = () => {
  router.push({ name: "recipe", params: { id: 1 } });
};
</script>

<template>
  <h1>Add recipe</h1>

  <form @submit.prevent="onSubmit">
    <input type="submit" value="add" />
  </form>
</template>
