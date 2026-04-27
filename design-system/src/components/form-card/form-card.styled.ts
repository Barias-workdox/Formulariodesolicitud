import { COMMON_HEIGHT_32 } from '@constants/common.constants';
import { themedStyled } from '@themes/utilities';

import type { FormCardProps } from './form-card.interfaces';
import type { ButtonProps } from '@components/button/next';
import type { StyleObject } from 'styletron-standard';

export const textStyles: StyleObject = {
  lineHeight: '150%',
  letterSpacing: '1px',
  textTransform: 'uppercase',
};

export const backButtonOverrides: ButtonProps['overrides'] = {
  BaseButton: { style: () => ({ width: COMMON_HEIGHT_32, height: COMMON_HEIGHT_32 }) },
};

type FormCardContainerStyledProps = Pick<
  FormCardProps,
  '$hasElevation' | '$height' | '$width' | '$maxWidth'
>;

export const FormCardContainerStyled = themedStyled<'div', FormCardContainerStyledProps>(
  'div',
  ({ $theme, $hasElevation = true, $height = '100%', $width = '100%', $maxWidth = '700px' }) => ({
    width: $width,
    height: $height,
    maxWidth: $maxWidth,
    border: `1px solid ${$theme.colors.neutralSubtle}`,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: $theme.borders.borderMd,
    ...($hasElevation && {
      boxShadow: $theme.elevations.md.down,
    }),
    [`@media (max-width: ${$theme.breakpoints.small}px)`]: {
      width: '100%',
      height: '100%',
    },
  }),
);

export const FormCardTopContainerStyled = themedStyled('div', ({ $theme }) => ({
  padding: $theme.spacing.spacingXs,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  minHeight: 0,
}));

export const FormCardHeaderStyled = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  background: `linear-gradient(180deg, ${$theme.colors.brandBase} 74.52%, ${$theme.colors.bgBase} 100%)`,
  borderTopLeftRadius: $theme.borders.borderSm,
  borderTopRightRadius: $theme.borders.borderSm,
}));

export const FormCardNavStyled = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${$theme.colors.neutralSubtle}`,
  flexShrink: 0,
  padding: $theme.spacing.spacingXs,
}));

export const FormCardNavLeftStyled = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
}));

export const FormCardNavRightStyled = themedStyled('div', () => ({
  display: 'flex',
  alignItems: 'center',
}));

export const FormCardDescriptionStyled = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingXs,
  flexShrink: 0,
  paddingTop: $theme.spacing.spacingSm,
  paddingBottom: $theme.spacing.spacingXl,
  paddingLeft: $theme.spacing.spacingXs,
  paddingRight: $theme.spacing.spacingXs,
}));

export const FormCardBodyStyled = themedStyled('div', ({ $theme }) => ({
  flexGrow: 1,
  overflowY: 'auto',
  minHeight: 0,
  padding: $theme.spacing.spacingXs,
}));

export const FormCardFooterStyled = themedStyled('div', ({ $theme }) => ({
  borderTop: `1px solid ${$theme.colors.neutralSubtle}`,
  gap: $theme.spacing.spacingXs,
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  padding: $theme.spacing.spacingXs,
}));

export const FormCardFooterActionStyled = themedStyled('div', () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const FormCardFooterActionButtonsStyled = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingXs,
}));
