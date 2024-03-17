import Typography from "@mui/material/Typography"
//import { theme } from "../theme"
import { tss } from "tss-react/mui"


export function FirstSticker() {
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <Typography
                variant="h4"
                color="primary"
                className={classes.typography}
            >
                Vas-tu m'excuser ?
            </Typography>

            <div>
                <img src="https://media.giphy.com/media/lPM06f2zvk94jBAzlP/giphy.gif" alt="memes cries" />
            </div>
        </div>
    )
}

const useStyles = tss.create(({theme}) => ({
    "root": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
    },
    "typography": {
        "fontFamily": theme.typography.fontFamily,
        "marginTop": theme.spacing(10),
    }
}));