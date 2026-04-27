import type { ReactElement, ReactNode } from 'react';

import { themedStyled } from '../../../themes';
import { Text } from '../../text';
import { useCss } from '../../utils/hooks/use-css';

import type { DesignSystemTheme } from '../../../themes';
import type { StyleObject } from 'styletron-standard';

export interface MessageContentProps {
  children: ReactNode;
}

export const messageContentStyles = {
  textStyle: (theme: DesignSystemTheme): StyleObject => ({
    wordBreak: 'break-word',
    textAlign: 'justify',
    marginTop: theme.spacing.spacingMd,
    marginBottom: theme.spacing.spacingXs,
    color: theme.colors.neutralSubdued,
    flexGrow: 1,
  }),
};

/**
 * Styled content of the message
 */
export const MessageContent = ({ children }: MessageContentProps): ReactElement => {
  const { theme } = useCss();

  return (
    <Text
      variant="bodySmall"
      $style={messageContentStyles.textStyle(theme)}
    >
      {children}
    </Text>
  );
};

/** Container used in the Message content section for the message body section */
export const MessageContentBodyWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: $theme.spacing.spacingXs,
}));

/** Container used in the Message content section for the message content and footer */
export const MessageContentWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacing2xs,
}));
