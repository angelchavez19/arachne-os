<script setup lang="ts">
import { googleSdkLoaded } from "vue3-google-login";
const baseI18n = "pages.auth.login";

import { BACKEND_URL, GOOGLE_CLIENT_ID } from "~/config";

const { locale } = useI18n();

const sendCodeToBackend = async (code: string) => {
  window.location.href = `${BACKEND_URL}/auth/social/google?code=${code}&lang=${locale.value}`;
};

const login = () => {
  googleSdkLoaded((google) => {
    google.accounts.oauth2
      .initCodeClient({
        client_id: GOOGLE_CLIENT_ID,
        scope: "email profile",
        callback: (response) => {
          if (response.code) {
            sendCodeToBackend(response.code);
          }
        },
      })
      .requestCode();
  });
};
</script>

<template>
  <button
    @click="login"
    class="flex items-center justify-center px-4 py-2 rounded-lg shadow-sm bg-[var(--c-surface)] text-[var(--c-text)] transition-colors duration-150 ease-in-out hover:bg-[var(--c-highlight)] focus:outline-none focus:ring-2 focus:ring-[var(--c-primary)] w-full"
  >
    <Icon
      name="mdi:google"
      class="w-5 h-5 text-[var(--c-secondary)] flex-shrink-0"
    />
    <span class="ml-2 text-sm font-medium">
      {{ $t(`${baseI18n}.social.google.text`) }}
    </span>
  </button>
</template>
