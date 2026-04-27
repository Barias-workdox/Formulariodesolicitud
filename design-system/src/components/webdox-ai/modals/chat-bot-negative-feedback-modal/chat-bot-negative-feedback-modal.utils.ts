import * as yup from 'yup';

import { useFormContext } from '../../../forms/hooks';
import { useTranslation } from '../../../utils';

import type { UseFormReturn } from '../../../forms/hooks';
import type { TFunction } from '../../../utils';
import type { NegativeFeedbackFormValues } from '../../interfaces/webdox-ai.interfaces';
import type { Option } from 'baseui/select';

/** Get the Negative feedback form validation schema */
export const useChatBotNegativeFeedbackValidationSchema = (): yup.AnyObjectSchema => {
  const { t } = useTranslation();

  return yup.object().shape({
    comments: yup.string().when('option', ([option], schema) =>
      option === 'custom'
        ? yup
            .string()
            .trim()
            .test('empty-check', t('forms.validations.required'), (value) => {
              return value !== undefined && value !== null && value !== '';
            })
            .required(t('forms.validations.required'))
        : schema,
    ),
    option: yup.string().required(t('forms.validations.required')),
  });
};

export const defaultNegativeFeedbackFormValues: NegativeFeedbackFormValues = {
  comments: '',
  option: undefined,
};

/** Formik context wrapper used across the forward step form, typed with the values types */
export const useNegativeFeedbackFormContext = (): UseFormReturn<
  NegativeFeedbackFormValues,
  unknown,
  undefined
> => useFormContext<NegativeFeedbackFormValues>();

/** Get all options for the radio form element `option` */
export const getFormOptions = (t: TFunction): Option[] => [
  {
    id: 'not_real',
    label: t('webdoxAI.chat.feedback.modal.negative.options.not_real'),
  },
  {
    id: 'incomplete',
    label: t('webdoxAI.chat.feedback.modal.negative.options.incomplete'),
  },
  {
    id: 'unhelpful',
    label: t('webdoxAI.chat.feedback.modal.negative.options.unhelpful'),
  },
  {
    id: 'custom',
    label: t('webdoxAI.chat.feedback.modal.negative.options.custom'),
  },
];
