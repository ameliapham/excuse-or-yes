import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useStyles } from "tss-react";


type CustomButtonProps = {
    className: string;
    children: React.ReactNode;
    onClick: () => void;
}

export function CustomButton(props: CustomButtonProps) {
    const { className, onClick, children } = props;

    const { css, cx } = useStyles();

    const theme = useTheme();

    return (
        <Button
            className={cx(css({
                "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                },
            }), className)}
            onClick={onClick}
        >
            {children}
        </Button >
    )
}