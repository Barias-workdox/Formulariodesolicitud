import { ReactElement } from 'react';
import { WithTestId, WithZIndex } from '../../../../../../../interfaces/common.interfaces';
type ConversationSelectorWithPopoverContainerProps = WithZIndex & WithTestId;
/**
 * Container for the ConversationSelectorWithPopover component that uses
 * the useLegalWhisperConversationsContext hook to get all the necessary values.
 * It passes these values to the ConversationSelectorWithPopover component.
 */
export declare const ConversationSelectorWithPopoverContainer: ({ dataTestId, zIndex, }: ConversationSelectorWithPopoverContainerProps) => ReactElement;
export {};
