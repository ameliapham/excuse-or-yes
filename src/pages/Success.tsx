import Typography from "@mui/material/Typography"
import { theme } from "theme"
import { tss } from "tss-react/mui"
import { GlobalStyles } from "@mui/material"


export function Success() {
    const { classes } = useStyles();

    return (
        <div
            className={classes.root}
        >
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
            <Typography
                variant="h4"
                color="primary"
                className={classes.typography}
            >
                Yeah !!!!!!!!!
            </Typography>

            <div>
                <img src="https://media.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif" alt="memes cries" />
            </div>
        </div>
    )
}

const useStyles = tss.create(({ theme }) => ({
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