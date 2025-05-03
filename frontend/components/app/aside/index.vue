<script setup lang="ts">
interface Props {
  side?: "left" | "right";
}
withDefaults(defineProps<Props>(), {
  side: "left",
});

const isOpen = defineModel("isOpen", {
  type: Boolean,
  required: true,
});
</script>

<template>
  <aside
    class="fixed top-[63px] z-10 w-screen max-w-[256px] h-[calc(100vh-63px)] bg-(--c-bg) transition-transform duration-300 ease-in-out transform py-5 px-7"
    :class="{
      'translate-x-0': isOpen,
      '-translate-x-full': !isOpen && side === 'left',
      'translate-x-full': !isOpen && side === 'right',
      'right-0': side === 'right',
      'left-0': side === 'left',
    }"
    :style="{
      'box-shadow':
        side === 'left'
          ? '2px 3px 6px var(--c-border)'
          : '-2px 3px 6px var(--c-border)',
    }"
  >
    <slot />
  </aside>
</template>
