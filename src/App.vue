<template>
  <Layout :classes="classes" />
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Layout from "@/components/layout/index.vue";

const route = useRoute();
const classes = ref("");

watchEffect(() => {
  if (
    Object.keys(route.meta).length > 0 &&
    Object.prototype.hasOwnProperty.call(route.meta, "class")
  ) {
    classes.value = route.meta.class as string;
  }
});
</script>

<style>
@import "@/assets/base.css";
@import "@/assets/tailwind";
</style>
