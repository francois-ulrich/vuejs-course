<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import EventItem from "./components/EventItem.vue";
import BookingItem from "./components/BookingItem.vue";
import { fetchAllEvents } from "./services/eventsService";
import { fetchAllBookings } from "./services/bookingsService";
import type { Event } from "./types/Event";
import type { Booking } from "./types/Booking";

const data = ref<{ events: Event[]; bookings: Booking[] }>({
  events: [],
  bookings: [],
});

const isLoading = ref<boolean>(true);

onBeforeMount(async () => {
  try {
    const apiEvents = await fetchAllEvents();
    const apiBookings = await fetchAllBookings();

    data.value.events = apiEvents.map((apiEvent) => {
      const { id, title, date, description } = apiEvent;

      return {
        id,
        title,
        date: new Date(date),
        description,
      };
    });

    data.value.bookings = apiBookings.map((apiBooking) => {
      const { id, eventId } = apiBooking;

      return {
        id,
        event: data.value.events.find((event) => event.id === eventId),
      };
    });
    console.log(data.value.events);
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
});
</script>
<template>
  <div class="p-4">
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div class="flex flex-col gap-4" v-if="data">
        <h1 class="text-4xl font-medium">Event Booking App</h1>

        <h2 class="text-2xl font-medium">All events</h2>

        <ul class="grid grid-cols-3 gap-4">
          <li v-for="event in data.events" :key="event.id">
            <EventItem :id="event.id">
              <template v-slot:header>
                {{ event.title }}
              </template>
              <template v-slot:date>
                {{ event.date.toLocaleDateString() }}
              </template>
              <p>{{ event.description }}</p>
            </EventItem>
          </li>
        </ul>

        <h2 class="text-2xl font-medium">Your bookings</h2>

        <ul class="flex flex-col gap-4">
          <li v-for="booking in data.bookings" :key="booking.id">
            <BookingItem>
              <template #title>{{ booking.event?.title }}</template>
            </BookingItem>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
