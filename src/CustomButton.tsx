import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useStyles } from "tss-react";


type CustomButtonProps = {
    className?: string;
    selected: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

export function CustomButton(props: CustomButtonProps) {
    const { className, onClick, children, selected } = props;

    const { css, cx } = useStyles();

    const theme = useTheme();

    return (
        <Button
            className={cx(css({
                "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    "color": theme.palette.secondary.light,
                },
                //"backgroundColor": theme.palette.primary.main,
                //"color": theme.palette.secondary.light,
                "padding": theme.spacing(1),
                "paddingLeft": theme.spacing(3),
                "paddingRight": theme.spacing(3),
            }), className)}
            variant={selected ? "contained" : "outlined"}
            onClick={onClick}
        >
            {children}
        </Button >
    )
}