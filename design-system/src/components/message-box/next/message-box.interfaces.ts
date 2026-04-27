import type { ReactNode } from 'react';

import type { MessageBoxPluginNames, MessageBoxRichTextOptions } from './message-box.constants';
import type { ButtonProps } from '@components/button';
import type { StyleObject } from 'styletron-react';

export type MessageBoxVariant = 'compact' | 'default';

export type MessageBoxValue = {
  textValue: string;
  HTMLValue: string;
};

export interface SharedProps {
  /** The variant of the message box. */
  $variant?: MessageBoxVariant;
  /** Whether the message box is hovered. */
  $isHovered?: boolean;
  /** Whether the message box is focused. */
  $isFocused?: boolean;
  /** Whether the message box is disabled. */
  $disabled?: boolean;
  /** The margin of the message box. */
  $margin?: StyleObject['margin'];
  /** The maximum height of the message box. */
  $maxHeight?: StyleObject['maxHeight'];
  /** The width of the message box. */
  $width?: StyleObject['width'];
}

export interface MessageBoxActionsProps {
  /** Extra actions to render in the message box. */
  extraActions?: React.ReactNode;
  /** Icon for the primary button. */
  primaryButtonIcon?: ReactNode;
  /** Text for the primary button. */
  primaryButtonText: string;
  /** Icon for the secondary button. */
  secondaryButtonIcon?: ReactNode;
  /** Text for the secondary button. If not provided, the secondary button will not be rendered. */
  secondaryButtonText?: string;
  /** Props for the primary button. */
  primaryButtonProps?: Omit<ButtonProps, 'onClick' | 'startEnhancer' | 'endEnhancer'>;
  /** Props for the secondary button. */
  secondaryButtonProps?: Omit<ButtonProps, 'onClick' | 'startEnhancer' | 'endEnhancer'>;
  /** Callback function to be called when the secondary button is clicked. */
  onSecondaryButtonClick?(): void;
}

export interface MessageBoxPlugin {
  name: MessageBoxPluginNames | string;
  /**
   * Responsible for rendering elements such as dropdowns or menus associated with the plugin.
   * This function should not modify the MessageBox component itself, but is intended for displaying
   * additional UI elements in response to the current text input.
   */
  render?({ textValue }: { textValue?: string }): ReactNode;
}

export interface MessageBoxProps extends MessageBoxActionsProps {
  /** Addons to render in the message box. */
  addons?: React.ReactNode;
  ariaLabel?: string;
  /** Whether the message box should be auto focused. */
  autofocus?: boolean;
  /** Whether the message box can send with enter. */
  canSendWithEnter?: boolean;
  /** Whether the message box is disabled. */
  disabled?: boolean;
  /** Whether the message box is read only. */
  isReadOnly?: boolean;
  maxHeight?: StyleObject['maxHeight'];
  width?: StyleObject['width'];
  /** The maximum length of the message box. */
  maxLength?: number;
  /** The margin of the message box. */
  margin?: StyleObject['margin'];
  /** The placeholder of the message box. */
  placeholder?: string;
  /** Whether the rich text editor is enabled. */
  richTextEnabled?: boolean;
  /** Options for the rich text editor. */
  richTextOptions?: MessageBoxRichTextOptions[];
  /**
   * Plugins intended to provide additional behaviors by analyzing the text input in the message box.
   * For example, plugins can enable quick actions (e.g., commands triggered by "/"), mentions, and other
   * text-driven features. Plugins extend the component's capabilities by reacting to and augmenting
   * the user's input.
   */
  plugins?: MessageBoxPlugin[];
  /**
   * The default value of the message box.
   *
   * NOTE: This prop should NOT be used for managing the state of the MessageBox,
   * as its value is controlled internally. Use this only to set the initial value
   * of the component.
   */
  defaultValue?: string;
  /** Callback function to be called when the value changes. */
  onChange?(value: MessageBoxValue): void;
  /** Callback function to be called when the form is submitted. */
  onSubmit?(value: MessageBoxValue): void;
}

export type CompactMessageBoxProps = Omit<
  MessageBoxProps,
  'richTextEnabled' | 'richTextOptions' | 'extraActions' | 'plugins'
>;

export interface MessageBoxContextType {
  /** Whether the message box is disabled. */
  disabled: boolean;
  /**
   * The node to be used as the content editable area within the message box.
   * This node serves as the main input area for user messages and supports both plain text and rich text editing.
   * When rich text is enabled, this node should be managed by a rich text editor (e.g., TipTap) and handle all related logic,
   * including formatting, content state, and editor commands.
   */
  editorContentNode: React.ReactNode;
  /** The HTML value of the message box. */
  HTMLValue?: string;
  /** Whether the message box is empty. */
  isEmpty: boolean;
  /** Whether the message box is focused. */
  isFocused: boolean;
  /** Whether the message box is hovered. */
  isHovered: boolean;
  /** The text value of the message box. */
  textValue?: string;
  /** Handles the submit event of the message box. */
  handleSubmit(): void;
  /** Sets the focused state. */
  setIsFocused(isFocused: boolean): void;
  /** Sets the hovered state. */
  setIsHovered(isHovered: boolean): void;
}
