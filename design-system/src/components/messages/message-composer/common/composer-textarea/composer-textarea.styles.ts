import { themedStyled } from '@themes/utilities';

import type { ComposerTextareaProps } from './composer-textarea';

type StyleOptions = Pick<ComposerTextareaProps, '$padding'> & {
  $disabled: boolean;
};

export const StyledDiv = themedStyled<'div', StyleOptions>(
  'div',
  ({ $theme, $padding, $disabled }) => ({
    ...$theme.typography.ParagraphSmall,
    cursor: 'text',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    border: 'none',
    color: $theme.colors.neutralSubdued,
    padding: $padding ?? `0 ${$theme.spacing.spacingMd}`,
    flex: 1,
    overflow: 'auto',
    outline: 'none',
    ...($disabled && {
      pointerEvents: 'none',
      opacity: 0.4,
      cursor: 'not-allowed',
    }),
    '[placeholder]:empty::before': {
      ...$theme.typography.ParagraphXSmall,
      content: 'attr(placeholder)',
      color: $theme.colors.neutralDepressed,
    },
  }),
);
