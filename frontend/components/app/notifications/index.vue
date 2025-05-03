<script setup lang="ts">
const showNotifications = defineModel("showNotifications", {
  type: Boolean,
  required: true,
});
</script>

<template>
  <AppAside v-model:isOpen="showNotifications" side="right">
    <h1>Notifications</h1>
  </AppAside>
</template>

<style scoped></style>
