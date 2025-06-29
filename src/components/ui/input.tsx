/**
 * Input component related components and configurations
 */

"use client";

import { cn } from "@/utils/cn";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    RiEyeFill as EyeFill,
    RiEyeOffFill as EyeOffFill,
} from "react-icons/ri";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isInvalid?: boolean;
    logo?: React.ReactNode;
    ref?: React.Ref<HTMLInputElement>;
}

/**
 * Provides a custom styled input component
 */
function Input({ className, isInvalid, logo, ...props }: InputProps) {
    return (
        <div
            className={cn(
                "flex items-center gap-4 rounded-md border px-4 py-2 outline-none",
                className,
            )}
            style={{
                borderColor: isInvalid ? "#fb2c36" : "#6a7282",
            }}
        >
            <input
                className="w-full bg-transparent outline-none disabled:cursor-not-allowed disabled:text-gray-500"
                {...props}
            />

            {logo && logo}
        </div>
    );
}

/**
 * Provides a custom styled password input component
 */
function PasswordInput({
    className,
    isInvalid,
    disabled,
    ...props
}: InputProps) {
    const [type, setType] = useState("password");

    // Handle toggling input type between password and text
    function toggleInputType() {
        setType((prevType) => (prevType === "password" ? "text" : "password"));
    }

    return (
        <Input
            className={className}
            isInvalid={isInvalid}
            type={type}
            logo={
                <Button
                    variant="ghost"
                    size="fit"
                    onClick={disabled ? undefined : toggleInputType}
                >
                    {type === "password" ? (
                        <EyeFill className="h-5 w-5 text-gray-500" />
                    ) : (
                        <EyeOffFill className="h-5 w-5 text-gray-500" />
                    )}
                </Button>
            }
            {...props}
        />
    );
}

export { Input, PasswordInput };
