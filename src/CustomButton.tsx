import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useStyles } from "tss-react";
import { useState } from "react";

type Props = {
    className?: string;
    sticker: "first" | "second" | "third";
    onPageChange: (sticker: "first" | "second" | "third") => void;
}

export function ButtonZone(props: Props) {
    const { onPageChange } = props;

    const { css, cx } = useStyles();

    const [buttonStyle, setButtonStyle] = useState({});

    const moveButton = () => {
        const x = Math.random() * (window.innerWidth - 100) - 85;
        const y = Math.random() * (window.innerHeight - 50) - 45;
        setButtonStyle({
            "position": "absolute",
            "left": `${x}px`,
            "top": `${y}px`,
            "transition": 'left 0.5s, top 0.5s ease-in-out'
        });
    }

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
                Oui
            </CustomButton>
            <CustomButton
                onClick={moveButton}
                onMouseOver={moveButton}
                style={buttonStyle}
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
    style?: React.CSSProperties;
}

export function CustomButton(props: CustomButtonProps) {
    const { className, onClick, children, onMouseOver, onMouseOut, style } = props;

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
            style={style}
        >
            {children}
        </Button >
    )
}
