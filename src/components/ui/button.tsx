import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
    "cursor-pointer rounded-lg px-4 py-2 text-white transition-colors",
    {
        variants: {
            variant: {
                primary: "bg-primary hover:bg-primary-hover",
                destructive: "bg-red-500 hover:bg-red-600"
            }
        },
        defaultVariants: {
            variant: "primary"
        }
    }
);

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    children?: React.ReactNode;
}

function Button({ children, className, variant, ...props }: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({ variant, className }))}
            {...props}
        >
            {children}
        </button>
    );
}

export { Button };
