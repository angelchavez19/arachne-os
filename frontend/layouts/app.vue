<script setup lang="ts">
const isNavbarOpen = ref(false);
const showNotifications = ref(false);
</script>

<template>
  <NuxtLayout name="private">
    <div class="">
      <AppHeader
        v-model:isNavbarOpen="isNavbarOpen"
        v-model:showNotifications="showNotifications"
      />
      <AppNav v-model:isNavbarOpen="isNavbarOpen" />
      <AppNotifications v-model:showNotifications="showNotifications" />
      <AppMain
        :isNavbarOpen="isNavbarOpen"
        :showNotifications="showNotifications"
      >
        <slot />
      </AppMain>
    </div>
  </NuxtLayout>
</template>
