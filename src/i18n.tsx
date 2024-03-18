import { createI18nApi, declareComponentKeys } from "i18nifty";
export { declareComponentKeys };

//List the languages you with to support
export const languages = ["en", "fr"] as const;

//If the user's browser language doesn't match any
//of the languages above specify the language to fallback to:
export const fallbackLanguage = "en";

export type Language = typeof languages[number];

export type LocalizedString = Parameters<typeof resolveLocalizedString>[0];

export const {
    useTranslation,
    resolveLocalizedString,
    useLang,
    $lang,
    useResolveLocalizedString,
} = createI18nApi<
		| typeof import("./App/App").i18n
        | typeof import("./shared/FirstSticker").i18n
        | typeof import("./shared/SecondSticker").i18n
        | typeof import("./shared/ThirdSticker").i18n
        | typeof import("./pages/Call").i18n
>()(
    {
        languages,
        fallbackLanguage
    },
    {
        "en": {
	        "App": {
		        "Yes": "Yes",
		        "No": "No",
	        },
            "FirstSticker": {
                "Will you excuse me?": "Will you excuse me?"
            },
            "SecondSticker": {
                "Really?": "Really?"
            },
            "ThirdSticker": {
                "Will you call me?": "Will you call me?"
            },
            "Call": {
                "Yes": "Yes",
                "No": "No"
            }
        },
        /* spell-check: disable */
        "fr": {
	        "App": {
		        "Yes": "Oui",
		        "No": "Non",
	        },
            "FirstSticker": {
                "Will you excuse me?": "Vas-tu m'excuser ?"
            },
            "SecondSticker": {
                "Really?": "Vraiment ?"
            },
            "ThirdSticker": {
                "Will you call me?": "Tu m'appelleras ?"
            },
            "Call": {
                "Yes": "Oui",
                "No": "Non"
            }
        },
        /* spell-check: enable */
    }
);
