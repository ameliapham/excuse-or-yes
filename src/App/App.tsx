import { useTheme } from "@mui/material/styles"
import { useStyles } from "tss-react"
import { useState } from "react";
import { GlobalStyles } from "tss-react";

export function App() {
    const theme = useTheme();
    const { css } = useStyles();

    return (
        <>  
            <GlobalStyles
                styles = {{
                    "html, body": {
                        "margin": 0,
                        "display": "flex",
                        "justifyContent": "center",
                        "backgroundColor": "#ffe5ec",
                        "alignItems": "center"
                    }
                }}

        
        
        </>
    )
}