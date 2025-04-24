<script setup lang="ts">
interface Props {
  orientation?: "horizontal" | "vertical";
}

withDefaults(defineProps<Props>(), { orientation: "horizontal" });
</script>

<template>
  <div
    role="separator"
    :aria-orientation="orientation"
    :data-orientation="orientation"
    class="flex items-center align-center text-center"
    :class="{
      'w-full': orientation === 'horizontal',
      'flex-col': orientation === 'vertical',
    }"
  >
    <div
      class="border-(--c-border) w-full border-solid"
      :class="{
        'w-full': orientation === 'horizontal',
        'h-full': orientation === 'vertical',
        'border-t': orientation === 'horizontal',
        'border-s': orientation === 'vertical',
      }"
    ></div>
  </div>
</template>
