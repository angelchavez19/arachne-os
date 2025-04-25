import { pagesMessagesEn, pagesMessagesEs } from "../pages/messages";
import { globalEn } from "./global/en";
import { globalEs } from "./global/es";

export const messages = {
  en: { pages: pagesMessagesEn, ...globalEn },
  es: { pages: pagesMessagesEs, ...globalEs },
};
