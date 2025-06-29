/**
 * Application sign-in page
 */

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/schemas/auth.schema";
import { z } from "zod";
import { authClient } from "@/lib/auth-client";
import { useDialog } from "@/hooks/useDialog";
import { useRouter } from "next/navigation";
import { SignInFormContent } from "@/components/layout/auth/sign-in/sign-in-form-content";
import { AuthDialogContent } from "@/components/layout/auth/auth-dialog-content";

export default function SignIn() {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(signInSchema),
    });

    const { data, toggleDialogWithData } = useDialog();
    const router = useRouter();

    // Handle form submission (sign-in)
    async function handleSubmit(data: z.infer<typeof signInSchema>) {
        const { email, password } = data;

        const signInUser = await authClient.signIn.email({
            email,
            password,
        });

        if (signInUser.error) {
            toggleDialogWithData?.({
                title: "Sign In Failed",
                description:
                    signInUser.error.message ||
                    "Failed to sign in, something went wrong!",
                status: "ERROR",
            });
            return;
        }

        // Sign-in successful, redirect user
        router.replace("/");
    }

    return (
        <>
            {/* Sign-in Form */}
            <SignInFormContent form={form} onSubmit={handleSubmit} />
            {/* Sign-in dialog content pop over */}
            <AuthDialogContent data={data} />
        </>
    );
}
