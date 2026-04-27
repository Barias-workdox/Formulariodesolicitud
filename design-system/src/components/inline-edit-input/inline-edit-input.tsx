import type { SyntheticEvent } from 'react';

import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { CaptionInput } from './components/caption-input/caption-input';
import { EditInput as EditInputComponent } from './components/edit-input/edit-input';
import { DEFAULT_ICON_SIZE } from './inline-edit-input.constants';
import { StyledContainer } from './inline-edit-input.styles';

import type { CaptionInputProps } from './components/caption-input/caption-input';
import type { EditInputProps } from './components/edit-input/edit-input';
import type { IconSize, InlineEditInputColors } from './inline-edit-input.interfaces';
import type { ZIndexType } from '@interfaces/common.interfaces';
import type { OverrideObject } from '@themes/theme.interfaces';

export type InlineEditInputMode = 'caption' | 'input';

export interface InlineEditInputOverrides {
  Root?: OverrideObject<object>;
  Caption?: OverrideObject<CaptionInputProps>;
  EditInput?: OverrideObject<EditInputProps>;
}

export interface InlineEditInputProps {
  /** Optional data-testid attribute for testing purposes. */
  'data-testid'?: string;
  /** The text to display as the caption. */
  captionText: string;
  /** Optional size of the icon. */
  iconSize?: IconSize;
  /** Optional object containing the colors for the icons. */
  colors?: InlineEditInputColors;
  /** The current text of the input. */
  inputText: string;
  /** The current mode of the component, either 'caption' or 'input'. */
  mode: InlineEditInputMode;
  /** Optional loading state of the component. */
  isLoading?: boolean;
  /** Optional disabled state of the component. */
  disabled?: boolean;
  /**
   * @deprecated - used by legacy views only.
   * Optional zIndex value for the component.
   */
  zIndex?: ZIndexType;
  /** Optional overrides for the component. */
  overrides?: InlineEditInputOverrides;
  /**
   * Function to call when the input value changes.
   *
   * @param newValue - The new value of the input.
   */
  onChange(newValue: string): void;
  /** Function to call when the input is submitted. */
  onSubmit(): void;
  /** Function to call to toggle between caption and input mode. */
  onToggle(): void;
}

/**
 * A Styled Stateful component for title name. It should:
 *   - show a caption with an icon. On hover will display a tooltip with the complete name and trim it to ui length.
 *   - on click, should change to an input editable that will save changes on submit icon press or ENTER keydown.
 *   - on ESC keydown or blur, it should change to caption and cancel every changes
 */
export const InlineEditInput = ({
  'data-testid': dataTestId = 'inline-edit-input',
  colors = {},
  inputText,
  captionText,
  mode,
  iconSize = DEFAULT_ICON_SIZE,
  isLoading = false,
  disabled = false,
  zIndex,
  overrides = {},
  onChange,
  onSubmit,
  onToggle,
}: InlineEditInputProps): JSX.Element => {
  const { Caption: CaptionOverride, EditInput: EditInputOverride, Root: RootOverride } = overrides;

  const Root = getOverride(RootOverride) || StyledContainer;
  const Caption = getOverride(CaptionOverride) || CaptionInput;
  const EditInput = getOverride(EditInputOverride) || EditInputComponent;
  const { cancelIcon, checkIcon, editIcon } = colors;

  /**
   * Checks if the input value is invalid
   */
  const isInvalidValue = inputText.length <= 0 || inputText.trim() === captionText;

  /**
   * Handles cancel the edit action.
   */
  const handleCancelEdit = (
    event: SyntheticEvent<HTMLButtonElement, Event> | React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    // This allows to set the previous value in the input
    onChange(captionText);
    onToggle();
  };

  /**
   * Handles the keydown event.
   */
  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    switch (event.key) {
      case 'Escape':
        handleCancelEdit(event);
        break;
      case 'Enter':
        event.preventDefault();
        onSubmit();
        break;
      default:
        break;
    }
  };

  /** Handle the caption click in the name section */
  const handleCaptionClick = (): void => {
    if (!disabled) {
      onToggle();
    }
  };

  return (
    <Root {...getOverrideProps(RootOverride)}>
      {(isLoading || mode === 'caption') && (
        <Caption
          zIndex={zIndex}
          data-testid={`${dataTestId}--input-caption`}
          colors={{
            editIcon,
          }}
          iconSize={iconSize}
          isLoading={isLoading}
          captionText={captionText}
          disabled={disabled}
          onCaptionClick={handleCaptionClick}
          onToggle={onToggle}
          {...getOverrideProps(CaptionOverride)}
        />
      )}
      {!isLoading && mode === 'input' && (
        <EditInput
          colors={{
            cancelIcon,
            checkIcon,
          }}
          iconSize={iconSize}
          data-testid={`${dataTestId}--input-edit`}
          inputText={inputText}
          disabled={disabled}
          onChange={onChange}
          onKeyDown={handleOnKeyDown}
          onSubmit={onSubmit}
          onCancelClick={handleCancelEdit}
          isInvalidValue={isInvalidValue}
          {...getOverrideProps(EditInputOverride)}
        />
      )}
    </Root>
  );
};
