export const useWindowSizeStore = defineStore("window-size", () => {
  const windowSize = ref({ width: 0, height: 0 });

  const isMobile = computed(() => windowSize.value.width < 768);
  const isTablet = computed(
    () => windowSize.value.width >= 768 && windowSize.value.width < 1024
  );
  const isDesktop = computed(() => windowSize.value.width >= 1024);
  const isLargeDesktop = computed(() => windowSize.value.width >= 1440);

  const updateWindowSize = () => {
    windowSize.value.width = window.innerWidth;
    windowSize.value.height = window.innerHeight;
  };

  onMounted(() => {
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateWindowSize);
  });

  return { size: windowSize, isMobile, isTablet, isDesktop, isLargeDesktop };
});
