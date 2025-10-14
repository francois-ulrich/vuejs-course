<script setup lang="ts">
import { ref, watch } from "vue";
import { debounce } from "lodash";

interface Props {
  value: string;
}

const props = defineProps<Props>();
let localFilterValue = ref<string>(props.value);

const emit = defineEmits<{
  (e: "update:filter", value: string): void;
}>();

const debouncedSearch = debounce((value: string) => {
  emit("update:filter", value);
}, 300);

watch(localFilterValue, (newValue) => {
  debouncedSearch(newValue);
});
</script>
<template>
  <div>
    <label for="taskName">Filter :</label>
    <input
      type="text"
      id="taskName"
      name="taskName"
      v-model="localFilterValue"
      ref="filterInputRef"
      class="rounded-sm border border-solid border-gray-400 ml-2 p-1"
    />
  </div>
</template>
