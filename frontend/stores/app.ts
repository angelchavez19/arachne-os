export const useAppStore = defineStore("app", () => {
  const windowSize = useWindowSizeStore();

  const isNavbarOpen = useLocalStorage<boolean>(
    "isNavbarOpen",
    windowSize.isDesktop || windowSize.isLargeDesktop
  );

  const showNotifications = useLocalStorage<boolean>(
    "showNotifications",
    false
  );

  return {
    isNavbarOpen,
    showNotifications,
  };
});
