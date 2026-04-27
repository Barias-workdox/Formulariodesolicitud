import type { ReactNode } from 'react';

import { useMessageBoxContext } from '../../hooks';
import { StyledMessageBoxContainer, StyledTextareaContainer } from '../../styled-components';

import type { MessageBoxVariant } from '../../message-box.interfaces';

export interface TextEditorProps {
  actions: ReactNode;
  variant?: MessageBoxVariant;
}

/**
 * Component that manages the text editor states such as hover and focus,
 * renders the actions, and displays the editorContentNode, which enables rich text editing.
 */
export const TextEditor = ({ actions, variant = 'default' }: TextEditorProps): JSX.Element => {
  const { disabled, editorContentNode, isFocused, isHovered, setIsFocused, setIsHovered } =
    useMessageBoxContext();

  /**
   * Handles the click event on the root element.
   * It sets the focused state to true and focuses the textarea.
   */
  const handleClick = (): void => {
    if (disabled) return;

    setIsFocused(true);
  };

  return (
    <StyledMessageBoxContainer
      $isFocused={isFocused}
      $isHovered={isHovered}
      $disabled={disabled}
      $variant={variant}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledTextareaContainer $variant={variant}>{editorContentNode}</StyledTextareaContainer>
      {actions}
    </StyledMessageBoxContainer>
  );
};
