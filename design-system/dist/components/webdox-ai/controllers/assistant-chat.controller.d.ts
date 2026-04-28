import { ReactElement } from 'react';
import { AssistantTypeProps } from '..';
export type AssistantChatControllerProps = Pick<AssistantTypeProps, 'conversation' | 'conversationDispatch' | 'data-testid' | 'conversationDisabled' | 'isFeedbackLoading' | 'isFeedbackSuccess' | 'isPreparingDocument' | 'isPreparingConversation' | 'isConversationEmpty' | 'onCopyToClipboardButtonClick' | 'selectedTab' | 'onCreateMessage' | 'onFeedbackButtonClick' | 'onSettingsClick' | 'onSubmitFeedback' | 'onSuggestionsClick' | 'onTempAnswerSubmit' | 'prompts' | 'showFeedback' | 'showSettings' | 'showSuggestions' | 'suggestions' | 'zIndex' | 'contractKind' | 'isSuggestionsLoading' | 'isGeneratingAnswer' | 'onStopAnswerGeneration' | 'isQuestionWritingAllowed' | 'customPrompts' | 'onExecuteCustomPromptAction' | 'selectedAnswerReference' | 'activeAnswerId' | 'updateAnswerReference' | 'updateActiveMessage'>;
/**
 * The assistant chat section view of the assistant controller.
 * Will render the chat messages conversation with some repetitive
 * placeholder tasks handled by the controller
 */
export declare const AssistantChatController: (props: AssistantChatControllerProps) => ReactElement;
