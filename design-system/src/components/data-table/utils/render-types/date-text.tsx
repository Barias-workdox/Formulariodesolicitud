import type { ReactElement } from 'react';

import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';

import { SimpleText } from './simple-text';

type DateAsTextProps = {
  value: string;
};

/**
 * This component receives a date string as a prop and displays it
 * as a formatted text using the locale-specific date formatting.
 */
export const DateAsText = ({ value }: DateAsTextProps): ReactElement => {
  const { formatDateAsText } = useDateUtilsWithLocale();

  return <SimpleText value={formatDateAsText(value)} />;
};
