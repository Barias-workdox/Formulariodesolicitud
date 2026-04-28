import { ReactElement } from 'react';
import { WithTestId, WithZIndex } from '../../../../../../interfaces/common.interfaces';
type ConversationSelectorContainerProps = WithZIndex & WithTestId;
/**
 * Container for the ConversationSelector component that uses
 * the useLegalWhisperConversationsContext hook to get all the necessary values.
 * It passes these values to the ConversationSelector component.
 */
export declare const ConversationSelectorContainer: ({ dataTestId, zIndex, }: ConversationSelectorContainerProps) => ReactElement;
export {};
