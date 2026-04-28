import { AnswerReference } from '../interfaces';
export interface UseMessagesProps {
    value: string;
    answerReferences?: AnswerReference[];
}
export interface UseMessagesReturn {
    /**
     * processed value to render in the chat content
     */
    replacedValue: string;
    /**
     * this reference map will help to get faster the page number with the reference text
     *
     * @example
     * ```
     * {
     *   "page 1": 1,
     *   "page 4": 4,
     *   ...
     * }
     * ```
     */
    referenceMap: {
        [x: string]: number;
    };
}
/**
 * Hook to manage messages formatting
 */
export declare const useMessages: ({ value, answerReferences }: UseMessagesProps) => UseMessagesReturn;
