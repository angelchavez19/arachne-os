import { BACKEND_URL } from "~/config";
import type { UserInfoI } from "~/types/user";

export const useAuthUserStore = defineStore("authUser", () => {
  const { $axios } = useNuxtApp();
  const isAuthenticated = ref<boolean | null>(null);
  const user = ref<UserInfoI>();

  const setup = async () => {
    try {
      const response = await $axios.get<UserInfoI>(
        `${BACKEND_URL}/auth/user/me`
      );
      user.value = response.data;
      isAuthenticated.value = true;
    } catch (error: any) {
      if (error.status === 401) {
        isAuthenticated.value = false;
      }
    }
  };

  return { isAuthenticated, user, setup };
});
