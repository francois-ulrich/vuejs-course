<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import EventItem from "./EventItem.vue";
import LoadingEventItem from "./LoadingEventItem.vue";
import { fetchAllEvents } from "../services/eventsService";
import type { Event } from "../types/Event";
import type { EventsListState } from "../types/EventsListState";
import Button from "../../shared/Components/Button.vue";

const events = ref<Event[]>([]);
const isLoadingEvents = ref<boolean>(true);
const state = ref<EventsListState>("None");

const emit = defineEmits<{
  eventsFetch: [events: Event[]];
  eventRegistration: [event: Event];
}>();

const fetchEvents = async () => {
  state.value = "Loading";

  try {
    const apiEvents = await fetchAllEvents();

    events.value = apiEvents.map((apiEvent) => {
      const { id, title, date, description } = apiEvent;

      return {
        id,
        title,
        date: new Date(date),
        description,
      };
    });

    state.value = "Ok";
    emit("eventsFetch", events.value);
  } catch (err) {
    console.error(err);
    state.value = "Error";
    isLoadingEvents.value = false;
  }
};

onBeforeMount(async () => {
  fetchEvents();
});

const handleRetry = () => {
  fetchEvents();
};
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
    <div class="flex items-center flex-col gap-4">
      <p class="inline-block">An error has occured. Try reloading the list !</p>
      <Button @click="handleRetry" class="grow-0 w-32">Retry</Button>
    </div>
  </div>
</template>
