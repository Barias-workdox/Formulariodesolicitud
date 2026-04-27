import { COMMON_HEIGHT_32 } from '@constants/common.constants';
import { themedStyled } from '@themes/utilities';

import { getGuideLinesStyles } from '../group-resolutions/group-resolutions.styles';

import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { ButtonOverrides } from 'baseui/button';
import type { StyleObject } from 'styletron-react';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  position: 'relative',
  width: 'fit-content',
  backgroundColor: 'transparent',
  margin: `${$theme.spacing.spacingMd} 0`,
  zIndex: 1,
  ...getGuideLinesStyles($theme, true),
}));

export const StyledInner = themedStyled('div', ({ $theme }) => ({
  border: `1px solid ${$theme.colors.brandDepressed}`,
  borderRadius: $theme.spacing.spacing2xs,
  overflow: 'hidden',
}));

/** Custom overrides */
export const buttonOverrides = ({
  isActive,
  isOrButton,
}: {
  isActive: boolean;
  isOrButton?: boolean;
}): ButtonOverrides => ({
  BaseButton: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      ...$theme.typography.ParagraphSmall,
      fontWeight: isActive ? '500' : '400',
      padding: `${$theme.spacing.spacingSm} ${$theme.spacing.spacingXs}`,
      height: COMMON_HEIGHT_32,
      width: COMMON_HEIGHT_32,
      borderRight: isOrButton ? `1px solid ${$theme.colors.brandDepressed}` : 'none',
      color: $theme.colors.brandMedium,
      backgroundColor: isActive ? $theme.colors.brandSubtle : $theme.colors.bgBase,
      ':hover': {
        color: $theme.colors.brandMedium,
        backgroundColor: isActive ? $theme.colors.brandSubtle : $theme.colors.brandWashed,
      },
      ':active': {
        backgroundColor: isActive ? $theme.colors.brandSubtle : $theme.colors.bgBase,
      },
    }),
  },
});
