/**
 * @type {import('prettier').Config}
 */
const config = {
    tabWidth: 4,
    semi: true,
    trailingComma: "all",
    quoteProps: "preserve",
    plugins: [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss",
    ],
    importOrder: [
        "<BUILTIN_MODULES>",
        "<THIRD_PARTY_MODULES>",
        "^@/app/(.*)$",
        "^@/components/layout/(.*)$",
        "^@/components/ui/(.*)$",
        "^@/providers/(.*)$",
        "^@/hooks/(.*)$",
        "^@/animations/(.*)$",
        "^@/lib/(.*)$",
        "^@/utils/(.*)$",
        "^@/schemas/(.*)$",
        "^@/styles/(.*)$",
        "^@/configs/(.*)$",
        "^@/types/(.*)$",
        "^@/(.*)$",
        "<TYPES>",
        "<TYPES>^@/app/(.*)$",
        "<TYPES>^@/components/layout/(.*)$",
        "<TYPES>^@/components/ui/(.*)$",
        "<TYPES>^@/providers/(.*)$",
        "<TYPES>^@/hooks/(.*)$",
        "<TYPES>^@/animations/(.*)$",
        "<TYPES>^@/lib/(.*)$",
        "<TYPES>^@/utils/(.*)$",
        "<TYPES>^@/schemas/(.*)$",
        "<TYPES>^@/styles/(.*)$",
        "<TYPES>^@/configs/(.*)$",
        "<TYPES>^@/types/(.*)$",
        "<TYPES>^@/(.*)$",
    ],
    importOrderParserPlugins: ["typescript", "jsx"],
};

export default config;
