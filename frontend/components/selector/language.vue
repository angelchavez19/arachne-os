<script setup lang="ts">
import { languages } from "~/i18n.config";

const { locale, setLocale } = useI18n();
const selectedLang = ref(locale.value);

watch(selectedLang, (newLang) => {
  setLocale(newLang);
  useHead({ htmlAttrs: { lang: newLang } });
});
</script>

<template>
  <div class="inline-block relative w-40">
    <select
      v-model="selectedLang"
      class="block w-full py-2 pl-3 pr-8 rounded-lg text-sm transition focus:outline-none focus:ring-2 focus:ring-primary appearance-none /* Tailwind: desactiva arrow nativo */"
      :style="{
        backgroundColor: 'var(--c-surface)',
        color: 'var(--c-text)',
        border: '1px solid var(--c-border)',
      }"
    >
      <option v-for="lang in languages" :key="lang.value" :value="lang.value">
        {{ lang.name }}
      </option>
    </select>

    <div
      class="pointer-events-none absolute inset-y-0 right-2 flex items-center"
      :style="{ color: 'var(--c-text-2)' }"
    >
      <Icon
        name="mdi:chevron-down"
        size="16"
        :style="{ color: 'var(--c-text-2)' }"
      />
    </div>
  </div>
</template>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: background-color 150ms ease, border-color 150ms ease,
    color 150ms ease;
}
</style>
