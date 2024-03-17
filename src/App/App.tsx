import { tss } from "tss-react/mui";
import { theme } from "../theme";
import { GlobalStyles } from "tss-react";
import { useState } from "react";

import { CustomButton } from "../components/CustomButton";
import { FirstSticker } from "../shared/FirstSticker";
import { SecondSticker } from "../shared/SecondSticker";
import { Call } from "../pages/Call";

export function App() {
    const { classes } = useStyles();

    const [sticker, setStickers] = useState<"first" | "second" | "Call">("first");

    const onStickerChange = (sticker: "first" | "second" | "Call") => {setStickers(sticker)}
    
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

            <div>
                {(() => {
                    switch (sticker) {
                        case "first":
                            return <FirstSticker />;
                        case "second":
                            return <SecondSticker />;
                        case "Call":
                            return <Call />;
                    }
                })()}
            </div>

            <div className = {classes.buttonZone}>
                <CustomButton
                    variant="contained"
                    onMouseOver={() => onStickerChange("second")}
                    onMouseOut={() => onStickerChange("first")}
                    onClick={() => onStickerChange("Call")}
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