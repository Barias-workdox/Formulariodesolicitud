import type { MessageLayoutKindType } from '../interfaces';
import type { StyledChatBotGenerativeTextProps } from '../interfaces/chat-bot-component.interface';

export const GENERATIVE_ANSWER_TIMER_MILLISECONDS_THRESHOLD = 750;

export const GENERATIVE_ANSWER_WORD_PROPS: Pick<
  StyledChatBotGenerativeTextProps,
  'delay' | 'splitChar' | 'joinChar'
> = {
  delay: 20,
  splitChar: '',
  joinChar: '',
};

export const DEFAULT_CHAT_BOT_CHUNK_STATE = {
  accumulatedText: '',
  generativeText: '',
  latestPosition: 0,
};

export const GENERATIVE_TEXT_VARIANT = 'bodySmall';

export const ALL_MESSAGE_LAYOUT_KINDS = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
} as const satisfies Record<string, MessageLayoutKindType>;
