import { ChatBotChatMessageType } from '../../../../../../..';
import { WithTestId } from '../../../../../../../../../interfaces/common.interfaces';
export type AnswerHeaderProps = WithTestId<Pick<ChatBotChatMessageType, 'createdAt' | 'suiteAIOption'>>;
/**
 * Renders the answer header with the tag and the date
 */
export declare const AnswerHeader: ({ dataTestId, createdAt, suiteAIOption, }: AnswerHeaderProps) => JSX.Element;
