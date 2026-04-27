import type { PropsWithChildren, ReactElement, ReactNode } from 'react';

import {
  StyledDefaultMessageLayout,
  StyledPrimaryMessageLayout,
  StyledSecondaryMessageLayout,
  StyledTertiaryMessageLayout,
} from './styled-components';

import type { MessageLayoutKindType } from '@components/webdox-ai/interfaces';
import type { StyleObject } from 'styletron-react';

export type ChatMessageLayoutProps = PropsWithChildren<{
  footer?: ReactNode;
  header?: ReactNode;
  kind: MessageLayoutKindType;
  maxWidth?: StyleObject['maxWidth'];
}>;

export type StyledMessageProps = {
  $maxWidth?: StyleObject['maxWidth'];
};

const allOptions: Record<
  MessageLayoutKindType,
  {
    Component: typeof StyledDefaultMessageLayout;
  }
> = {
  default: {
    Component: StyledDefaultMessageLayout,
  },
  primary: {
    Component: StyledPrimaryMessageLayout,
  },
  secondary: {
    Component: StyledSecondaryMessageLayout,
  },
  tertiary: {
    Component: StyledTertiaryMessageLayout,
  },
};

/**
 * Component that renders a chat message layout with a header, content and footer
 */
export const ChatMessageLayout = ({
  children,
  footer,
  header,
  kind,
  maxWidth,
}: ChatMessageLayoutProps): ReactElement => {
  const { Component } = allOptions[kind];

  return (
    <Component $maxWidth={maxWidth}>
      {header && <section>{header}</section>}
      {children && <section>{children}</section>}
      {footer && <section>{footer}</section>}
    </Component>
  );
};
