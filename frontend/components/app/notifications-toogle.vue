<script setup lang="ts">
const showNotifications = defineModel("showNotifications", {
  type: Boolean,
  required: true,
});
</script>

<template>
  <button
    @click="showNotifications = !showNotifications"
    class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[var(--c-border)] transition-colors duration-200 ease-in-out cursor-pointer"
  >
    <Icon
      name="uil:bell"
      size="28"
      :class="
        showNotifications
          ? 'text-[var(--c-primary)]'
          : 'text-[var(--c-text-muted)]'
      "
    />
  </button>
</template>

<style scoped></style>
