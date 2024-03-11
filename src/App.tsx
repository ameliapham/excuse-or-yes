import { useState } from "react"
import { useTheme } from "@mui/material/styles"
import { useStyles } from "tss-react"

export function App() {

  const theme = useTheme();

  const { css } = useStyles();

  return (
    <div
      className={css({
        //"height": "100vh",
        "color": theme.palette.text.primary,
        "fontFamily": theme.typography.fontFamily,
        "fontSize": theme.typography.fontSize,
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        //"justifyContent": "center",
        "backgroundColor": theme.palette.background.default,
      })}
    >

      <h1
        className={css({
          "marginTop": theme.spacing(10),
          "fontSize": theme.spacing(4),
          "font": theme.typography.fontFamily,
          "color": theme.palette.primary.main,
        })}>
        Vas-tu m'excuser ?
      </h1>

      <div
        className={css({

        })}
      >
        <img src="https://media.giphy.com/media/lPM06f2zvk94jBAzlP/giphy.gif" alt="memes cries" />

      </div>


    </div>
  );

}