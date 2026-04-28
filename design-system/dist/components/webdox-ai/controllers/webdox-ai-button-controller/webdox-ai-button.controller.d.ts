import { WebdoxAIButtonControllerOverrides } from './webdox-ai-button-controller.interfaces';
import { WebdoxAIButtonInformationPopoverProps } from '../../components';
import { ChatBotUser, WebdoxAIErrorType } from '../../interfaces';
export interface WebdoxAIButtonControllerProps {
    'data-testid': string;
    user: Pick<ChatBotUser, 'firstName'>;
    isLoading: boolean;
    hasError: boolean;
    errorType?: WebdoxAIErrorType;
    overrides?: WebdoxAIButtonControllerOverrides;
    /**
     * This is for scenarios where the user cannot write a question
     * and the chat shortcut popover needs to be hidden.
     */
    isQuestionWritingAllowed?: boolean;
    popoverProps?: Pick<WebdoxAIButtonInformationPopoverProps, 'isOpen' | 'onClose' | 'onOpen' | 'onSendClick' | 'sendTextValue' | 'isDisabled'>;
    onClick(): void;
}
/**
 * Component for controlling the behavior of the WebdoxAIButton based on loading and error states.
 */
export declare const WebdoxAIButtonController: ({ "data-testid": dataTestId, user, isLoading, hasError, errorType, overrides, popoverProps, isQuestionWritingAllowed, onClick, }: WebdoxAIButtonControllerProps) => JSX.Element;
