<script setup lang="ts">
import RoundedCard from "../../../shared/Components/RoundedCard.vue";
</script>

<template>
  <RoundedCard>
    <div class="p-4 flex flex-row justify-between items-center">
      <slot name="left-side"></slot>
      <slot name="right-side"></slot>
    </div>
  </RoundedCard>
</template>
