<template>
  <form class="m-auto w-96" @submit.prevent="handleValidateForm">
    <div class="field mb-4">
      <label class="block text-left text-white" for="email">Email</label>
      <input
        type="email"
        class="w-full h-10 text-black px-4"
        id="email"
        v-model="form.email"
      />
    </div>
    <div class="field mb-4">
      <label class="block text-left text-white" for="password">Password</label>
      <input
        type="password"
        class="w-full h-10 text-black px-4"
        id="password"
        v-model="form.password"
      />
    </div>
    <button type="submit" class="w-full h-10 bg-green-700 text-white">
      Submit
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useLoginStore } from "@/modules/Login/store";

const loginStore = useLoginStore();

const form = reactive({
  email: "eve.holt@reqres.in",
  password: "cityslicka",
});

const handleValidateForm = async () => {
  const errors = loginStore.validateForm(form);
  if (Object.keys(errors).length < 1) {
    await loginStore.submitForm(form);
  }
};
</script>

<style scoped></style>
