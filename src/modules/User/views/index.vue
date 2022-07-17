<template>
  <div>
    <h1 class="mb-4 text-7xl text-cyan-500">Users</h1>
    <div class="max-w-sm m-auto">
      <router-link
        v-for="(user, index) in users"
        :key="index"
        :to="{
          name: 'Profile',
          params: {
            id: user.id,
          },
        }"
      >
        <UserCard :user="user" />
      </router-link>
    </div>
    <router-link to="/error-page">Page not found</router-link>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useUserStore } from "../store";
import UserCard from "./components/UserCard/index.vue";

const userStore = useUserStore();
const page = ref(1);
const users = computed(() => userStore._users);

userStore.getUsers(page.value);
</script>

<style scoped></style>
