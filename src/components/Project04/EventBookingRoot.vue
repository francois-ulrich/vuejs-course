<script setup lang="ts">
import { ref } from "vue";
import BookingItem from "./components/BookingItem.vue";

import {
  addBooking,
  deleteBooking,
  fetchAllBookings,
} from "./services/bookingsService";
import type { Event } from "./types/Event";
import type { Booking } from "./types/Booking";
import LoadingBookingItem from "./components/LoadingBookingItem.vue";
import EventList from "./components/EventList.vue";

const bookings = ref<Booking[]>([]);

const isLoadingBookings = ref<boolean>(true);

const fetchBookings = async (events: Event[]) => {
  try {
    const apiBookings = await fetchAllBookings();

    const apiBookingsWithExistingEvents = apiBookings.filter(
      (apiBooking) =>
        events.find((event) => event.id === apiBooking.eventId) != null
    );

    bookings.value = apiBookingsWithExistingEvents.map((apiBooking) => {
      const { id, eventId } = apiBooking;

      const event = events.find((event) => event.id === eventId);

      return {
        id,
        event,
        status: "Success",
      };
    });
  } catch (err) {
    console.error(err);
  } finally {
    isLoadingBookings.value = false;
  }
};

const handleBookingCreation = async (event: Event) => {
  if (
    bookings.value.some(
      (booking) => booking.event && booking.event.id === event.id
    )
  ) {
    return;
  }

  const tempBooking: Booking = {
    id: "",
    event: event,
    status: "Pending",
  };

  try {
    bookings.value.push(tempBooking);

    const result = await addBooking(event);

    if (result === null)
      throw new Error(
        "Error when registering booking : No booking returned from API"
      );

    const tempBookingIndex = bookings.value.indexOf(tempBooking);

    const { id } = result;

    bookings.value[tempBookingIndex] = {
      id,
      event,
      status: "Success",
    };
  } catch {
    const tempBookingIndex = bookings.value.indexOf(tempBooking);

    bookings.value[tempBookingIndex] = {
      id: "",
      event,
      status: "Failed",
    };
  }
};

const handleBookingDeletion = async (bookingToDelete: Booking) => {
  const bookingIndex = bookings.value.indexOf(bookingToDelete);

  try {
    bookings.value = bookings.value.filter(
      (booking) => booking.id != bookingToDelete.id
    );

    await deleteBooking(bookingToDelete);
  } catch {
    bookings.value.splice(bookingIndex, 0, bookingToDelete);
  }
};

const onEventsFetch = (loadedEvents: Event[]) => {
  fetchBookings(loadedEvents);
};
</script>

<template>
  <div class="p-4">
    <div class="flex flex-col gap-4">
      <h1 class="text-4xl font-medium">Event Booking App</h1>

      <EventList
        @eventRegistration="handleBookingCreation"
        @eventsFetch="onEventsFetch"
      />

      <h2 class="text-2xl font-medium">Your bookings</h2>

      <div v-if="!isLoadingBookings">
        <div v-if="bookings.length > 0">
          <ul class="flex flex-col gap-4">
            <li v-for="booking in bookings" :key="booking.id">
              <BookingItem :booking="booking" @cancel="handleBookingDeletion">
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
