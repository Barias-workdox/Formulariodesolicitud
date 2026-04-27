import type { ReactElement } from 'react';

import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';

import { SimpleText } from './simple-text';

type DatetimeAsTextProps = {
  value: string;
};

/**
 * This component receives a date string as a prop and displays it
 * as a formatted text using the locale-specific datetime formatting (Jan 1, 2021 12:00 AM).
 */
export const DatetimeAsText = ({ value }: DatetimeAsTextProps): ReactElement => {
  const { formatDatetimeAsText } = useDateUtilsWithLocale();

  return <SimpleText value={formatDatetimeAsText(value)} />;
};
