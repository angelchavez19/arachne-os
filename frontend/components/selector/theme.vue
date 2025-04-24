<script setup lang="ts">
const colorMode = useColorModeStore();
const toggle = () => colorMode.tooggleColorMode();
</script>

<template>
  <button
    @click="toggle"
    class="relative w-14 h-7 rounded-full overflow-hidden"
    :style="{
      backgroundColor:
        colorMode.colorStorage.storageValue === 'dark'
          ? 'var(--c-primary)'
          : 'var(--c-border)',
    }"
  >
    <span
      class="absolute top-0.5 left-0.5 w-6 h-6 rounded-full z-index-9"
      :style="{
        backgroundColor: 'var(--c-secondary)',
        transform:
          colorMode.colorStorage.storageValue === 'dark'
            ? 'translateX(28px)'
            : 'translateX(0)',
      }"
    />
    <Icon
      :name="
        colorMode.colorStorage.storageValue === 'dark' ? 'uil:moon' : 'uil:sun'
      "
      size="20"
      class="absolute top-[4px] left-[4px] w-6 h-6 rounded-full z-index-10"
      :style="{
        backgroundColor: 'var(--c-text)',
        transform:
          colorMode.colorStorage.storageValue === 'dark'
            ? 'translateX(28px)'
            : 'translateX(0)',
      }"
    />
  </button>
</template>

<style scoped>
button,
button > span {
  transition: background-color 150ms ease,
    transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
