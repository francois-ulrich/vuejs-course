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

      <select :id="props.id" v-model="value">
        <option disabled value="">Please select an option</option>
        <option
          v-for="option in options"
          :key="option"
          :value="option.toLowerCase()"
          
        >
          {{ option }}
        </option>
      </select>
    </fieldset>
  </div>
</template>
