import type { PropsWithChildren } from 'react';

import { useCss } from '@components/utils/hooks/use-css';

import { drawerFooterStyles } from './drawer.styles';

import type { StyleObject } from 'styletron-react';

export type DrawerFooterProps = PropsWithChildren<{
  overrides?: StyleObject;
}>;

/**
 * Renders a footer component for a drawer.
 */
export const DrawerFooter = ({ children, overrides = {} }: DrawerFooterProps): JSX.Element => {
  const { footerContainerStyles } = useCss(drawerFooterStyles, { overrides });

  return <div className={footerContainerStyles}>{children}</div>;
};
