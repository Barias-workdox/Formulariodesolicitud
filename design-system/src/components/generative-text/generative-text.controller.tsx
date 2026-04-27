import { useEffect, useState } from 'react';

import { GenerativeText, type GenerativeTextProps } from './generative-text';

import type { GenerativeTextType } from '@interfaces/common.interfaces';

export type GenerativeTextControllerProps = GenerativeTextProps;

interface GenerativeStateType extends GenerativeTextType {
  /** Indicates that the generative text is generating text. When finished, this will be false */
  isLoading: boolean;
  /** New texts will be queued by the parent and will start generating when the previous task is finished */
  queuedTexts?: GenerativeTextType;
}

/**
 * Controller used to avoid UI visual problems. Will control the generative text task,
 * blocking the UI when a generative task is running When the generative texts are updated
 * from parent, will store them in a queue and promote then to text generation when the latest
 * task is finished
 */
export const GenerativeTextController = ({
  generativeText,
  accumulatedText,
  ...rest
}: GenerativeTextControllerProps): JSX.Element => {
  const [state, setState] = useState<GenerativeStateType>({
    accumulatedText,
    generativeText,
    isLoading: false,
  });

  /**
   * Will update the component's state when new generative texts arrive, based on the generative
   * task loading state
   */
  useEffect(() => {
    if (state.isLoading) {
      setState((prev) => ({
        ...prev,
        queuedTexts: {
          accumulatedText,
          generativeText,
        },
      }));
    } else {
      setState((prev) => ({
        ...prev,
        isLoading: true,
        queuedTexts: undefined,
        accumulatedText,
        generativeText,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accumulatedText, generativeText]);

  /** When the current generative text task is finished, will update the component's state */
  const handleGenerativeTextFinish = (): void => {
    setState((prev) => {
      const { queuedTexts } = prev;
      const queuedAccumulatedText = queuedTexts?.accumulatedText;
      const queuedGenerativeText = queuedTexts?.generativeText;

      return {
        ...prev,
        isLoading: false,
        queuedTexts: undefined,
        ...(queuedAccumulatedText && {
          accumulatedText: queuedAccumulatedText,
        }),
        ...(queuedGenerativeText && {
          generativeText: queuedGenerativeText,
        }),
      };
    });
  };

  return (
    <GenerativeText
      {...rest}
      onFinish={handleGenerativeTextFinish}
      accumulatedText={state.accumulatedText}
      generativeText={state.generativeText}
    />
  );
};
