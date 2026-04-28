import { StyledChatBotGenerativeTextProps } from '../interfaces/chat-bot-component.interface';
export declare const GENERATIVE_ANSWER_TIMER_MILLISECONDS_THRESHOLD = 750;
export declare const GENERATIVE_ANSWER_WORD_PROPS: Pick<StyledChatBotGenerativeTextProps, 'delay' | 'splitChar' | 'joinChar'>;
export declare const DEFAULT_CHAT_BOT_CHUNK_STATE: {
    accumulatedText: string;
    generativeText: string;
    latestPosition: number;
};
export declare const GENERATIVE_TEXT_VARIANT = "bodySmall";
export declare const ALL_MESSAGE_LAYOUT_KINDS: {
    readonly default: "default";
    readonly primary: "primary";
    readonly secondary: "secondary";
};
