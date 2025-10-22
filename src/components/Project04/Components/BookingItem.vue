<script setup lang="ts">
import Button from "../../shared/Components/Button.vue";
import type { Booking } from "../types/Booking";
import BookingCardTemplate from "./templates/BookingCardTemplate.vue";

interface Props {
  booking: Booking;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  cancel: [booking: Booking];
}>();

const handleCancelButtonClick = () => {
  emit("cancel", props.booking);
};
</script>

<template>
  <BookingCardTemplate>
    <template v-slot:left-side>
      <p>
        <slot name="title" v-if="props.booking.event">
          {{ props.booking.event.title }}
        </slot>
        - Status : {{ props.booking.status }}
      </p>
    </template>
    <template v-slot:right-side>
      <Button color="danger" @click="handleCancelButtonClick">Cancel</Button>
    </template>
  </BookingCardTemplate>
</template>
