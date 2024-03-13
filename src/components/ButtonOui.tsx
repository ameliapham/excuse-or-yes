import { CustomButton } from "./CustomButton";
import { useNavigate } from "react-router-dom";

export type Props = {
    className?: string;
    sticker: "first" | "second";
    onPageChange: (sticker: "first" | "second") => void;
}


export function ButtonOui(props: Props) {
    const { onPageChange } = props;
    const navigate = useNavigate();

    return (
        <div>
            <CustomButton
                //href="pages/ThirstSticker"
                onClick={() => navigate("pages/ThirstSticker")}
                onMouseOver={() => {
                    onPageChange("second");
                }}
                onMouseOut={() => {
                    onPageChange("first");
                }}
            >
                Oui
            </CustomButton>
        </div>
    )
}