/**
 * A component that contains the application sign-in form contents
 */

import { FieldValues, UseFormReturn } from "react-hook-form";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormError,
} from "@/components/ui/form";
import { Input, PasswordInput } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RiDoorLockBoxFill as DoorLockBox } from "react-icons/ri";
import Link from "next/link";
import { env } from "@/utils/env";

interface SignInFormContentProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    onSubmit: (data: T) => void;
}

/**
 * Displays the sign-in form content
 */
function SignInFormContent<T extends FieldValues>({
    form,
    onSubmit,
}: SignInFormContentProps<T>) {
    return (
        <Card className="bg-transparent">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <DoorLockBox className="h-6 w-6" />
                    <CardTitle>Sign In</CardTitle>
                </div>
                <CardDescription>
                    Hey there! Sign in to access your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form methods={form} onSubmit={onSubmit}>
                    <div className="flex flex-col gap-4">
                        <FormField
                            name="email"
                            render={(field, fieldState) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        {...field}
                                        type="email"
                                        placeholder="example@mail.com"
                                        isInvalid={fieldState.invalid}
                                        disabled={form.formState.isSubmitting}
                                    />
                                    <FormError fieldState={fieldState} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            render={(field, fieldState) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <PasswordInput
                                        {...field}
                                        placeholder="••••••••"
                                        isInvalid={fieldState.invalid}
                                        disabled={form.formState.isSubmitting}
                                    />
                                    <FormError fieldState={fieldState} />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                        >
                            Sign In
                        </Button>
                    </div>
                </Form>
            </CardContent>
            <CardFooter>
                {env.NEXT_PUBLIC_ENABLE_SIGN_UP && (
                    <Link href="/sign-up">
                        <CardDescription className="text-primary underline">
                            Got no account yet? Sign up now!
                        </CardDescription>
                    </Link>
                )}
            </CardFooter>
        </Card>
    );
}

export { SignInFormContent };
