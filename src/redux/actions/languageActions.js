import { languageTypes } from "../types";

export const changeLanguage = (newLocale) => {
  Cookie.set('locale', newLocale);
  return {
    type: languageTypes.CHANGE_LANGUAGE,
    payload: newLocale
  }
};
