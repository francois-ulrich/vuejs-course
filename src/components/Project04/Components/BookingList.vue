<script setup lang="ts">
import useBookings from "../composables/useBookings";
import useEvents from "../composables/useEvents";
import BookingItem from "./BookingItem.vue";
import ErrorMessage from "./ErrorMessage.vue";
import LoadingBookingItem from "./LoadingBookingItem.vue";

const { state, bookings, fetchBookings } = useBookings();
const { events } = useEvents();
</script>

<template>
  <h2 class="text-2xl font-medium">Your bookings</h2>

  <div v-if="state === 'Ok'">
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

  <div v-if="state === 'Loading'">
    <ul class="flex flex-col gap-4">
      <li v-for="i in 3" :key="i">
        <LoadingBookingItem />
      </li>
    </ul>
  </div>

  <div v-if="state === 'Error'">
    <ErrorMessage
      :retry-handler="
        async () => {
          fetchBookings(events);
        }
      "
    >
      <p>An error has occured and the bookings couldn't be loaded</p>
    </ErrorMessage>
  </div>
</template>
