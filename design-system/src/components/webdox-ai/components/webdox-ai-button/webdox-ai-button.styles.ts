import { themedStyled } from '@themes/utilities';

import { WEBDOX_AI_COLORS } from '../../constants';

import { WEBDOX_AI_BUTTON_ICON_SIZE, WEBDOX_AI_BUTTON_SIZE } from './webdox-ai-button.constants';

import type { StyleObject } from 'styletron-react';

interface StyledComponentProps {
  $isLoading: boolean;
  $hasError?: boolean;
}

const baseAnimationStyles: StyleObject = {
  animationDuration: '2s',
  animationDelay: '0s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-in-out',
};

export const styles = {
  iconStyles: (_, { $isLoading }: StyledComponentProps): StyleObject => ({
    position: 'absolute',
    height: WEBDOX_AI_BUTTON_ICON_SIZE,
    width: WEBDOX_AI_BUTTON_ICON_SIZE,
    ...($isLoading && {
      ...baseAnimationStyles,
      animationName: {
        '0%': {
          opacity: 1,
        },
        '50%': {
          opacity: 0.8,
        },
        '100%': {
          opacity: 1,
        },
      },
    }),
  }),
};

export const StyledButton = themedStyled<'button', StyledComponentProps>(
  'button',
  ({ $isLoading, $hasError = false }) => ({
    position: 'relative',
    height: WEBDOX_AI_BUTTON_SIZE,
    width: WEBDOX_AI_BUTTON_SIZE,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'unset',
    border: 'unset',
    borderRadius: '50%',
    cursor: 'pointer',
    background: WEBDOX_AI_COLORS.primaryColor,
    // Add an animation to svg icon when the button is hovered
    ':has(*) svg:nth-of-type(1)': {
      transition: 'transform 300ms ease-in-out',
    },
    ':hover': {
      ':has(*) svg:nth-of-type(1)': {
        transform: 'scale(1.1)',
      },
    },
    ...(($isLoading || $hasError) && {
      '::before': {
        //  Some colors used in the gradient are not tokenized as they are exclusively used for animation purposes.
        background: `conic-gradient( #F6F2F8 0deg, ${WEBDOX_AI_COLORS.secondaryColor} 140deg, #87EECF 295deg, #F6F2F8 360deg)`,
        content: '""',
        borderRadius: '50%',
        height: '100%',
        width: '100%',
        ...($isLoading && {
          ...baseAnimationStyles,
          animationName: {
            '0%': {
              transform: 'rotate(0deg)',
              opacity: 0,
            },
            '50%': {
              opacity: 1,
            },
            '100%': {
              transform: 'rotate(720deg)',
              opacity: 0,
            },
          },
        }),
      },
    }),
  }),
);
