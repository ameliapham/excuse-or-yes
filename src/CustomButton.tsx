import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useStyles } from "tss-react";

type Props = {
    className?: string;
    sticker: "first" | "second" | "third";
    onPageChange: (sticker: "first" | "second" | "third") => void;
}

export function ButtonZone(props: Props) {
    const { className, sticker, onPageChange } = props;

    const { css, cx } = useStyles();

    return (
        <div
            className={css({
                "width": "200px",
                "display": "flex",
                "flexDirection": "row",
                "justifyContent": "space-around",
                "marginBottom": "20px",
            })}
        >
            <CustomButton
                onClick={() => onPageChange("second")}
                onMouseOver={() => {
                    onPageChange("second");
                }}
                onMouseOut={() => { 
                    onPageChange("first");
                }}
            >
                Yes
            </CustomButton>
            <CustomButton
                onClick={() => onPageChange(sticker)}
                onMouseOver={() => {}}
            >
                Non
            </CustomButton>
        </div>
    )
}

type CustomButtonProps = {
    className?: string;
    //selected: boolean;
    children: React.ReactNode;
    onClick: () => void;
    onMouseOver: () => void;
    onMouseOut?: () => void;
}

export function CustomButton(props: CustomButtonProps) {
    const { className, onClick, children, onMouseOver, onMouseOut } = props;

    const { css, cx } = useStyles();

    const theme = useTheme();

    return (
        <Button
            className={cx(css({
                "&:hover": {
                    "backgroundColor": theme.palette.primary.main,
                    "color": theme.palette.secondary.light,
                },
                //"backgroundColor": theme.palette.primary.main,
                //"color": theme.palette.secondary.light,
                "border": "1px solid",
                "padding": theme.spacing(1),
                "paddingLeft": theme.spacing(3),
                "paddingRight": theme.spacing(3),
                "transition": "ease-in-out .3s",
            }), className)}
            //variant={selected ? "contained" : "outlined"}
            onClick={onClick}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            {children}
        </Button >
    )
}

