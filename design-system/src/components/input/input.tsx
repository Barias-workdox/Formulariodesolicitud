import { useMemo } from 'react';
import type { ReactElement } from 'react';

import { Checkmark, Close } from '@carbon/icons-react';
import { mergeOverrides } from 'baseui';
import {
  StyledInput as BStyledInput,
  StyledRoot as BStyledRoot,
  Input as BaseWebInput,
} from 'baseui/input';

import { DEFAULT_FONT } from '@tokens';

import { themedUseStyletron, themedWithStyle } from '../../themes';
import { ClearButton } from '../notification/components';

import { getBottomBorderColor, getInputBaseOverrides } from './input.styles';

import type { InputStyleParams } from './input.styles';
import type { DesignSystemTheme } from '../../themes';
import type { CommonInputKind } from '@interfaces/common.interfaces';
import type { InputProps as BaseInputProps, InputOverrides } from 'baseui/input';
import type { StyleObject } from 'styletron-standard';

export type InputKind = CommonInputKind;

export type InputProps = BaseInputProps & {
  'data-testid'?: string;
  kind?: InputKind;
  isBorderless?: boolean;
};

interface InputKindProps {
  $theme: DesignSystemTheme;
  $kind: InputKind;
  $isBorderless?: boolean;
  $readOnly?: boolean;
  $isFocused?: boolean;
}

interface PositiveOrNegativeInputIconProps {
  positive: boolean;
  error: boolean;
}

/**
 * Get the background color for the Root component
 */
export const getKindBackgroundColor = (
  kind: InputKind,
  theme: DesignSystemTheme,
  $isFocused?: boolean,
): string => (kind === 'white' || $isFocused ? theme.colors.bgBase : theme.colors.neutralBase);

/**
 * Styles for the Root overrides
 */
export const getRootStyles = ({
  $isFocused,
  $error,
  $positive,
  $disabled,
  $theme,
  $kind,
  $isBorderless = false,
  $adjoined,
}: InputStyleParams): StyleObject => {
  return {
    paddingRight: $adjoined === 'right' ? '10px' : undefined,
    borderWidth: '1px',
    borderRadius: '4px',
    backgroundColor: getKindBackgroundColor($kind, $theme, $isFocused),
    outline: 'none',
    position: 'relative',
    borderColor: getBottomBorderColor({
      $isFocused,
      $error,
      $positive,
      $disabled,
      $theme,
      $isBorderless,
    }),
  };
};

/**
 * Get the styles for the input component overrides
 */
export const getInputStyle = ({
  $theme,
  $kind,
  $isBorderless,
  $readOnly = false,
  $isFocused,
}: InputKindProps): StyleObject => ({
  fontSize: $isBorderless
    ? $theme.typography.ParagraphMedium.fontSize
    : $theme.typography.ParagraphSmall.fontSize,
  color: $theme.colors.neutralStrong,
  backgroundColor: getKindBackgroundColor($kind, $theme, $isFocused),
  padding: '10px',
  ...DEFAULT_FONT,
  ':disabled': {
    backgroundColor: 'transparent',
    color: $readOnly ? $theme.colors.neutralWashed : $theme.colors.neutralDepressed,
  },
  ':-webkit-autofill': {
    boxShadow: `inset 0 0 0px 1000px ${getKindBackgroundColor($kind, $theme)}`,
  },
});

/**
 * Input override component styled with the theme based on the kind of the input
 */
export const StyledInput = themedWithStyle<typeof BStyledInput, InputKindProps>(
  BStyledInput,
  ({ $kind, $theme, $isBorderless, $isFocused }) =>
    getInputStyle({ $theme, $kind, $isBorderless, $isFocused }),
);

/**
 * Root override component styled with the theme based on the kind of the input
 */
export const StyledRoot = themedWithStyle(
  BStyledRoot,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Don't know how to set these types
  ({ $isFocused, $error, $positive, $kind, $disabled, $theme }) => {
    return getRootStyles({ $isFocused, $error, $positive, $kind, $disabled, $theme });
  },
);

/**
 * Icon used for the input validations.
 */
function PositiveOrNegativeInputIcon({
  positive,
  error,
}: PositiveOrNegativeInputIconProps): ReactElement {
  const [, theme] = themedUseStyletron();

  if (error) {
    return (
      <Close
        size={20}
        color={theme.colors.negative}
      />
    );
  }

  if (positive) {
    return (
      <Checkmark
        size={20}
        color={theme.colors.positive}
      />
    );
  }

  return null;
}

/**
 * Input field component for forms.
 * Can be customized by the "kind" property. Possible kinds are "white" and "gray", "gray" is the default value.
 * Also, can be used with no borders by setting the prop `isBorderless`.
 * Its styled components; StyledRoot and StyledInput are used to construct other components as "Select", "Textarea" and "DatePicker".
 */
export const Input = ({
  'data-testid': dataTestId = 'input',
  kind = 'gray',
  id,
  name,
  endEnhancer,
  positive,
  error,
  type,
  overrides,
  isBorderless,
  onClear,
  ...rest
}: InputProps): ReactElement => {
  const mergedOverrides = useMemo(
    () =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - badly typed library
      mergeOverrides<InputOverrides>(
        {
          ClearIcon: {
            component: (props) => (
              <ClearButton
                {...props}
                onClick={onClear}
                data-testid={`${dataTestId}__clear-button`}
              />
            ),
          },
          ...getInputBaseOverrides(type, kind, isBorderless, dataTestId),
        },
        overrides as InputOverrides,
      ),
    [overrides, type, kind, isBorderless, dataTestId, onClear],
  );

  return (
    <BaseWebInput
      {...rest}
      type={type}
      positive={positive}
      error={error}
      id={id}
      name={name || id}
      endEnhancer={
        endEnhancer ||
        ((positive || error) && (
          <PositiveOrNegativeInputIcon
            positive={positive}
            error={error}
          />
        ))
      }
      overrides={mergedOverrides}
    />
  );
};
