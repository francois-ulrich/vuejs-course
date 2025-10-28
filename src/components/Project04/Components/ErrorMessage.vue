<script setup lang="ts">
import Button from "../../shared/Components/Button.vue";
import RoundedCard from "../../shared/Components/RoundedCard.vue";

interface Props {
  retryHandler(): void;
}

const props = defineProps<Props>();
</script>

<template>
  <RoundedCard>
    <div class="flex items-center flex-col gap-4 p-4">
      <slot></slot>
      <Button @click="props.retryHandler" class="grow-0 w-32">Retry</Button>
    </div>
  </RoundedCard>
</template>
