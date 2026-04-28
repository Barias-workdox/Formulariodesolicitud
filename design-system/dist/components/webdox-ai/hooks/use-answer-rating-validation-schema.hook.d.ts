import * as zod from 'zod';
export type UseAnswerRatingValidationSchemaProps = {
    isScoreRequired?: boolean;
};
type BaseSchema = zod.ZodObject<{
    score: zod.ZodOptional<zod.ZodNumber>;
    answerProblem: zod.ZodOptional<zod.ZodString>;
    mainAnswerProblem: zod.ZodOptional<zod.ZodString>;
    legalWhisperUsageProblem: zod.ZodOptional<zod.ZodString>;
    systemError: zod.ZodOptional<zod.ZodString>;
    quoteTypeToImprove: zod.ZodOptional<zod.ZodString>;
    quoteProblem: zod.ZodOptional<zod.ZodString>;
    quotesToImprove: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
        name: zod.ZodString;
    }>>>;
    observations: zod.ZodOptional<zod.ZodString>;
}>;
/** Get answer rating validation schema */
export declare const useAnswerRatingValidationSchema: (props?: UseAnswerRatingValidationSchemaProps) => zod.ZodType<zod.infer<BaseSchema>>;
export {};
