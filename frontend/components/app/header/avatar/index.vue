<script setup lang="ts">
const baseI18n = "components.app.header.avatar";
import NavItem from "./nav-item.vue";

const { user, logout } = useAuthUserStore();

const showNav = ref(false);

const fallbackAvatar = computed(() => {
  return (
    user?.avatar ||
    `https://ui-avatars.com/api/?name=${user?.givenName}&background=137a7f&color=d9e1e6&size=40&rounded=true&bold=true&font-size=0.5`
  );
});
</script>

<template>
  <div class="flex items-center relative">
    <button
      class="w-10 h10 rounded-full overflow-hidden cursor-pointer"
      @click="showNav = !showNav"
    >
      <NuxtImg
        v-if="user"
        :src="fallbackAvatar"
        alt="Avatar"
        width="40"
        height="40"
        :custom="true"
        v-slot="{ src, isLoaded, imgAttrs }"
      >
        <img v-if="isLoaded" v-bind="imgAttrs" :src="src" />
        <img v-else :src="fallbackAvatar" alt="placeholder" />
      </NuxtImg>
    </button>

    <div
      class="absolute top-16 right-2 w-[calc(100vw-24px)] max-w-3xs bg-(--c-bg) rounded-xl outline-2 outline-(--c-primary) shadow-lg z-10"
      v-if="showNav"
    >
      <div class="flex flex-col py-2 px-4">
        <span>{{ user?.givenName }} {{ user?.familyName }}</span>

        <Separator class="mb-4" />

        <nav class="flex flex-col gap-2">
          <NavItem :to="$localePath(`/app/user/${user?._id}`)" icon="uil:user">
            {{ $t(`${baseI18n}.nav.profile`) }}
          </NavItem>

          <Separator />

          <NavItem icon="mdi:logout" @click="logout">
            {{ $t(`${baseI18n}.nav.logout`) }}
          </NavItem>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
