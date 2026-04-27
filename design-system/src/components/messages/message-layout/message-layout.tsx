import type { ReactElement, ReactNode } from 'react';

import { useCss } from '../../utils/hooks/use-css';

import type { DesignSystemTheme } from '../../../themes';
import type { MessagesProps } from '../messages';
import type { StyleObject } from 'styletron-standard';

type MessageContainerStylesProps = {
  direction: MessagesProps['direction'];
  padding: StyleObject['padding'];
};

const messageContainerStyles = {
  containerStyles: (
    theme: DesignSystemTheme,
    { padding, direction }: MessageContainerStylesProps,
  ): StyleObject => ({
    position: 'relative',
    padding: padding ?? `${theme.spacing.spacingMd} ${theme.spacing.spacing3xl}`,
    [`:not(:${direction === 'reverse' ? 'last-child' : 'first-child'})`]: {
      borderTop: `1px solid ${theme.colors.divisionLine}`,
    },
  }),
};

const messageHeaderStyles = {
  headerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.spacingXs,
    overflow: 'hidden',
  }),
};

export interface MessageContainerProps {
  padding?: StyleObject['padding'];
  children: ReactNode;
  direction: MessagesProps['direction'];
  'data-testid': string;
}

export interface MessageHeaderProps {
  children: ReactNode;
}

/**
 * This is the message container.
 * Shows a borderTop if is not the first message.
 */
export const MessageContainer = ({
  children,
  padding,
  direction,
  'data-testid': dataTestId,
}: MessageContainerProps): ReactElement => {
  const { containerStyles } = useCss(messageContainerStyles, { padding, direction });

  return (
    <div
      className={containerStyles}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};

/**
 * This is the message header wrapper component.
 */
export const MessageHeader = ({ children }: MessageHeaderProps): ReactElement => {
  const { headerStyles } = useCss(messageHeaderStyles);

  return <div className={headerStyles}>{children}</div>;
};
