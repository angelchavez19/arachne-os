<script setup lang="ts">
import { BACKEND_URL } from "~/config";
import type { UserInfoI } from "~/types/user";

const baseI18n = "layouts.private";
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
  <main
    class="w-screen min-h-screen flex flex-col items-center justify-center px-4"
    v-if="isAuthenticated === false"
  >
    <h1 class="text-3xl">{{ $t(`${baseI18n}.error.title`) }}</h1>
    <p class="text-xl text-center">{{ $t(`${baseI18n}.error.message`) }}</p>

    <NuxtLink
      :to="$localePath('/auth/login')"
      class="py-1 px-4 mt-4 bg-(--c-primary) text-(--c-border) rounded-md"
    >
      {{ $t(`${baseI18n}.error.action`) }}
    </NuxtLink>
  </main>

  <main
    class="w-screen min-h-screen flex flex-col items-center justify-center"
    v-else-if="!user || isAuthenticated === null"
  >
    <div class="loader"></div>
  </main>

  <slot v-else />
</template>

<style scoped>
.loader {
  width: 32px;
  height: 16px;
  display: flex;

  &:before,
  &:after {
    content: "";
    flex: 1;
    background: var(--c-primary);
    transform-origin: top right;
    animation: l10-1 2s infinite;
  }

  &:after {
    background: var(--c-secondary);
    transform-origin: top left;
    animation-delay: 0.25s;
  }
}

@keyframes l10-1 {
  0%,
  5% {
    transform: rotate(0);
  }
  20%,
  30% {
    transform: rotate(90deg);
  }
  45%,
  55% {
    transform: rotate(180deg);
  }
  70%,
  80% {
    transform: rotate(270deg);
  }
  95%,
  100% {
    transform: rotate(360deg);
  }
}
</style>
