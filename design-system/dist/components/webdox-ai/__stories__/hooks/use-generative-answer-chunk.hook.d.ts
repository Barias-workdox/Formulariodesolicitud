import { MutableRefObject } from 'react';
import { GenerativeAnswerChunkType } from '../../interfaces';
type UseGenerativeAnswerChunkParamsType = {
    chunksRef: MutableRefObject<GenerativeAnswerChunkType[]>;
    isGenerating: boolean;
    /** @defaultValue `false` */
    isPageRefEnabled?: boolean;
    onFinish(): void;
};
/** Reusable hook for stories, used to fill the chunk ref with fake data */
export declare const useGenerativeAnswerChunk: ({ chunksRef, isGenerating, isPageRefEnabled, onFinish, }: UseGenerativeAnswerChunkParamsType) => void;
export {};
