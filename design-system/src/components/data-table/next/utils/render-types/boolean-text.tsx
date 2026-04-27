import type { ReactElement } from 'react';

import { useTranslation } from '@components/utils/i18n';

import { SimpleText } from './simple-text';

type BooleanTextProps = { value: boolean };

/**
 * Renders a localized text representation of a boolean value.
 */
export const BooleanText = ({ value }: BooleanTextProps): ReactElement => {
  const { t } = useTranslation();

  return <SimpleText value={typeof value === 'boolean' ? t(`boolean.${value}`) : '--'} />;
};
