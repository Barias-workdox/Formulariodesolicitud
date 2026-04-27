import * as zod from 'zod';

import { useTranslation } from '@components/utils';
import { TEXT_AREA_LENGTH } from '@constants/form.constants';

import { MESSAGE_MAX_LENGTH } from '../constants/webdox-ai.constants';

/** Get custom prompt validation schema */
export const useCustomPromptValidationSchema = (): zod.ZodObject<{
  title: zod.ZodString;
  content: zod.ZodString;
}> => {
  const { t } = useTranslation();

  return zod.object({
    title: zod
      .string()
      .max(
        TEXT_AREA_LENGTH.small,
        t('forms.validations.maxLength', { length: TEXT_AREA_LENGTH.small }),
      ),
    content: zod
      .string({ message: t('forms.validations.required') })
      .nonempty(t('forms.validations.required'))
      .max(MESSAGE_MAX_LENGTH, t('forms.validations.maxLength', { length: MESSAGE_MAX_LENGTH })),
  });
};
