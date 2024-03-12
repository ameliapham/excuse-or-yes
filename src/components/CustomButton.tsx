import Button from '@mui/material/Button';

type CustomButtonProps = {
    className?: string;
    onClick: () => void;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    children: React.ReactNode;
}


export function CustomButton(props: CustomButtonProps) {
    const { className, onClick, onMouseOver, onMouseOut, children } = props;

    return (
        <Button
            className={className}
            onClick={onClick}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            {children}
        </Button>
    )
}