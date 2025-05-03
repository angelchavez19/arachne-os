<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
}
defineProps<Props>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <h3 class="text-sm font-medium text-(--c-text)">{{ title }}</h3>

    <p v-if="description" class="text-sm text-(--c-text-2)">
      {{ description }}
    </p>

    <div class="flex flex-col gap-4">
      <slot />
    </div>
  </div>
</template>
