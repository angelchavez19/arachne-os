<script setup lang="ts">
import { NuxtLink } from "#components";
interface Props {
  icon: string;
  to?: string;
}
defineProps<Props>();

defineEmits<{ (e: "click"): void }>();
</script>

<template>
  <component
    :is="to ? NuxtLink : 'button'"
    class="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-(--c-highlight) transition-colors duration-200 ease-in-out cursor-pointer"
    v-bind="to ? { to } : {}"
    @click="$emit('click')"
  >
    <Icon :name="icon" size="20" />
    <span><slot /></span>
  </component>
</template>
