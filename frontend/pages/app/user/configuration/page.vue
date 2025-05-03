<script setup lang="ts">
import Section from "./components/section.vue";
import SettingItem from "./components/setting-item.vue";

const baseI18n = "pages.app.user.configuration";

useSeoMeta({ title: "App - ArachneOS" });
</script>

<template>
  <NuxtLayout name="app">
    <div class="flex flex-col w-full gap-6">
      <Section
        :title="$t(`${baseI18n}.preferences.title`)"
        :description="$t(`${baseI18n}.preferences.description`)"
      >
        <SettingItem
          :title="$t(`${baseI18n}.preferences.settings.theme.title`)"
        >
          <SelectorTheme />
        </SettingItem>

        <SettingItem
          :title="$t(`${baseI18n}.preferences.settings.language.title`)"
        >
          <SelectorLanguage />
        </SettingItem>
      </Section>
    </div>
  </NuxtLayout>
</template>
