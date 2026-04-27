import * as zod from 'zod';

import { useTranslation } from '@components/utils';
import { TEXT_AREA_LENGTH } from '@constants/form.constants';

/** Get custom prompt validation schema */
export const useEditLegalWhisperConversationValidationSchema = (): zod.ZodObject<{
  title: zod.ZodString;
  id: zod.ZodString;
}> => {
  const { t } = useTranslation();

  return zod.object({
    title: zod
      .string()
      .trim()
      .nonempty(t('forms.validations.required'))
      .max(
        TEXT_AREA_LENGTH.small,
        t('forms.validations.maxLength', { length: TEXT_AREA_LENGTH.small }),
      ),
    id: zod.string(),
  });
};
