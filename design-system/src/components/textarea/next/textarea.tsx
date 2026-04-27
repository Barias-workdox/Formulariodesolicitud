import { Textarea as BaseTextarea } from 'baseui/textarea';

import { withIsHovered } from '@components/hocs/with-is-hovered';
import { DEFAULT_SIZE } from '@components/input/next';

import { getTextareaOverrides } from './textarea.overrides';

import type { WithIsHoveredProps } from '@components/hocs/with-is-hovered';
import type { InputKind, Size } from '@components/input/next';
import type { TextareaProps as BaseTextareaProps } from 'baseui/textarea';

export type TextareaProps = WithIsHoveredProps &
  Omit<BaseTextareaProps, 'size'> & {
    kind?: InputKind;
    size?: Size;
    'data-testid'?: string;
  };

/** Textarea custom DS component */
function TextareaComponent({
  kind = 'gray',
  isHovered,
  size = DEFAULT_SIZE,
  'data-testid': dataTestId,
  ...rest
}: TextareaProps): React.ReactElement {
  return (
    <BaseTextarea
      {...rest}
      overrides={getTextareaOverrides({ kind, size, dataTestId, isHovered, resize: rest.resize })}
    />
  );
}

/** Textarea custom DS component with is hovered prop injected */
export const Textarea = withIsHovered(TextareaComponent);
