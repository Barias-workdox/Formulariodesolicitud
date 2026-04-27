import { themedStyled } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

export const StyledRoot = themedStyled(
  'div',
  (): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }),
);

export const StyledFlagIcon = themedStyled(
  'span',
  (): StyleObject => ({
    fontSize: '16px',
  }),
);

export const StyledContent = themedStyled<'div', { $isExpanded: boolean }>(
  'div',
  ({ $theme, $isExpanded }): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    borderTop: `1px solid ${$theme.colors.neutralSubtle}`,
    overflow: 'hidden',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    maxHeight: 0,
    opacity: 0,
    transform: 'translateY(-10px)',
    ...($isExpanded && {
      borderTop: `1px solid ${$theme.colors.neutralWashed}`,
      borderBottom: `1px solid ${$theme.colors.neutralWashed}`,
      maxHeight: '455px',
      opacity: 1,
      transform: 'translateY(0)',
    }),
  }),
);
