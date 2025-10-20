<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import EventItem from "./components/EventItem.vue";
import BookingItem from "./components/BookingItem.vue";
import { fetchEvents } from "./services/eventsService";
import type { Event } from "./types/Event";
import type { Booking } from "./types/Booking";

const data = ref<{ events: Event[]; bookings: Booking[] }>({
  events: [],
  bookings: [],
});

onBeforeMount(async () => {
  try {
    const apiEvents = await fetchEvents();
    data.value.events = apiEvents.map((apiEvent) => {
      const { id, title, date, description } = apiEvent;

      return {
        id,
        title,
        date: new Date(date),
        description,
      };
    });

    console.log(data.value.events);
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <div class="p-4 flex flex-col gap-4" v-if="data">
    <h1 class="text-4xl font-medium">Event Booking App</h1>

    <h2 class="text-2xl font-medium">All events</h2>

    <ul class="grid grid-cols-3 gap-4">
      <li v-for="event in data.events" :key="event.id">
        <EventItem>
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
      <!-- <li v-for="booking in data.bookings" :key="booking.id"> -->
      <li :key="1">
        <BookingItem>
          <template #title>Booking</template>
        </BookingItem>
      </li>
      <li :key="2">
        <BookingItem>
          <template #title>Booking</template>
        </BookingItem>
      </li>
      <li :key="3">
        <BookingItem>
          <template #title>Booking</template>
        </BookingItem>
      </li>
    </ul>
  </div>
</template>
