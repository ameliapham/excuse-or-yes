import Button from '@mui/material/Button';
import { tss } from 'tss-react/mui';

type CustomButtonProps = {
    href?: string;
    className?: string;
    onClick?: () => void;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    children: React.ReactNode;
    variant?: "text" | "outlined" | "contained";
}


export function CustomButton(props: CustomButtonProps) {
    const { href, className, onClick, onMouseOver, onMouseOut, children } = props;

    return (
        <Button
            variant='outlined'
            href = {href}
            className={className}
            onClick={href ? undefined : onClick}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            {children}
        </Button>
    )
}

const useStyles = tss.create(() => ({}));
