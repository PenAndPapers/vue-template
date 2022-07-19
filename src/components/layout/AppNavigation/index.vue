<template>
  <header class="my-4">
    <nav>
      <span
        v-for="(route, index) in routes"
        :key="index"
        :class="index < routes.length - 1 ? 'mr-4' : ''"
      >
        <router-link :to="route" v-if="!route.meta.hideInNav">
          {{ route.name }}
        </router-link>
      </span>
      <span class="ml-4" @click="handleLogout" v-if="isLogOut">
        <a>Log out</a>
      </span>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { isAuthenticated } from "@/middleware/auth";
import { clearSession } from "@/utils/session";

const router = useRouter();
const routes = ref();
const isLogOut = ref(false);

const handleLogout = () => {
  clearSession();
  router.replace({ path: "/" });
};

watch(
  router.currentRoute,
  () => {
    routes.value = router
      .getRoutes()
      .map((item) => {
        return !item.meta.hideInNav ? item : null;
      })
      .filter(Boolean);

    isLogOut.value = isAuthenticated();
  },
  { deep: true }
);
</script>

<style scoped></style>
