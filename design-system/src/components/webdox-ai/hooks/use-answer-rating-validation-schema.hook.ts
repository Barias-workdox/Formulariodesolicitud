import * as zod from 'zod';

import { useTranslation } from '@components/utils';

import { AnswerProblem, MainAnswerProblem, MAX_OBSERVATIONS_MESSAGE_LENGHT } from '../components';

import type { TFunction } from 'i18next';

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
  quotesToImprove: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{ name: zod.ZodString }>>>;
  observations: zod.ZodOptional<zod.ZodString>;
}>;

/**
 * Get base schema for answer rating validation
 */
const getBaseSchema = (t: TFunction): BaseSchema => {
  return zod.object({
    score: zod.number().optional(),
    answerProblem: zod.string().optional(),
    mainAnswerProblem: zod.string().optional(),
    legalWhisperUsageProblem: zod.string().optional(),
    systemError: zod.string().optional(),
    quoteTypeToImprove: zod.string().optional(),
    quoteProblem: zod.string().optional(),
    quotesToImprove: zod
      .array(
        zod.object({
          name: zod.string(),
        }),
      )
      .optional(),
    observations: zod
      .string()
      .max(
        MAX_OBSERVATIONS_MESSAGE_LENGHT,
        t('forms.validations.maxLength', { length: MAX_OBSERVATIONS_MESSAGE_LENGHT }),
      )
      .optional(),
  });
};

/** Get answer rating validation schema */
export const useAnswerRatingValidationSchema = (
  props?: UseAnswerRatingValidationSchemaProps,
): zod.ZodType<zod.infer<BaseSchema>> => {
  const { t } = useTranslation();
  const { isScoreRequired = true } = props || {};

  return getBaseSchema(t).superRefine((data, ctx) => {
    if (isScoreRequired && !data.score) {
      ctx.addIssue({
        path: ['score'],
        code: zod.ZodIssueCode.custom,
      });
    }

    if (data.score > 0 && data.score < 5 && !data.answerProblem) {
      ctx.addIssue({
        path: ['answerProblem'],
        code: zod.ZodIssueCode.custom,
      });
    }

    if (data.answerProblem === AnswerProblem.MainAnswer && !data.mainAnswerProblem) {
      ctx.addIssue({
        path: ['mainAnswerProblem'],
        code: zod.ZodIssueCode.custom,
      });
    }

    if (data.answerProblem === AnswerProblem.LegalWhisperUsage && !data.legalWhisperUsageProblem) {
      ctx.addIssue({
        path: ['legalWhisperUsageProblem'],
        code: zod.ZodIssueCode.custom,
      });
    }

    if (data.answerProblem === AnswerProblem.SystemError && !data.systemError) {
      ctx.addIssue({
        path: ['systemError'],
        code: zod.ZodIssueCode.custom,
      });
    }

    if (data.answerProblem === AnswerProblem.Quotes && !data.quoteTypeToImprove) {
      ctx.addIssue({
        path: ['quoteTypeToImprove'],
        code: zod.ZodIssueCode.custom,
      });
    }

    if (data.quoteTypeToImprove && !data.quoteProblem) {
      ctx.addIssue({
        path: ['quoteProblem'],
        code: zod.ZodIssueCode.custom,
      });
    }

    if (data.quoteProblem && data.quotesToImprove?.length === 0) {
      ctx.addIssue({
        path: ['quotesToImprove'],
        code: zod.ZodIssueCode.custom,
      });
    }

    // Check if some option selected is "other" and if the observations field is empty
    if (
      Object.values(data).some((value) => value === MainAnswerProblem.Other) &&
      !data.observations
    ) {
      ctx.addIssue({
        path: ['observations'],
        code: zod.ZodIssueCode.custom,
        message: t('forms.validations.required'),
      });
    }
  });
};
