import type { PropsWithChildren } from 'react';

import { TruncatedText } from '@components/truncated-text';

/**
 * Component for displaying a label in the menu item.
 * It uses the Text component to render the label with specific styles.
 */
export const MenuItemLabel = ({ children }: PropsWithChildren<object>): JSX.Element => {
  return (
    <TruncatedText
      textProps={{ variant: 'bodySmall', margin: 0 }}
      tooltipProps={{
        content: children,
        placement: 'left',
        showArrow: true,
        popoverMargin: 16,
      }}
    >
      {children}
    </TruncatedText>
  );
};
