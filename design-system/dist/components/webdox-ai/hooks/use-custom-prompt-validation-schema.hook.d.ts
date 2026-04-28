import * as zod from 'zod';
/** Get custom prompt validation schema */
export declare const useCustomPromptValidationSchema: () => zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
}>;
