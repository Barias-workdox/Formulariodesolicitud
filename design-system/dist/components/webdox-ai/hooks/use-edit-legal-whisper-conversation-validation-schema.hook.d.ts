import * as zod from 'zod';
/** Get custom prompt validation schema */
export declare const useEditLegalWhisperConversationValidationSchema: () => zod.ZodObject<{
    title: zod.ZodString;
    id: zod.ZodString;
}>;
