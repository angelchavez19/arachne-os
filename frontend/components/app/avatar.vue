<script setup lang="ts">
const { user } = useAuthUserStore();
</script>

<template>
  <div class="flex items-center">
    <button class="w-10 h10 rounded-full overflow-hidden cursor-pointer">
      <NuxtImg
        v-if="user"
        :src="user.avatar"
        alt="Avatar"
        width="40"
        height="40"
        :custom="true"
        v-slot="{ src, isLoaded, imgAttrs }"
      >
        <img v-if="isLoaded" v-bind="imgAttrs" :src="src" />
        <img v-else src="https://placehold.co/40x40" alt="placeholder" />
      </NuxtImg>
    </button>
  </div>
</template>

<style scoped></style>
