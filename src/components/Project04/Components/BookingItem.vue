<script setup lang="ts">
import RoundedCard from "../../shared/Components/RoundedCard.vue";
import Button from "../../shared/Components/Button.vue";
</script>

<template>
  <RoundedCard>
    <div class="p-4 flex flex-row justify-between items-center">
      <p><slot name="title"></slot> - Status :</p>
      <Button color="danger">Cancel</Button>
    </div>
  </RoundedCard>
</template>
