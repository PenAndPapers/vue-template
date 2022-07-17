<template>
  <input type="text" :class="classes" v-model="input" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
  value: string | number;
  classes: string;
}>();

const input = ref();

onMounted(() => (input.value = props.value));
</script>

<style scoped></style>
