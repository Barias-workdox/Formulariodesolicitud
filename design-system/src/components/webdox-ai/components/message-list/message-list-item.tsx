import type { PropsWithChildren, ReactElement } from 'react';

import {
  StyledListItem,
  StyledListItemContentText,
} from '@components/webdox-ai/components/styled-list';

import type { StyledListItemContentTextProps } from '@components/webdox-ai/components/styled-list';

export type MessageListItemProps = PropsWithChildren<{
  'data-testid': string;
  /** Will render an icon in the left side if supplied */
  /** @defaultValue - \{ content: children \} */
  tooltipProps?: StyledListItemContentTextProps['tooltipProps'];
  /** @defaultValue - \{ variant: 'bodySmall' \} */
  textProps?: StyledListItemContentTextProps['textProps'];
  onClick(): void;
}>;

/**
 * Reusable styled message list item. Has a truncated text
 * and an optional artwork on the left
 */
export const MessageListItem = ({
  'data-testid': dataTestId,
  children,
  tooltipProps,
  onClick,
}: MessageListItemProps): ReactElement => (
  <StyledListItem
    data-testid={`${dataTestId}-wrapper`}
    onClick={onClick}
  >
    <StyledListItemContentText
      data-testid={`${dataTestId}-content`}
      tooltipProps={{ showArrow: true, content: children, ignoreBoundary: true, ...tooltipProps }}
      textProps={{ variant: 'bodySmall' }}
    >
      {children}
    </StyledListItemContentText>
  </StyledListItem>
);
