<script setup lang="ts">
import { BACKEND_URL } from "~/config";
import type { UserInfoI } from "~/types/user";

const { $axios } = useNuxtApp();
useColorModeStore();

const isAuthenticated = ref<boolean | null>(null);
const user = ref<UserInfoI>();

onMounted(async () => {
  try {
    const response = await $axios.get<UserInfoI>(`${BACKEND_URL}/auth/user/me`);
    user.value = response.data;
    isAuthenticated.value = true;
  } catch (error: any) {
    if (error.status === 401) {
      isAuthenticated.value = false;
    }
  }
});
</script>

<template>
  <slot name="error" v-if="isAuthenticated === false" />
  <slot name="fallback" v-else-if="!user || isAuthenticated === null" />
  <slot v-else />
</template>
