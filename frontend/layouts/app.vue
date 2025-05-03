<script setup lang="ts">
const appStore = useAppStore();
</script>

<template>
  <NuxtLayout name="private">
    <AppHeader
      v-model:isNavbarOpen="appStore.isNavbarOpen.storageValue"
      v-model:showNotifications="appStore.showNotifications.storageValue"
    />

    <AppNav v-model:isNavbarOpen="appStore.isNavbarOpen.storageValue" />
    <AppNotifications
      v-model:showNotifications="appStore.showNotifications.storageValue"
    />

    <AppMain
      :isNavbarOpen="appStore.isNavbarOpen.storageValue"
      :showNotifications="appStore.showNotifications.storageValue"
    >
      <slot />
    </AppMain>
  </NuxtLayout>
</template>
