import Typography from "@mui/material/Typography"
//import { theme } from "../theme"
import { tss } from "tss-react/mui"
//import { declareComponentKeys } from "i18nifty"
import { declareComponentKeys, useTranslation } from "../i18n/index";


export function FirstSticker() {
    const { classes } = useStyles();

    const { t } = useTranslation({ FirstSticker });

    return (
        <div className={classes.root}>
            <Typography
                variant="h4"
                color="primary"
                className={classes.typography}
            >
                {t("Will you excuse me?")}
            </Typography>

            <div>
                <img src="https://media.giphy.com/media/lPM06f2zvk94jBAzlP/giphy.gif" alt="memes cries" />
            </div>
        </div>
    )
}

const useStyles = tss.create(({theme}) => ({
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
    | "Will you excuse me?"
>()({ FirstSticker });