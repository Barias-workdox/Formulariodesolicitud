import type { PropsWithChildren } from 'react';

import { useCss } from '@components/utils/hooks/use-css';

/**
 * MessageBoxSlotExample component
 * This component is used to wrap the message box slot example
 * and add the custom styles
 */
export const MessageBoxSlotExample = ({ children }: PropsWithChildren<object>): JSX.Element => {
  const { theme } = useCss();

  return (
    <div
      style={{
        height: '32px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.brandWashed,
        border: `1px solid ${theme.colors.neutral}`,
        borderRadius: '8px',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
};
