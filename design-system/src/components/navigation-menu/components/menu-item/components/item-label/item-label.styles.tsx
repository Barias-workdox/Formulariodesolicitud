import { themedStyled } from '@themes/utilities';

import type { ItemLabelProps } from './item-label';
import type { TextProps } from '@components/text';

export type ItemLabelTextStyles = {
  color: TextProps['color'];
  fontWeight: TextProps['fontWeight'];
};

/** Returns the text styles for an item label based on its `disabled` and `isActive` states. */
export const getItemLabelTextStyles = ({
  disabled,
  isActive,
  isSelected,
}: Pick<ItemLabelProps, 'disabled' | 'isActive' | 'isSelected'>): ItemLabelTextStyles => {
  if (disabled) {
    return {
      color: 'neutralDepressed',
      fontWeight: '400',
    };
  }
  if (isSelected) {
    return {
      color: 'brandMedium',
      fontWeight: '500',
    };
  }
  if (isActive) {
    return {
      color: 'brandMedium',
      fontWeight: '400',
    };
  }

  return {
    color: 'neutralSubdued',
    fontWeight: '400',
  };
};

export const StyledRoot = themedStyled('div', ({ $theme }) => ({
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
  flex: 1,
}));

export const StyledLabelContainer = themedStyled('span', () => ({
  overflow: 'hidden',
  flex: 1,
}));
