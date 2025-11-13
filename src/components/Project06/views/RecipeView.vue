<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// onMounted(() => {
//   console.log("Fetching data inside onMounted");
// });

watch(
  () => route.params.id,
  () => {
    console.log(
      "Fetching data inside watch? Route params id: " + route.params.id
    );
  },
  { immediate: true }
);
</script>

<template>
  <h1>Recipe : {{ $route.params.id }}</h1>
</template>
