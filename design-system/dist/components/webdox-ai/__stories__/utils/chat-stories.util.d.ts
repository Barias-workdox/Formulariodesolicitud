import { TempAnswerProps } from '../../interfaces/chat-bot-component.interface';
import { Quote } from '../../interfaces/legal-whisper.interfaces';
import { CustomPrompt } from '../../interfaces/webdox-ai.interfaces';
/** All utilities to reuse on chat stories */
export declare class ChatStoriesUtils {
    timeout: number;
    private markdownString;
    private markdownStringWithRef;
    /** Get fake data for a message */
    getAnswerData(onSubmit?: TempAnswerProps['onSubmit']): TempAnswerProps;
    /** Get a fake lorem with a supplied quantity of paragraph lines */
    getFakeLorem(qty?: number): string;
    /** Get a fake lorem with the common body of an answer */
    getFakeAnswer(qty?: number, isRefEnabled?: boolean): string;
    /** Get an answer string as a markdown text */
    getFakeAnswerMarkdown(isRefEnabled?: boolean): string;
    /** Retrieves a fake legal quotes. */
    getFakeLegalQuotes(): Quote[];
    /** Retrieves a fake jurisprudential quotes. */
    getFakeJurisprudentialQuotes(): Quote[];
    /** Retrieves a fake administrative quotes. */
    getFakeAdministrativeQuotes(): Quote[];
    /** Retrieves fake custom prompts . */
    getFakeCustomPrompts(): CustomPrompt[];
}
export declare const chatStoriesUtils: ChatStoriesUtils;
