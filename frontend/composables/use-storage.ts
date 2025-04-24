export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const getItem = (): T | null => {
    const item = localStorage.getItem(key);
    if (item) return JSON.parse(item);
    return null;
  };

  const setItem = (value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const removeItem = (key: string): void => {
    localStorage.removeItem(key);
  };

  const item = getItem();
  const storageValue = ref<T>(item || defaultValue);

  if (!item) setItem(defaultValue);

  const setValue = (_value: any): void => {
    setItem(_value);
    storageValue.value = _value;
  };

  const removeValue = (): void => {
    removeItem(key);
    storageValue.value = null;
  };

  return { storageValue, setValue, removeValue };
};
