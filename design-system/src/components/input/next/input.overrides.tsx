import { StyledInput as BStyledInput, StyledRoot as BStyledRoot } from 'baseui/input';

import { themedWithStyle } from '@themes/utilities';

import { getInputRootStyles, getInputStyle } from './input.styles';

import type { InputProps, SharedProps } from './input.interfaces';
import type { InputOverrides } from 'baseui/input';

type GetInputBaseOverridesProps = Pick<InputProps, 'kind' | 'size' | 'width'> & {
  isHovered: boolean;
  withStartEnhancer?: boolean;
  dataTestId?: string;
};

/**
 * Input override component styled with the theme based on the kind of the input
 */
export const StyledInput = themedWithStyle<typeof BStyledInput, SharedProps>(
  BStyledInput,
  getInputStyle,
);

/**
 * Root override component styled with the theme based on the kind and size of the input
 */
export const StyledRoot = themedWithStyle<typeof BStyledRoot, SharedProps>(
  BStyledRoot,
  getInputRootStyles,
);

/**
 * Get the input base styles overrides by its "type", "size" and "kind"
 */
export const getInputBaseOverrides = ({
  kind,
  size,
  isHovered,
  dataTestId,
  withStartEnhancer,
  width,
}: GetInputBaseOverridesProps): InputOverrides => ({
  ClearIconContainer: {
    style: ({ $theme }) => ({ marginRight: `-${$theme.spacing.spacingXs}` }),
  },
  StartEnhancer: {
    style: {
      backgroundColor: 'transparent',
      padding: 0,
    },
  },
  EndEnhancer: {
    style: {
      backgroundColor: 'transparent',
      padding: 0,
    },
  },
  MaskToggleButton: {
    style: {
      paddingRight: 0,
    },
  },
  Input: {
    props: {
      'data-testid': dataTestId,
      $size: size,
      $kind: kind,
    },
    component: StyledInput,
  },
  InputContainer: {
    style: {
      backgroundColor: 'transparent',
    },
  },
  Root: {
    props: {
      $kind: kind,
      $size: size,
      $isHovered: isHovered,
      $withStartEnhancer: withStartEnhancer,
      $width: width,
    },
    component: StyledRoot,
  },
});
