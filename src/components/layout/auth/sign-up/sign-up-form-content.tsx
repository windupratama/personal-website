/**
 * A component that contains the application sign-up form contents
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
import { RiShieldUserFill as ShieldUser } from "react-icons/ri";
import Link from "next/link";

interface SignUpFormContentProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    onSubmit: (data: T) => void;
}

/**
 * Displays the sign-up form content
 */
function SignUpFormContent<T extends FieldValues>({
    form,
    onSubmit,
}: SignUpFormContentProps<T>) {
    return (
        <Card className="bg-transparent">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <ShieldUser className="h-6 w-6" />
                    <CardTitle>Sign Up</CardTitle>
                </div>
                <CardDescription>
                    Get started by signing up your account
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
                            name="name"
                            render={(field, fieldState) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <Input
                                        {...field}
                                        placeholder="Your name"
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
                            Sign Up
                        </Button>
                    </div>
                </Form>
            </CardContent>
            <CardFooter>
                <Link href="/sign-in">
                    <CardDescription className="text-primary underline">
                        Already have an account? Sign in!
                    </CardDescription>
                </Link>
            </CardFooter>
        </Card>
    );
}

export { SignUpFormContent };
