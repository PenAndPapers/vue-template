<template>
  <component class="text-center" :class="classes" :is="'layout'">
    <AppNavigation />
    <AppMain />
    <AppFooter />
  </component>
</template>

<script setup lang="ts">
import AppNavigation from "./AppNavigation/index.vue";
import AppMain from "./AppMain/index.vue";
import AppFooter from "./AppFooter/index.vue";

const props = defineProps<{
  classes: string;
}>();
</script>
