<template>
  <div>
    <h1 class="mb-4 text-7xl text-orange-500">Profile</h1>
    <ProfileCard :user="user" v-if="user" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUserStore } from "../store";
import { useRouter } from "vue-router";
import ProfileCard from "./components/ProfileCard/index.vue";

const userStore = useUserStore();
const router = useRouter();
const user = computed(() => userStore._user);

userStore.getUser(router.currentRoute.value.params.id as string);
</script>

<style scoped></style>
