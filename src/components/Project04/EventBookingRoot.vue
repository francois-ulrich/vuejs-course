<script setup lang="ts">
import BookingItem from "./components/BookingItem.vue";

import type { Event } from "./types/Event";
import LoadingBookingItem from "./components/LoadingBookingItem.vue";
import EventList from "./components/EventList.vue";
import useBookings from "./composables/useBookings";

const { bookings, isLoadingBookings, fetchBookings } = useBookings();

const onEventsFetch = (loadedEvents: Event[]) => {
  fetchBookings(loadedEvents);
};
</script>

<template>
  <div class="p-4">
    <div class="flex flex-col gap-4">
      <h1 class="text-4xl font-medium">Event Booking App</h1>

      <EventList @eventsFetch="onEventsFetch" />

      <h2 class="text-2xl font-medium">Your bookings</h2>

      <div v-if="!isLoadingBookings">
        <div v-if="bookings.length > 0">
          <ul class="flex flex-col gap-4">
            <li v-for="booking in bookings" :key="booking.id">
              <BookingItem :booking="booking">
                <template #title>{{ booking.event?.title }}</template>
              </BookingItem>
            </li>
          </ul>
        </div>
        <div v-else>
          <p class="text-gray-500">No bookings yet !</p>
        </div>
      </div>
      <div v-else>
        <ul class="flex flex-col gap-4">
          <li v-for="i in 3" :key="i">
            <LoadingBookingItem />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
