import type { ReactNode } from 'react';

import { Text } from '@components/text';

export interface DataExtractionBetaLabelProps {
  children: ReactNode;
}

/** A component that renders text to be used as a label in Data Extraction Beta. */
export const DataExtractionBetaLabel = ({
  children,
}: DataExtractionBetaLabelProps): JSX.Element => {
  return (
    <Text
      variant="bodySmall"
      fontWeight="500"
      color="neutral"
      margin={0}
    >
      {children}
    </Text>
  );
};
