<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
  &nbsp;
  <button @click="count--">Subtract</button>

  <h1 v-if="count >= 15">sorry nothing</h1>
</template>
