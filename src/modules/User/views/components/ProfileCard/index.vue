<template>
  <div class="profile-card max-w-md m-auto">
    <img
      class="m-auto"
      :src="user.avatar"
      :alt="`${user.first_name} ${user.last_name}`"
    />
    <hr class="my-8" />
    <div class="text-center">
      <p class="text-white">
        <span class="font-semibold">Name:</span> {{ user.first_name }}
        {{ user.last_name }}
      </p>
      <p class="text-white">
        <span class="font-semibold">Email:</span> {{ user.email }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { User } from "../../../models";

defineProps<{ user: User }>();
</script>
