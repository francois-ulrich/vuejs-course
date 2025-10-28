<script setup lang="ts">
import BookingList from "./components/BookingList.vue";
import EventList from "./components/EventList.vue";
import useBookings from "./composables/useBookings";

const { fetchBookings } = useBookings();
</script>

<template>
  <div class="p-4">
    <div class="flex flex-col gap-4">
      <h1 class="text-4xl font-medium">Event Booking App</h1>

      <EventList @eventsFetch="(loadedEvents) => fetchBookings(loadedEvents)" />
      <BookingList />
    </div>
  </div>
</template>
