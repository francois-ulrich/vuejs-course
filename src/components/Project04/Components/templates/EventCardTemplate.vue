<script setup lang="ts">
import RoundedCard from "../../../shared/Components/RoundedCard.vue";
</script>

<template>
  <RoundedCard>
    <div class="divide-y divide-gray-200">
      <header>
        <div class="block">
          <slot name="header"></slot>
        </div>
      </header>
      <main class="block">
        <slot name="date"></slot>
      </main>
      <footer class="p-3">
        <slot></slot>
      </footer>
    </div>
  </RoundedCard>
</template>
