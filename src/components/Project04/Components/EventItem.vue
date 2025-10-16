<script setup lang="ts">
import Button from "../../shared/Components/Button.vue";
import RoundedCard from "../../shared/Components/RoundedCard.vue";

function handleRegister() {
  console.log("ah");
}
</script>

<template>
  <RoundedCard>
    <div class="divide-y divide-gray-200">
      <header>
        <div class="block p-3">
          <h3 class="text-lg font-semibold"><slot name="header"></slot></h3>
        </div>
      </header>
      <main class="block p-3">
        <p class="font-medium"><slot name="date"></slot></p>
      </main>
      <footer class="p-3">
        <div class="mb-4">
          <p><slot></slot></p>
        </div>

        <Button @click="handleRegister">Register</Button>
      </footer>
    </div>
  </RoundedCard>
</template>
