import type { InputOverrides } from 'baseui/input';
import type { StyleObject } from 'styletron-react';

/** Overrides styles for the baseInput component */
export const inputStyledOverrides = (): InputOverrides => ({
  Input: {
    style: ({ $theme }): StyleObject => ({
      backgroundColor: 'transparent',
      padding: '10px 0px',
      ...$theme.typography.ParagraphSmall,
    }),
  },
  InputContainer: {
    style: {
      backgroundColor: 'transparent',
    },
  },
  Root: {
    style: {
      border: 'none',
      backgroundColor: 'transparent',
      padding: 0,
    },
  },
  StartEnhancer: {
    style: {
      backgroundColor: 'transparent',
      paddingLeft: 0,
    },
  },
});
