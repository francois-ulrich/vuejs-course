<script setup lang="ts">
import RoundedCard from "../../shared/Components/RoundedCard.vue";
import Button from "../../shared/Components/Button.vue";
import type { Booking } from "../types/Booking";

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
  <RoundedCard>
    <div class="p-4 flex flex-row justify-between items-center">
      <p>
        <slot name="title" v-if="props.booking.event">
          {{ props.booking.event.title }}
        </slot>
        - Status :
      </p>
      <Button color="danger" @click="handleCancelButtonClick">Cancel</Button>
    </div>
  </RoundedCard>
</template>
