import type { ReactChildren } from 'react';

import { themedStyled } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

export interface ListProps {
  children: ReactChildren;
}

/**
 * A styled list component with custom theme-based styling.
 *
 * This component renders an unordered list (`<ul>`) with flexbox layout properties
 * to arrange its children vertically. It applies theme-specific styles to the
 * list and its items.
 */
export const List = themedStyled<
  'ul',
  { $height?: StyleObject['height']; $withBorder?: boolean; $overflow?: StyleObject['overflow'] }
>('ul', ({ $theme, $height, $withBorder = true, $overflow = 'auto' }) => ({
  minHeight: '1px',
  width: '100%',
  position: 'relative',
  padding: 0,
  margin: 0,
  border: $withBorder ? `1px solid ${$theme.colors.neutralSubtle}` : 'unset',
  height: $height,
  overflow: $overflow,
}));
