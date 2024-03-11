import  Typography  from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import { useStyles } from "tss-react"


export function SecondSticker() {
    const theme = useTheme();
    const { css } = useStyles();

    return (
        <div
            className={css({
                "display": "flex",
                "flexDirection": "column",
                "alignItems": "center",
            })}
        >
            <Typography
                variant="h4"
                color="primary"
                fontFamily={theme.typography.fontFamily}
                marginTop={theme.spacing(10)}
            >
                Really ?
            </Typography>

            <div
                className={css({

                })}
            >
                <img src="https://media.giphy.com/media/eHWUyxudOQGCulzFFR/giphy.gif" alt="memes cries" />

            </div>
        </div>


    )
}