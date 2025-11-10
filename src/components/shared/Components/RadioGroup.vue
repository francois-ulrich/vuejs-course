<script setup lang="ts">
import { computed } from "vue";

interface Props<T extends string> {
  modelValue: T;
  id: string;
  label: string;
  options: T[];
}

const props = defineProps<Props<string>>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<template>
  <div class="form-group">
    <fieldset>
      <legend>{{ props.label }}</legend>

      <div
        v-for="option in options"
        :key="option"
        class="flex flex-row items-center"
      >
        <input
          type="radio"
          :id="option"
          :value="option.toLowerCase()"
          v-model="value"
        />
        <label :for="option">{{ option }}</label>
      </div>
    </fieldset>
  </div>
</template>
