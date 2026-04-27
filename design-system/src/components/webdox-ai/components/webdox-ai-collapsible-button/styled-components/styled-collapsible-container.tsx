import { themedStyled } from '@themes/utilities';

import type { DirectionType } from '../webdox-ai-collapsible-button.interfaces';

export const StyledCollapsibleContainer = themedStyled<
  'div',
  { $isToggled: boolean; $contentHeight: number; $contentWidth: number; $direction: DirectionType }
>('div', ({ $contentHeight, $isToggled, $contentWidth, $direction, $theme }) => ({
  overflow: 'hidden',
  transition: 'all .20s ease-in-out',
  ...($direction === 'column' && {
    height: $isToggled ? `${$contentHeight}px` : 0,
  }),
  ...($direction === 'row' && {
    width: $isToggled ? `${$contentWidth}px` : 0,
    // The padding is added to the right side of the container to prevent the content from being cut off.
    paddingRight: $isToggled ? $theme.spacing.spacingMd : 0,
  }),
}));
