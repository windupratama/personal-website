/**
 * Application sign-up page
 */

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/schemas/auth.schema";
import { z } from "zod";
import { authClient } from "@/lib/auth-client";
import { useDialog } from "@/hooks/useDialog";
import { useRouter } from "next/navigation";
import { SignUpFormContent } from "@/components/layout/auth/sign-up/sign-up-form-content";
import { AuthDialogContent } from "@/components/layout/auth/auth-dialog-content";

export default function SignUp() {
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
        resolver: zodResolver(signUpSchema),
    });

    const { data, toggleDialogWithData } = useDialog();
    const router = useRouter();

    // Handle form submission (sign-up)
    async function handleSubmit(data: z.infer<typeof signUpSchema>) {
        const { name, email, password } = data;

        const signUpUser = await authClient.signUp.email({
            name,
            email,
            password,
        });

        if (signUpUser.error) {
            toggleDialogWithData?.({
                title: "Sign Up Failed",
                description:
                    signUpUser.error.message ||
                    "Failed to create a new account, an error occurred during sign up!",
                status: "ERROR",
            });
            return;
        }

        toggleDialogWithData?.({
            title: "Sign Up Successful",
            description:
                "Successfully created a new account, you can now sign in!",
            status: "SUCCESS",
            actions: () => {
                router.replace("/sign-in");
            },
        });
    }

    return (
        <>
            {/* Sign-up Form */}
            <SignUpFormContent form={form} onSubmit={handleSubmit} />
            {/* Sign-up dialog content pop over */}
            <AuthDialogContent data={data} />
        </>
    );
}
