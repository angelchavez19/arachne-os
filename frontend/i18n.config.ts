import { messages } from "./locales";

export type Locale = "en" | "es";

export interface Lang {
  value: Locale;
  name: string;
}

export const languages: Lang[] = [
  { value: "en", name: "English" },
  { value: "es", name: "Español" },
];

export default defineI18nConfig(() => ({
  legacy: false,
  messages,
}));
