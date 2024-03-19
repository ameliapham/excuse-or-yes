import Typography from "@mui/material/Typography"
import { tss } from "tss-react/mui"
//import { declareComponentKeys } from "i18nifty"
import { declareComponentKeys, useTranslation } from "../i18n/index";


export function ThirdSticker() {
    const { classes } = useStyles();

    const { t } = useTranslation({ ThirdSticker });

    return (
        <div
            className={classes.root}
        >
            <Typography
                variant="h4"
                color="primary"
                className={classes.typography}
            >
                {t("Will you call me?")}
            </Typography>

            <div>
                <img src="https://media.giphy.com/media/QvvFkKfqwq82NniaIW/giphy.gif" alt="memes cries" />
            </div>
        </div>
    )
}

const useStyles = tss.create(({ theme }) => ({
    "root": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
    },
    "typography": {
        "fontFamily": theme.typography.fontFamily,
        "marginTop": theme.spacing(10),
    }
}));

export const { i18n } = declareComponentKeys<
    | "Will you call me?"
>()({ ThirdSticker });