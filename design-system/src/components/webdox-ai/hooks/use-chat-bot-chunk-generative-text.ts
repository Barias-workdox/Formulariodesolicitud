import { useEffect, useState } from 'react';

import {
  DEFAULT_CHAT_BOT_CHUNK_STATE,
  GENERATIVE_ANSWER_TIMER_MILLISECONDS_THRESHOLD,
} from '../constants';

import type { GenerativeAnswerType, GenerativeTextValueType } from '../interfaces';

type ChatBotChunkAnswerHookParamsType = Pick<GenerativeAnswerType, 'chunks' | 'isGenerating'>;

type ChatBotChunkAnswerHookReturnType = GenerativeTextValueType;

/**
 * Loop the chunks reference with an interval threshold and return the current joined chunk's
 * values, sorted asc. This technique is required to avoid performance issues because the
 * chunks can update too quickly
 */
export const useChatBotChunkGenerativeText = ({
  chunks,
  isGenerating,
}: ChatBotChunkAnswerHookParamsType): ChatBotChunkAnswerHookReturnType => {
  const [state, setState] = useState<GenerativeTextValueType>(DEFAULT_CHAT_BOT_CHUNK_STATE);

  /**
   * When the chat bot api is generating the text with chunks, this effect will run
   * and loop the chunk reference with an interval to avoid performance issues, returning
   * the current sorted joined value of all chunks
   */
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isGenerating) {
      interval = setInterval(() => {
        const updatedChunks = [...chunks.current];

        updatedChunks.sort((p, n) => p.position - n.position);
        const latestPosition = updatedChunks.at(-1)?.position ?? 1;

        setState((prev) => ({
          latestPosition,
          accumulatedText: `${prev.accumulatedText}${prev.generativeText}`,
          generativeText: updatedChunks
            .filter((chunk) => chunk.position > prev.latestPosition)
            .reduce((acc, curr) => `${acc}${curr.text}`, ''),
        }));
      }, GENERATIVE_ANSWER_TIMER_MILLISECONDS_THRESHOLD);
    }

    return (): void => {
      setState(DEFAULT_CHAT_BOT_CHUNK_STATE);

      if (interval) {
        clearInterval(interval);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGenerating]);

  return {
    ...state,
  };
};
