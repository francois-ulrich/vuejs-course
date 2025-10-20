<script setup lang="ts">
import Button from "../../shared/Components/Button.vue";
import { addBooking } from "../services/bookingsService";
import type { Event } from "../types/Event";
import EventCardTemplate from "./templates/EventCardTemplate.vue";

interface Props {
  event: Event;
}

const props = defineProps<Props>();

async function handleRegister() {
  const newBooking = await addBooking(props.event);
  console.log(newBooking);
}
</script>

<template>
  <EventCardTemplate>
    <template v-slot:header>
      <div class="p-3">
        <h3 class="text-lg font-semibold">{{ event.title }}</h3>
      </div>
    </template>
    <template v-slot:date>
      <div class="p-3">
        <p class="font-medium">{{ event.date.toLocaleDateString() }}</p>
      </div>
    </template>
    <div class="mb-4">
      <p>{{ event.description }}</p>
    </div>
    <Button @click="handleRegister">Register</Button>
  </EventCardTemplate>
</template>
