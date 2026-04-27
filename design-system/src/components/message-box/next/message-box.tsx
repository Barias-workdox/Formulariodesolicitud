import { MessageBoxActions, MessageBoxRoot, TextEditor } from './components';
import { MessageBoxProvider } from './providers';
import { StyledAddonsContainer } from './styled-components';

import type { MessageBoxProps } from './message-box.interfaces';

/**
/**
 * MessageBox component provides a flexible input area for composing messages,
 * supporting both plain text and rich text editing modes. It includes optional
 * addons, customizable action buttons, and extra actions slots.
 */
export const MessageBox = ({
  addons,
  ariaLabel,
  autofocus,
  canSendWithEnter = true,
  disabled = false,
  isReadOnly = false,
  extraActions,
  maxHeight,
  maxLength,
  margin,
  onChange,
  onSecondaryButtonClick,
  onSubmit,
  placeholder,
  plugins = [],
  primaryButtonIcon,
  primaryButtonProps,
  primaryButtonText,
  richTextEnabled,
  richTextOptions,
  secondaryButtonIcon,
  secondaryButtonProps,
  secondaryButtonText,
  defaultValue,
  width,
}: MessageBoxProps): JSX.Element => {
  return (
    <MessageBoxProvider
      ariaLabel={ariaLabel}
      autofocus={autofocus}
      canSendWithEnter={canSendWithEnter}
      disabled={disabled}
      isReadOnly={isReadOnly}
      maxLength={maxLength}
      onChange={onChange}
      onSubmit={onSubmit}
      placeholder={placeholder}
      richTextEnabled={richTextEnabled}
      richTextOptions={richTextOptions}
      defaultValue={defaultValue}
    >
      <MessageBoxRoot
        margin={margin}
        maxHeight={maxHeight}
        plugins={plugins}
        width={width}
      >
        {addons && <StyledAddonsContainer>{addons}</StyledAddonsContainer>}
        <TextEditor
          actions={
            <MessageBoxActions
              extraActions={extraActions}
              onSecondaryButtonClick={onSecondaryButtonClick}
              primaryButtonIcon={primaryButtonIcon}
              primaryButtonProps={primaryButtonProps}
              primaryButtonText={primaryButtonText}
              secondaryButtonIcon={secondaryButtonIcon}
              secondaryButtonProps={secondaryButtonProps}
              secondaryButtonText={secondaryButtonText}
            />
          }
        />
      </MessageBoxRoot>
    </MessageBoxProvider>
  );
};
