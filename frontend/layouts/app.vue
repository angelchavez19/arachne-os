<script setup lang="ts">
const baseI18n = "layouts.app";
</script>

<template>
  <NuxtLayout name="private">
    <slot />

    <template #error>
      <main
        class="w-screen min-h-screen flex flex-col items-center justify-center px-4"
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
    </template>

    <template #fallback>
      <main
        class="w-screen min-h-screen flex flex-col items-center justify-center"
      >
        <div class="loader"></div>
      </main>
    </template>
  </NuxtLayout>
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
