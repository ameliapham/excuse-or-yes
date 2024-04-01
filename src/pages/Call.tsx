import { theme } from "theme"
import { tss } from "tss-react/mui"
import { GlobalStyles } from "@mui/material"
import { CustomButton } from "components/CustomButton"
import { Success } from "./Success"
import { ThirdSticker } from "shared/ThirdSticker"
import { useState } from "react";
import { declareComponentKeys, useTranslation } from "i18n";


export function Call() {
    const { css, classes } = useStyles();

    const [page, setPage] = useState<"Call" | "Success">("Call");

    const onPageChange = (page: "Call" | "Success") => { setPage(page) };

    const [buttonStyle, setButtonStyle] = useState({});

    const moveButton = () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        setButtonStyle({
            "position": "absolute",
            "left": `${x}px`,
            "top": `${y}px`,
            "transition": 'left 0.5s, top 0.5s ease-in-out'
        });
    }

    const { t } = useTranslation({ Call });

    if (page === "Success") {
        return <Success />
    }

    return (
        <div className={classes.root}>

            <GlobalStyles
                styles={{
                    "html, body": {
                        "margin": 0,
                        "display": "flex",
                        "justifyContent": "center",
                        "backgroundColor": theme.palette.background.default,
                        "alignItems": "center"
                    }
                }}
            />

            <ThirdSticker />


            <div className={classes.buttonZone}>
                <CustomButton
                    variant="contained"
                    onClick={() => onPageChange("Success")}
                >
                    {t("Yes")}
                </CustomButton>

                <CustomButton
                    variant="contained"
                    onMouseOver={moveButton}
                    onClick={moveButton}
                    className={css(buttonStyle)}
                >
                    {t("No")}
                </CustomButton>
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
    },
    "buttonZone": {
        "display": "block flex",
        "justifyContent": "space-between",
        "width": "150px",
        "alignItems": "center",
        "marginTop": "10px"
    }
}));


export const { i18n } = declareComponentKeys<
    | "Yes"
    | "No"
>()({ Call });