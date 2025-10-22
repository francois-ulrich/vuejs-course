<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import EventItem from "./components/EventItem.vue";
import BookingItem from "./components/BookingItem.vue";
import { fetchAllEvents } from "./services/eventsService";
import {
  addBooking,
  deleteBooking,
  fetchAllBookings,
} from "./services/bookingsService";
import type { Event } from "./types/Event";
import type { Booking } from "./types/Booking";
import LoadingEventItem from "./components/LoadingEventItem.vue";
import { BookingStatus } from "./types/BookingStatus";
import LoadingBookingItem from "./components/LoadingBookingItem.vue";

const data = ref<{ events: Event[]; bookings: Booking[] }>({
  events: [],
  bookings: [],
});

const isLoadingEvents = ref<boolean>(true);
const isLoadingBookings = ref<boolean>(true);

const fetchEvents = async () => {
  try {
    const apiEvents = await fetchAllEvents();

    data.value.events = apiEvents.map((apiEvent) => {
      const { id, title, date, description } = apiEvent;

      return {
        id,
        title,
        date: new Date(date),
        description,
      };
    });
  } catch (err) {
    console.error(err);
  } finally {
    isLoadingEvents.value = false;
  }
};

const fetchBookings = async () => {
  try {
    const apiBookings = await fetchAllBookings();

    data.value.bookings = apiBookings.map((apiBooking) => {
      const { id, eventId } = apiBooking;

      return {
        id,
        event: data.value.events.find((event) => event.id === eventId),
        status: BookingStatus.Pending,
      };
    });
  } catch (err) {
    console.error(err);
  } finally {
    isLoadingBookings.value = false;
  }
};

onBeforeMount(async () => {
  fetchEvents();
  fetchBookings();
});

const handleEventRegister = (event: Event) => {
  addBooking(event);
};

const handleBookingCancel = (booking: Booking) => {
  deleteBooking(booking);
};
</script>

<template>
  <div class="p-4">
    <div class="flex flex-col gap-4" v-if="data">
      <h1 class="text-4xl font-medium">Event Booking App</h1>

      <h2 class="text-2xl font-medium">All events</h2>

      <div v-if="!isLoadingEvents">
        <ul class="grid grid-cols-3 gap-4">
          <li v-for="event in data.events" :key="event.id">
            <EventItem :event="event" @register="handleEventRegister" />
          </li>
        </ul>
      </div>
      <div v-else>
        <ul class="grid grid-cols-3 gap-4">
          <li v-for="i in 6" :key="i">
            <LoadingEventItem />
          </li>
        </ul>
      </div>

      <h2 class="text-2xl font-medium">Your bookings</h2>

      <div v-if="!isLoadingBookings">
        <div v-if="data.bookings.length > 0">
          <ul class="flex flex-col gap-4">
            <li v-for="booking in data.bookings" :key="booking.id">
              <BookingItem :booking="booking" @cancel="handleBookingCancel">
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
