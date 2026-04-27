import { themedStyled } from '@themes/utilities';

import type { ActionButtonStyleParams } from './webdox-ai-document-viewer-wrapper.interfaces';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { ButtonOverrides } from 'baseui/button';
import type { StyleObject } from 'styletron-react';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  width: '100%',
  height: '100%',
  display: 'inline-flex',

  ':has(*) *::selection': {
    backgroundColor: `${$theme.colors.powerSubdued}66`,
  },
}));

export const StyledButtonsContainer = themedStyled('div', {
  display: 'flex',
});

export const SelectionPositionNode = themedStyled<'span', { $top: number; $left: number }>(
  'span',
  ({ $left, $top }) => ({
    position: 'absolute',
    top: `${$top}px`,
    left: `${$left}px`,
  }),
);

/** Get Button Overrides */
export const getButtonOverrides = ({
  $isFirstChild = false,
  $isLastChild = false,
}: ActionButtonStyleParams = {}): ButtonOverrides => ({
  BaseButton: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => {
      const borderStylesY = `1px solid ${$theme.colors.neutral}`;
      const borderStylesX = `0.5px solid ${$theme.colors.neutral}`;

      return {
        borderTop: borderStylesY,
        borderBottom: borderStylesY,
        borderLeft: borderStylesX,
        borderRight: borderStylesX,
        borderRadius: '0',
        ...($isFirstChild && { borderRadius: '4px 0 0 4px' }),
        ...($isLastChild && {
          borderRadius: '0 4px 4px 0',
          ':not(:hover) :not(:focus) :not(:active)': {
            borderRight: borderStylesX,
          },
        }),
      };
    },
  },
});
