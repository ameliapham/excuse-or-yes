import { tss } from "tss-react/mui";
import { theme } from "../theme";
import { GlobalStyles } from "tss-react";
import { CustomButton } from "../components/CustomButton";
import { FirstSticker } from "../pages/FirstSticker";
import { useState } from "react";

export function App() {
    const { cx, classes } = useStyles();

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

            <FirstSticker></FirstSticker>

            <div className = {classes.buttonZone}>
                <CustomButton
                    variant="contained"
                    onClick={() => console.log("Hello World")}
                >
                    Oui
                </CustomButton>
                <CustomButton
                    variant="contained"
                    onClick={() => console.log("Hello World")}
                >
                    Non
                </CustomButton>
            </div>





        </div>
    )
}

const useStyles = tss.create(() => ({
    "root": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "marginBottom": "100px"
    },
    "buttonZone": {
        "display": "flex",
        "justifyContent": "space-around",
        "width": "200px",
        "alignItems": "center",
        "marginTop": "10px"

    }
}));