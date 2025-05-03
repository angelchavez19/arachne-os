<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
}
defineProps<Props>();
</script>

<template>
  <section class="flex flex-col gap-4">
    <div>
      <h2>{{ title }}</h2>
      <p v-if="description" class="text-sm text-(--c-text-2)">
        {{ description }}
      </p>
    </div>

    <div class="flex flex-col gap-4">
      <slot />
    </div>
  </section>
</template>
