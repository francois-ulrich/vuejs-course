<script setup lang="ts">
import BookingCardTemplate from "./templates/BookingCardTemplate.vue";
</script>

<template>
  <BookingCardTemplate class="animate-pulse">
    <template v-slot:left-side>
      <div class="rounded-md bg-gray-300 w-80 h-6"></div>
    </template>
    <template v-slot:right-side>
      <div class="rounded-md bg-gray-300 w-24 h-8"></div>
    </template>
  </BookingCardTemplate>
</template>
