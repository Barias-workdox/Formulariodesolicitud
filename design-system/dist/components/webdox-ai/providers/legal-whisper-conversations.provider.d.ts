import { PropsWithChildren } from 'react';
import { LegalWhisperConversationListItemType } from '../interfaces/legal-whisper.interfaces';
import { WithZIndex } from '../../../interfaces/common.interfaces';
type OnEditConversationParams = {
    conversation: LegalWhisperConversationListItemType;
    newValues: Pick<LegalWhisperConversationListItemType, 'title'>;
};
export type LegalWhisperConversationsProviderProps = WithZIndex<PropsWithChildren<{
    conversations: LegalWhisperConversationListItemType[];
    isLoadingMoreConversations?: boolean;
    selectedConversation?: LegalWhisperConversationListItemType;
    searchValue?: string;
    onSelectConversation(conversation: LegalWhisperConversationListItemType): void;
    onCreateConversation(): void;
    onEditConversation(params: OnEditConversationParams): Promise<void>;
    onDeleteConversation(conversation: LegalWhisperConversationListItemType): Promise<void>;
    onSearch(query: string): void;
    onLoadMoreConversations(): void;
}>>;
/**
 * Provider for the component props PlanUsageCounter to handle plan status
 * across the AssistantController component
 */
export declare const LegalWhisperConversationsProvider: ({ children, conversations, isLoadingMoreConversations, onCreateConversation, onDeleteConversation, onEditConversation, onLoadMoreConversations, onSearch, onSelectConversation, searchValue, selectedConversation, zIndex, }: LegalWhisperConversationsProviderProps) => JSX.Element;
export {};
