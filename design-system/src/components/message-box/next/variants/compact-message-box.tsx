import { CompactMessageBoxActions, MessageBoxRoot, TextEditor } from '../components';
import { MessageBoxProvider } from '../providers';
import { StyledAddonsContainer } from '../styled-components';

import type { CompactMessageBoxProps } from '../message-box.interfaces';

/**
 * MessageBox component provides a flexible input area for composing messages,
 * supporting both plain text and rich text editing modes. It includes optional
 * addons, customizable action buttons, and extra actions slots.
 */
export const CompactMessageBox = ({
  addons,
  disabled = false,
  maxHeight,
  onChange,
  onSecondaryButtonClick,
  onSubmit,
  placeholder,
  primaryButtonProps,
  primaryButtonText,
  secondaryButtonProps,
  secondaryButtonText,
  defaultValue,
}: CompactMessageBoxProps): JSX.Element => {
  return (
    <MessageBoxProvider
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onSubmit={onSubmit}
    >
      <MessageBoxRoot maxHeight={maxHeight}>
        {addons && <StyledAddonsContainer>{addons}</StyledAddonsContainer>}
        <TextEditor
          variant="compact"
          actions={
            <CompactMessageBoxActions
              onSecondaryButtonClick={onSecondaryButtonClick}
              primaryButtonProps={primaryButtonProps}
              primaryButtonText={primaryButtonText}
              secondaryButtonProps={secondaryButtonProps}
              secondaryButtonText={secondaryButtonText}
            />
          }
        />
      </MessageBoxRoot>
    </MessageBoxProvider>
  );
};
