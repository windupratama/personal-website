/**
 * Form component related components and configurations
 */

import {
    FieldValues,
    UseFormReturn,
    FieldPath,
    ControllerRenderProps,
    ControllerFieldState,
    FormProvider,
    useFormContext,
    Controller,
} from "react-hook-form";
import { cn } from "@/utils/cn";

interface FormProps<T extends FieldValues> {
    methods: UseFormReturn<T>;
    onSubmit: (data: T) => void;
    children?: React.ReactNode;
}

interface FormFieldProps<T extends FieldValues> {
    name: FieldPath<T>;
    render: (
        field: ControllerRenderProps<T, FieldPath<T>>,
        fieldState: ControllerFieldState,
    ) => React.ReactElement;
}

interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children?: React.ReactNode;
}

interface FormErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
    fieldState: ControllerFieldState;
}

/**
 * A wrapper that provides form context to all of it's children
 */
function Form<T extends FieldValues>({
    children,
    onSubmit,
    methods,
}: FormProps<T>) {
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
    );
}

/**
 * A controller that provides a field to it's children form (item, label, input, error, etc.)
 */
function FormField<T extends FieldValues>({ name, render }: FormFieldProps<T>) {
    const { control } = useFormContext<T>();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => render(field, fieldState)}
        />
    );
}

/**
 * A structure that displays form item (label, input, error, etc.)
 */
function FormItem({ children, className, ...props }: FormItemProps) {
    return (
        <div className={cn("flex flex-col gap-1.5", className)} {...props}>
            {children}
        </div>
    );
}

/**
 * A structure that displays form label
 */
function FormLabel({ children, className, htmlFor, ...props }: FormLabelProps) {
    return (
        <label
            className={cn("text-sm font-medium", className)}
            htmlFor={htmlFor}
            {...props}
        >
            {children}
        </label>
    );
}

/**
 * A structure that displays form error message if the field has an error
 */
function FormError({ fieldState, className, ...props }: FormErrorProps) {
    return (
        <p
            className={cn("text-destructive rounded-sm text-sm", className)}
            style={{
                display: fieldState.error ? "block" : "none",
            }}
            {...props}
        >
            {fieldState.error?.message}
        </p>
    );
}

export { Form, FormField, FormItem, FormLabel, FormError };
