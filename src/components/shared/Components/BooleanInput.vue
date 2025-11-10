<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue: boolean | undefined;
  id: string;
  label: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<template>
  <div class="form-group">
    <div class="flex flex-row items-center">
      <input type="checkbox" :id="props.id" v-model="value" />
      <label :for="props.id" class="pl-2">{{ props.label }}</label>
    </div>
  </div>
</template>
