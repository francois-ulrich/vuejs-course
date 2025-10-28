<script setup lang="ts">
import { onBeforeMount } from "vue";
import EventItem from "./EventItem.vue";
import LoadingEventItem from "./LoadingEventItem.vue";
import ErrorMessage from "./ErrorMessage.vue";
import type { Event } from "../types/Event";

import useEvents from "../composables/useEvents";

const { events, state, fetchEvents } = useEvents();

const emit = defineEmits<{
  eventsFetch: [events: Event[]];
}>();

onBeforeMount(async () => {
  await fetchEvents();
  emit("eventsFetch", events.value);
});
</script>

<template>
  <h2 class="text-2xl font-medium">All events</h2>

  <div v-if="state === 'Ok'">
    <div v-if="events.length > 0">
      <ul
        class="grid grid-cols-3 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <li v-for="event in events" :key="event.id">
          <EventItem :event="event" />
        </li>
      </ul>
    </div>
    <div v-else>
      <p class="text-gray-500">No upcoming events !</p>
    </div>
  </div>

  <div v-if="state === 'Loading'">
    <ul class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <li v-for="i in 6" :key="i">
        <LoadingEventItem />
      </li>
    </ul>
  </div>

  <div v-if="state === 'Error'">
    <ErrorMessage :retry-handler="fetchEvents">
      <p>An error has occured and the events couldn't be loaded</p>
    </ErrorMessage>
  </div>
</template>
