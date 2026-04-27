import { useMemo } from 'react';

import { useTranslation } from '@components/utils';

import { linkValidationSchema } from '../link.validation';

import type { LinkValidationSchemaProps } from '../link.validation';
import type { AnySchema } from 'yup';

export interface UseLinkReturnType {
  /** The i18n text to render if the link validation fails */
  containsLinkErrorMessage: string;
  /** Reusable link validation schema used in forms */
  linkValidationSchema(
    props: Omit<LinkValidationSchemaProps, 'containsLinkErrorMessage'>,
  ): AnySchema;
}

/**
 * Has all i18n texts and reusable link validation rules and utilities with i18n added.
 * Use this hook to get the base schema with i18n texts for errors in conjunction with the
 * base schema
 */
export const useLinkValidation = (): UseLinkReturnType => {
  const { t } = useTranslation();

  const containsLinkErrorMessage = useMemo(() => t('forms.validations.noLink'), [t]);

  return {
    containsLinkErrorMessage,
    linkValidationSchema: (props) => linkValidationSchema({ ...props, containsLinkErrorMessage }),
  };
};
