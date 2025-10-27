<script setup lang="ts">
import { Check, LoaderCircle } from "lucide-vue-next";
import Button from "../../shared/Components/Button.vue";
import type { Booking } from "../types/Booking";
import BookingCardTemplate from "./templates/BookingCardTemplate.vue";
import { computed } from "vue";
import useBookings from "../composables/useBookings";

interface Props {
  booking: Booking;
}

const props = defineProps<Props>();

const icons = {
  LoaderCircle,
  Check,
};

type IconKey = keyof typeof icons;

const { handleBookingDeletion } = useBookings();

const emit = defineEmits<{
  cancel: [booking: Booking];
}>();

const handleCancelButtonClick = () => {
  emit("cancel", props.booking);
  handleBookingDeletion(props.booking);
};

const currentIcon = computed<IconKey>((_) =>
  props.booking.status === "Success" ? "Check" : "LoaderCircle"
);
</script>

<template>
  <BookingCardTemplate>
    <template v-slot:left-side>
      <div class="flex flex-row justify-between items-center gap-4">
        <p v-if="props.booking.event">
          {{ props.booking.event.title }}
          - Status :
          {{
            props.booking.status === "Success"
              ? "Success !"
              : props.booking.status
          }}
        </p>
        <component
          :is="icons[currentIcon]"
          :class="{ 'animate-spin': props.booking.status === 'Pending' }"
        ></component>
      </div>
    </template>
    <template v-slot:right-side>
      <Button color="danger" @click="handleCancelButtonClick">Cancel</Button>
    </template>
  </BookingCardTemplate>
</template>
