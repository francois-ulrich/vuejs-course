<script setup lang="ts">
import Button from "../../shared/Components/Button.vue";
import EventCardTemplate from "./templates/EventCardTemplate.vue";
import type { Event } from "../types/Event";
import useBookings from "../composables/useBookings";

interface Props {
  event: Event;
}
const props = defineProps<Props>();

const emit = defineEmits<{
  register: [event: Event];
}>();

const { handleBookingCreation } = useBookings();

async function handleRegister() {
  handleBookingCreation(props.event);
}
</script>

<template>
  <EventCardTemplate>
    <template v-slot:header>
      <div class="p-3">
        <h3 class="text-lg font-semibold">{{ props.event.title }}</h3>
      </div>
    </template>
    <template v-slot:date>
      <div class="p-3">
        <p class="font-medium">{{ props.event.date.toLocaleDateString() }}</p>
      </div>
    </template>
    <div class="mb-4">
      <p>{{ props.event.description }}</p>
    </div>
    <Button @click="handleRegister">Register</Button>
  </EventCardTemplate>
</template>
