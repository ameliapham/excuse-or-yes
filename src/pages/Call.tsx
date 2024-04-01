import { theme } from "../theme"
import { tss } from "tss-react/mui"
import { GlobalStyles } from "@mui/material"
import { CustomButton } from "../components/CustomButton"
import { Success } from "./Success"
import { ThirdSticker } from "../shared/ThirdSticker"
import { useState } from "react";
import { declareComponentKeys, useTranslation } from "i18n";


export function Call() {

    const [movingButtonPosition, setMovingButtonPosition] = useState({ "x": 0, "y": 0 });

    const { classes } = useStyles({ movingButtonPosition });

    const [page, setPage] = useState<"Call" | "Success">("Call");

    const onPageChange = (page: "Call" | "Success") => { setPage(page) };

    const { t } = useTranslation({ Call });

    const moveButton = () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);

        setMovingButtonPosition({ x, y });
    }


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
                    className={classes.movingButton}
                >
                    {t("No")}
                </CustomButton>
            </div>

        </div>


    )
}

const useStyles = tss
    .withParams<{ movingButtonPosition: { x: number, y: number } }>()
    .create(({ movingButtonPosition }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
        },
        "buttonZone": {
            "display": "block flex",
            "justifyContent": "space-between",
            "width": "150px",
            "alignItems": "center",
            "marginTop": "10px"
        },
        "movingButton": {
            "position": "absolute",
            "left": `${movingButtonPosition.x}px`,
            "top": `${movingButtonPosition.y}px`,
            "transition": 'left 0.5s, top 0.5s ease-in-out'
        }
    }));

export const { i18n } = declareComponentKeys<
    | "Yes"
    | "No"
>()({ Call });