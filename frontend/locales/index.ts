import {
  componentsMessagesEn,
  componentsMessagesEs,
} from "~/components/messages";
import { pagesMessagesEn, pagesMessagesEs } from "../pages/messages";
import { globalEn } from "./global/en";
import { globalEs } from "./global/es";

export const messages = {
  en: { components: componentsMessagesEn, pages: pagesMessagesEn, ...globalEn },
  es: { components: componentsMessagesEs, pages: pagesMessagesEs, ...globalEs },
};
