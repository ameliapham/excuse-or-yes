import Typography from "@mui/material/Typography"
import { tss } from "tss-react/mui"


export function ThirdSticker() {
    const { classes } = useStyles();

    return (
        <div
            className={classes.root}
        >
            <Typography
                variant="h4"
                color="primary"
                className={classes.typography}
            >
                Vas-tu m'appeler ?
            </Typography>

            <div>
                <img src="https://media.giphy.com/media/QvvFkKfqwq82NniaIW/giphy.gif" alt="memes cries" />
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