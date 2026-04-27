import type { SyntheticEvent } from 'react';

import { CheckmarkFilled, CloseFilled } from '@carbon/icons-react';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { IconButton } from '../../../button';
import { Input as InputDS } from '../../../input';
import { useCss } from '../../../utils/hooks/use-css';
import { DEFAULT_ICON_SIZE } from '../../inline-edit-input.constants';

import type { DesignSystemTheme } from '../../../../themes';
import type { InputProps } from '../../../input';
import type { InlineEditInputProps } from '../../inline-edit-input';
import type { IconButtonProps } from '@components/button/variants/icon-button/icon-button.interfaces';
import type {
  IconSize,
  InlineEditInputColors,
} from '@components/inline-edit-input/inline-edit-input.interfaces';
import type { OverrideObject } from '@themes/theme.interfaces';
import type { InputOverrides } from 'baseui/input';
import type { StyleObject } from 'styletron-react';

interface EditInputOverrides {
  Input?: OverrideObject<InputProps>;
  SubmitIconButton?: OverrideObject<IconButtonProps>;
  CancelIconButton?: OverrideObject<IconButtonProps>;
}

export interface EditInputProps extends Pick<
  InlineEditInputProps,
  'inputText' | 'onChange' | 'onSubmit'
> {
  disabled: Required<InlineEditInputProps['disabled']>;
  'data-testid': string;
  colors?: Pick<InlineEditInputColors, 'cancelIcon' | 'checkIcon'>;
  iconSize?: IconSize;
  isInvalidValue: boolean;
  overrides?: EditInputOverrides;
  onKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void;
  onCancelClick(a: SyntheticEvent<HTMLButtonElement, Event>): void;
}

/** Text input component overrides */
export const inputOverridesStyles = (theme: DesignSystemTheme): InputOverrides => ({
  Root: {
    style: (): StyleObject => ({
      border: 0,
      background: theme.colors.bgBase,
      borderBottom: '.5px dashed black',
      marginRight: theme.spacing.spacingXs,
    }),
  },
});

/**
 * Input editable component that will save changes on submit
 */
export const EditInput = ({
  'data-testid': dataTestId,
  inputText,
  disabled,
  colors = {},
  iconSize = DEFAULT_ICON_SIZE,
  isInvalidValue,
  overrides = {},
  onChange,
  onKeyDown,
  onSubmit,
  onCancelClick,
}: EditInputProps): JSX.Element => {
  const { theme } = useCss({});

  const {
    Input: InputOverride,
    SubmitIconButton: SubmitIconButtonOverride,
    CancelIconButton: CancelIconButtonOverride,
  } = overrides;

  const Input = getOverride(InputOverride) || InputDS;
  const SubmitIconButton = getOverride(SubmitIconButtonOverride) || IconButton;
  const CancelIconButton = getOverride(CancelIconButtonOverride) || IconButton;

  const { cancelIcon: cancelIconColor, checkIcon: checkIconColor } = colors;

  const validIconButtonCheckColor = (checkIconColor as string) ?? theme.colors.nature;

  /**
   * Determines the color for the checkmark icon button
   */
  const iconButtonCheckColor = isInvalidValue
    ? theme.colors.neutralDepressed
    : validIconButtonCheckColor;

  return (
    <>
      <Input
        data-testid={`${dataTestId}-input`}
        size="compact"
        kind="white"
        autoFocus
        value={inputText}
        maxLength={255}
        onChange={(event): void => onChange(event.currentTarget.value)}
        onKeyDown={onKeyDown}
        overrides={mergeOverridesDeep(inputOverridesStyles(theme), overrides)}
        {...getOverrideProps(InputOverride)}
      />
      {!disabled ? (
        <>
          <SubmitIconButton
            data-testid={`${dataTestId}-submit-button`}
            size="auto"
            disabled={isInvalidValue}
            kind="link-tertiary"
            shape="circle"
            onClick={onSubmit}
            {...getOverrideProps(SubmitIconButtonOverride)}
          >
            <CheckmarkFilled
              size={iconSize}
              fill={iconButtonCheckColor}
            />
          </SubmitIconButton>
          <CancelIconButton
            data-testid={`${dataTestId}-cancel-button`}
            size="auto"
            kind="link-tertiary"
            shape="circle"
            onClick={onCancelClick}
            {...getOverrideProps(CancelIconButtonOverride)}
          >
            <CloseFilled
              size={iconSize}
              fill={(cancelIconColor as string) ?? theme.colors.neutralSubdued}
            />
          </CancelIconButton>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
