<script setup lang="ts">
import NotificationsToogle from "./notifications-toogle.vue";
import Avatar from "./avatar/index.vue";

const isNavbarOpen = defineModel("isNavbarOpen", {
  type: Boolean,
  required: true,
});

const showNotifications = defineModel("showNotifications", {
  type: Boolean,
  required: true,
});

watch(showNotifications, (newValue) => {
  if (newValue) isNavbarOpen.value = false;
});
watch(isNavbarOpen, (newValue) => {
  if (newValue) showNotifications.value = false;
});
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full flex items-center justify-between gap-2 py-2 px-2 bg-[var(--c-bg)] shadow-[0_2px_6px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
  >
    <div class="flex items-center gap-1">
      <button
        @click="isNavbarOpen = !isNavbarOpen"
        class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[var(--c-border)] transition-colors duration-200 ease-in-out cursor-pointer"
      >
        <Icon name="uil:bars" size="28" />
      </button>

      <Separator orientation="vertical" class="h-10" />

      <NuxtLink :to="$localePath('/app')" aria-label="App">
        <Icon name="me:logo" size="40" />
      </NuxtLink>
    </div>

    <div class="flex flex-1 items-center justify-end gap-2 w-full">
      <NotificationsToogle v-model:showNotifications="showNotifications" />
      <Separator orientation="vertical" class="h-10" />
      <Avatar />
    </div>
  </header>
</template>

<style scoped></style>
