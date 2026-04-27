import { themedStyled } from '@themes/utilities';

export const StyledInputControlsContainer = themedStyled<
  'div',
  { $captionMode: boolean; $disabled: boolean }
>('div', ({ $theme, $captionMode, $disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  borderLeft: `solid 1px ${$theme.colors.neutralSubtle}`,
  height: '100%',
  padding: `0 ${$theme.spacing.spacingXs}`,
  gap: $theme.spacing.spacingXs,
  backgroundColor: $disabled
    ? $theme.colors.neutralWashed
    : $captionMode
      ? $theme.colors.neutralBase
      : 'transparent',
}));
