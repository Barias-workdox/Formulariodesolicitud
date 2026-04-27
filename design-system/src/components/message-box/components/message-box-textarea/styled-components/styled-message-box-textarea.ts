import { getCustomScrollBarStyles } from '@themes/custom-scroll-bar';
import { themedStyled } from '@themes/utilities';

type StyleOptions = {
  $disabled: boolean;
  $isEmpty: boolean;
};

export const StyledMessageBoxTextarea = themedStyled<'div', StyleOptions>(
  'div',
  ({ $theme, $disabled, $isEmpty }) => ({
    ...$theme.typography.ParagraphMedium,
    flex: 1,
    cursor: 'text',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    border: 'none',
    color: $theme.colors.neutralSubdued,
    height: '100%',
    overflow: 'auto',
    outline: 'none',
    padding: `${$theme.spacing.spacingXs} ${$theme.spacing.spacingMd}`,
    ...($disabled && {
      pointerEvents: 'none',
      cursor: 'not-allowed',
    }),
    ...($isEmpty && {
      position: 'relative', // needed for absolute ::before
      '::before': {
        ...$theme.typography.ParagraphMedium,
        position: 'absolute',
        content: 'attr(placeholder)',
        color: $theme.colors.neutralDepressed,
        overflow: 'hidden',
        maxWidth: `calc(100% - 2 * ${$theme.spacing.spacingMd})`,
        pointerEvents: 'none',
      },
    }),
    ...getCustomScrollBarStyles($theme),
  }),
);
