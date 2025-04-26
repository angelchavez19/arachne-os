<script setup lang="ts">
const isOpen = defineModel("isOpen", {
  type: Boolean,
  required: true,
});
</script>

<template>
  <aside
    class="fixed top-[63px] left-0 z-50 w-screen max-w-[320px] h-[calc(100vh-63px)] bg-(--c-bg) shadow-[2px_3px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out transform py-5 px-7 overflow-scroll"
  >
    <slot />
  </aside>
</template>
