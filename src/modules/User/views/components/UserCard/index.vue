<template>
  <div
    class="user-card flex items-center mb-4 rounded-lg overflow-hidden bg-slate-800"
  >
    <img
      class="h-28 bg-white"
      :src="user.avatar"
      :alt="`${user.first_name} ${user.last_name}`"
    />
    <div class="pl-4 text-left">
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
