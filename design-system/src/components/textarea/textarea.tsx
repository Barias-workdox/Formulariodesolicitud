import { useMemo } from 'react';

import { mergeOverrides } from 'baseui';
import { Textarea as BaseTextarea } from 'baseui/textarea';

import { getKindBackgroundColor, getRootStyles } from '../input';

import type { InputKind } from '../input';
import type { TextareaProps as BaseTextareaProps, TextareaOverrides } from 'baseui/textarea';
import type { StyleObject } from 'styletron-standard';

export type TextareaResize = React.CSSProperties['resize'];

export type TextareaProps = BaseTextareaProps & {
  kind?: InputKind;
  isBorderless?: boolean;
  /** Will not be resizable by default */
  resize?: TextareaResize;
  'data-testid'?: string;
};

/** Overrides for textarea DS custom component */
const textareaOverrides = ({
  kind,
  isBorderless,
  resize,
  dataTestId,
}: {
  kind: InputKind;
  isBorderless?: boolean;
  resize?: TextareaProps['resize'];
  dataTestId?: string;
}): TextareaOverrides => ({
  Root: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - incorrectly typed base web component
    style: ({ $isFocused, $error, $positive, $disabled, $theme }): StyleObject =>
      getRootStyles({
        $isFocused,
        $error,
        $positive,
        $kind: kind,
        $disabled,
        $theme,
        $isBorderless: isBorderless,
      }),
  },
  Input: {
    props: {
      ...(dataTestId && { 'data-testid': dataTestId }),
    },
    style: ({ $theme }): StyleObject => ({
      ...$theme.typography.ParagraphSmall,
      backgroundColor: getKindBackgroundColor(kind, $theme),
      paddingTop: '12px',
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingBottom: '12px',
      ':disabled': {
        backgroundColor: getKindBackgroundColor(kind, $theme),
      },
      ...(resize !== undefined && {
        width: '100vw', // fill all available space up to parent max-width
        resize,
      }),
    }),
  },
  InputContainer: {
    style: {
      ...(resize !== undefined && {
        maxWidth: '100%',
        width: 'min-content',
      }),
    },
  },
});

/** Textarea custom DS component */
export function Textarea({
  kind = 'gray',
  isBorderless = false,
  resize,
  'data-testid': dataTestId,
  overrides,
  ...rest
}: TextareaProps): React.ReactElement {
  const mergedOverrides: BaseTextareaProps['overrides'] = useMemo(
    () => mergeOverrides(textareaOverrides({ kind, isBorderless, resize, dataTestId }), overrides),
    [kind, isBorderless, resize, dataTestId, overrides],
  );

  return (
    <BaseTextarea
      {...rest}
      overrides={mergedOverrides}
    />
  );
}
