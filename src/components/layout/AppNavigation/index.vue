<template>
  <header class="my-4">
    <nav>
      <span v-for="(route, index) in routes" :key="index">
        <router-link :to="route" v-if="!route.meta.hideInNav" class="mr-4">
          {{ route.name }}
        </router-link>
      </span>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const routes = ref(router.getRoutes());

watch(
  router.currentRoute,
  () => {
    routes.value = router.getRoutes();
  },
  { deep: true }
);
</script>

<style scoped></style>
