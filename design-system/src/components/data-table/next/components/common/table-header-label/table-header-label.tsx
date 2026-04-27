import type { PropsWithChildren } from 'react';

import { TruncatedText } from '@components/truncated-text';

/**
 * Component for displaying a label in the table header.
 * It uses the Text component to render the label with specific styles.
 */
export const TableHeaderLabel = ({ children }: PropsWithChildren<object>): JSX.Element => {
  return (
    <TruncatedText
      tooltipProps={{
        content: children,
      }}
      textProps={{
        variant: 'bodySmall',
        margin: 0,
        fontWeight: '500',
        color: 'neutralMedium',
        $style: { lineHeight: 'unset' },
        as: 'span',
      }}
    >
      {children}
    </TruncatedText>
  );
};
