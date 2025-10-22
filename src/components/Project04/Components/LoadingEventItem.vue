<script setup lang="ts">
import EventCardTemplate from "./templates/EventCardTemplate.vue";
</script>

<template>
  <EventCardTemplate class="animate-pulse">
    <template v-slot:header>
      <div class="p-8 bg-gray-300"></div>
    </template>
    <template v-slot:date>
      <div class="p-8 bg-gray-300"></div>
    </template>
    <div class="mb-4">
      <div class="rounded-md bg-gray-300 w-24 h-8"></div>
    </div>
  </EventCardTemplate>
</template>
