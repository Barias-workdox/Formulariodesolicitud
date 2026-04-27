import { useEffect } from 'react';
import type { MutableRefObject } from 'react';

import { chatStoriesUtils } from '../utils';

import type { GenerativeAnswerChunkType } from '@components/webdox-ai/interfaces';

type UseGenerativeAnswerChunkParamsType = {
  chunksRef: MutableRefObject<GenerativeAnswerChunkType[]>;
  isGenerating: boolean;
  /** @defaultValue `false` */
  isPageRefEnabled?: boolean;
  onFinish(): void;
};

/** Reusable hook for stories, used to fill the chunk ref with fake data */
export const useGenerativeAnswerChunk = ({
  chunksRef,
  isGenerating,
  isPageRefEnabled = false,
  onFinish,
}: UseGenerativeAnswerChunkParamsType): void => {
  /** Used to mimic the chunks ref generation */
  useEffect(() => {
    let interval;

    if (isGenerating) {
      const textToGenerate = chatStoriesUtils.getFakeAnswerMarkdown(isPageRefEnabled).split('');
      const textToGenerateLen = textToGenerate.length;

      interval = setInterval(() => {
        const val = textToGenerate.shift();

        chunksRef.current = [
          ...chunksRef.current,
          {
            text: val ?? '',
            position: textToGenerateLen - textToGenerate.length,
          },
        ];

        if (textToGenerate.length === 0) {
          clearInterval(interval);
          onFinish();
        }
      }, 10);
    }

    return (): void => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isGenerating, onFinish, chunksRef, isPageRefEnabled]);
};
