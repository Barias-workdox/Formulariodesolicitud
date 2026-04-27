import { StyledRoot as StyledInputRoot } from '@components/input/next/input.overrides';

import { textareaInputStyles } from './textarea.styles';

import type { TextareaProps } from './textarea';
import type { InputKind, Size } from '@components/input/next';
import type { TextareaOverrides } from 'baseui/textarea';

/** Overrides for textarea DS custom component */
export const getTextareaOverrides = ({
  resize,
  kind,
  isHovered,
  dataTestId,
  size,
}: {
  resize: TextareaProps['resize'];
  kind: InputKind;
  isHovered: boolean;
  dataTestId?: string;
  size: Size;
}): TextareaOverrides => ({
  Root: {
    props: {
      $kind: kind,
      $size: size,
      $isHovered: isHovered,
    },
    component: StyledInputRoot,
    style: {
      padding: 0,
      width: resize !== undefined ? 'fit-content' : undefined,
    },
  },
  Input: {
    props: {
      ...(dataTestId && { 'data-testid': dataTestId }),
      $kind: kind,
      $size: size,
    },
    style: textareaInputStyles,
  },
  InputContainer: {
    style: {
      backgroundColor: 'transparent',
    },
  },
});
