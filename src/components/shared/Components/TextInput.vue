<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue: string;
  id: string;
  label: string;
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
});

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
    <label :for="props.id">{{ props.label }}</label>

    <div>
      <textarea
        v-if="type === 'textarea'"
        :id="props.id"
        v-model="value"
      ></textarea>
      <input v-else :type="props.type" :id="props.id" v-model="value" />
    </div>
  </div>
</template>
