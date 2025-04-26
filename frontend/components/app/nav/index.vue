<script setup lang="ts">
const isNavbarOpen = defineModel("isNavbarOpen", {
  type: Boolean,
  required: true,
});
</script>

<template>
  <AppAside
    v-model:isOpen="isNavbarOpen"
    :class="{
      'translate-x-0': isNavbarOpen,
      '-translate-x-full': !isNavbarOpen,
    }"
  >
    <h1>Navbar</h1>
  </AppAside>
</template>

<style scoped></style>
