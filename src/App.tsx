import Typography from "@mui/material/Typography";
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
      <Typography
        variant="h4"
        color="primary"
        fontFamily={theme.typography.fontFamily}
        marginTop={theme.spacing(10)}
      >
        Vas-tu m'excuser ?
      </Typography>
      
      <div
        className={css({

        })}
      >
        <img src="https://media.giphy.com/media/lPM06f2zvk94jBAzlP/giphy.gif" alt="memes cries" />

      </div>




    </div>
  );

}