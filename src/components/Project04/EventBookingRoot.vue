<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import type { Booking } from "./Types/Booking";
import type { Event } from "./Types/Event";
import type { EventBooking } from "./Types/EventBooking";
import EventItem from "./Components/EventItem.vue";
import BookingItem from "./Components/BookingItem.vue";
import { loadFromLocalStorage } from "../../util/loadFromLocalStorage";

const localStorageItemKey = "eventBookings";
const data = ref<EventBooking>();

onBeforeMount(() => {
  data.value = loadFromLocalStorage<EventBooking>(localStorageItemKey, {
    events: [
      {
        id: "1",
        title: "Vue Conference 2024",
        date: new Date(),
        description: "Conference about Vue and JavaScript",
      },
      {
        id: "2",
        title: "Vue Conference 2024 2",
        date: new Date(),
        description: "Conference about Vue and JavaScript",
      },
      {
        id: "3",
        title: "Vue Conference 2024 3",
        date: new Date(),
        description: "Conference about Vue and JavaScript",
      },
      {
        id: "4",
        title: "Vue Conference 2024 4",
        date: new Date(),
        description: "Conference about Vue and JavaScript",
      },
      {
        id: "5",
        title: "Vue Conference 2024 5",
        date: new Date(),
        description: "Conference about Vue and JavaScript",
      },
      {
        id: "6",
        title: "Vue Conference 2024 6",
        date: new Date(),
        description: "Conference about Vue and JavaScript",
      },
    ],
    bookings: [],
  });
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
          <template v-slot:title>Booking</template>
        </BookingItem>
      </li>
      <li :key="2">
        <BookingItem>
          <template v-slot:title>Booking</template>
        </BookingItem>
      </li>
      <li :key="3">
        <BookingItem>
          <template v-slot:title>Booking</template>
        </BookingItem>
      </li>
    </ul>
  </div>
</template>
