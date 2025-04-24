<script setup lang="ts">
const baseI18n = "pages.auth.login";
const { t } = useI18n();

useSeoMeta({
  title: t(`${baseI18n}.page.title`),
  description: t(`${baseI18n}.page.description`),
});
</script>

<template>
  <main class="w-full flex justify-center py-8">
    <section
      class="flex flex-col items-center justify-center w-full max-w-md p-4 gap-6"
    >
      <Icon name="me:logo" size="130" />
      <h1 class="text-2xl">{{ $t(`${baseI18n}.title`) }}</h1>
      <Separator />
      <div class="flex justify-between items-center w-full px-6">
        <SelectorLanguage />
        <ClientOnly>
          <SelectorTheme />
        </ClientOnly>
      </div>
    </section>
  </main>
</template>
