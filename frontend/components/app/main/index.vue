<script setup lang="ts">
interface Props {
  isNavbarOpen: boolean;
  showNotifications: boolean;
}
defineProps<Props>();

const windowSize = useWindowSizeStore();
</script>

<template>
  <main
    class="fixed top-16 left-0 w-full py-4 px-6"
    :class="{
      'left-0': windowSize.isMobile || windowSize.isTablet,
      'left-64': windowSize.isDesktop && isNavbarOpen,
    }"
  >
    <slot />
  </main>
</template>
