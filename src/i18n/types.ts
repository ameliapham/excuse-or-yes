import type { GenericTranslations } from "i18nifty";

//List the languages you with to support
export const languages = ["en", "fr"] as const;

//If the user's browser language doesn't match any
//of the languages above specify the language to fallback to:
export const fallbackLanguage = "en";

export type Language = typeof languages[number];

export type ComponentKey =
	| typeof import("../App").i18n
	| typeof import("../shared/FirstSticker").i18n
    | typeof import("../shared/SecondSticker").i18n
    | typeof import("../shared/ThirdSticker").i18n
    | typeof import("../pages/Call").i18n
    ;

export type Translations<L extends Language> = GenericTranslations<ComponentKey, Language, typeof fallbackLanguage, L>;
