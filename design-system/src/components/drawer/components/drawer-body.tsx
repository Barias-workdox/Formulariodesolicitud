import type { PropsWithChildren } from 'react';

import { useCss } from '@components/utils/hooks/use-css';

import { drawerBodyStyles } from './drawer.styles';

import type { StyleObject } from 'styletron-standard';

export type DrawerBodyProps = PropsWithChildren<{
  overrides?: StyleObject;
  padding?: StyleObject['padding'];
}>;

/**
 * The drawer body styled with a default padding.
 * Can receive a padding prop to set a custom value.
 */
export const DrawerBody = ({ children, padding, overrides = {} }: DrawerBodyProps): JSX.Element => {
  const { bodyContainerStyles } = useCss(drawerBodyStyles, { padding, overrides });

  return <div className={bodyContainerStyles}>{children}</div>;
};
