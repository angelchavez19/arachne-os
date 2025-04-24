import { defineStore } from "pinia";

export type Theme = "light" | "dark";

export const useColorModeStore = defineStore("colorMode", () => {
  const setAtribute = (value: Theme) => {
    if (value === "dark") document.body.setAttribute("data-theme", "dark");
    else document.body.removeAttribute("data-theme");
  };

  const colorStorage = useLocalStorage<Theme>("colorMode", "light");

  setAtribute(colorStorage.storageValue.value);

  const tooggleColorMode = () => {
    colorStorage.setValue(
      colorStorage.storageValue.value === "light" ? "dark" : "light"
    );

    setAtribute(colorStorage.storageValue.value);
  };

  return { colorStorage, tooggleColorMode };
});
