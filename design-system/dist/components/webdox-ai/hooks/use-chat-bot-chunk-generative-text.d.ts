import { GenerativeAnswerType, GenerativeTextValueType } from '../interfaces';
type ChatBotChunkAnswerHookParamsType = Pick<GenerativeAnswerType, 'chunks' | 'isGenerating'>;
type ChatBotChunkAnswerHookReturnType = GenerativeTextValueType;
/**
 * Loop the chunks reference with an interval threshold and return the current joined chunk's
 * values, sorted asc. This technique is required to avoid performance issues because the
 * chunks can update too quickly
 */
export declare const useChatBotChunkGenerativeText: ({ chunks, isGenerating, }: ChatBotChunkAnswerHookParamsType) => ChatBotChunkAnswerHookReturnType;
export {};
