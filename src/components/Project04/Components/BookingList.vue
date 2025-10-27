<script setup lang="ts">
import useBookings from "../composables/useBookings";
import BookingItem from "./BookingItem.vue";
import LoadingBookingItem from "./LoadingBookingItem.vue";

const { bookings, isLoadingBookings } = useBookings();
</script>

<template>
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
</template>
