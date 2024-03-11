//import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles"
import { useStyles } from "tss-react"
import { ButtonZone } from "./CustomButton"
import { useState } from "react";
import { FirstSticker } from "./pages/FirstSticker"
import { SecondSticker } from "./pages/SecondSticker"


export function App() {

  const theme = useTheme();

  const { css } = useStyles();

  const [sticker, setStickers] = useState<"first" | "second" | "third">("first");

  return (
    <div
      className={css({
        "color": theme.palette.text.primary,
        "fontFamily": theme.typography.fontFamily,
        "fontSize": theme.typography.fontSize,
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
      })}
    >
      <div
        className={css({

        })}
      >
        {(() => {
          switch (sticker) {
            case "first":
              return <FirstSticker />;
            case "second":
              return <SecondSticker />;
          }
        })()}

      </div>

      <ButtonZone
        sticker={sticker}
        onPageChange={sticker => {
          setStickers(sticker);
        }}
      />




    </div>
  );

}