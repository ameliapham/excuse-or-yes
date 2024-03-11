import { useState } from "react"
import { useTheme } from "@mui/material/styles"
import { useStyles } from "tss-react"

export function App() {

  const theme = useTheme();

  const { css } = useStyles();

  return (
    <div
      className={css({
        "backgroundColor": theme.palette.background.default,
        "color": theme.palette.text.primary,
        "fontFamily": theme.typography.fontFamily,
        "fontSize": theme.typography.fontSize,
        "height": "100vh",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
      })}
    >

      <h1
        className={css({
          "fontSize": theme.spacing(4),
          "font": theme.typography.fontFamily,
          "color": theme.palette.primary.main,
        })}>
        Vas-tu m'excuser ?
      </h1>

   

    </div>
  );

}