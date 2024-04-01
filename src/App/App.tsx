import { tss } from "tss-react/mui";
import { theme } from "../theme";
import { GlobalStyles } from "tss-react";
import { useState } from "react";

import { CustomButton } from "../components/CustomButton";
import { FirstSticker } from "../shared/FirstSticker";
import { SecondSticker } from "../shared/SecondSticker";
import { Call } from "../pages/Call";
import { declareComponentKeys, useTranslation } from "i18n";

export function App() {
    const { css, classes } = useStyles();

    const [sticker, setStickers] = useState<"first" | "second" | "Call">("first");

    const onStickerChange = (sticker: "first" | "second" | "Call") => { setStickers(sticker) }

    const [buttonStyle, setButtonStyle] = useState({});

    const moveButton = () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        setButtonStyle({
            "position": "absolute",
            "left": `${x}px`,
            "top": `${y}px`,
            "transition": 'left 0.3s, top 0.3s ease-in-out'
        });
    }

    if (sticker === "Call") {
        return <Call />
    }

    const { t } = useTranslation({ App });

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
                    }
                })()}
            </div>

            <div className={classes.buttonZone}>
                <CustomButton
                    variant="contained"
                    onMouseOver={() => onStickerChange("second")}
                    onMouseOut={() => onStickerChange("first")}
                    onClick={() => onStickerChange("Call")}
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

const useStyles = tss.create(() => ({
    "root": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "marginBottom": "100px"
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
>()({ App });