import { useEffect, useMemo, useState } from 'react';

import { Markdown } from '@components/markdown';
import { Text } from '@components/text';

import { getPartialText } from './generative-text.util';

import type { MarkdownProps } from '../markdown';
import type { TextProps } from '@components/text';

export interface GenerativeTextProps extends Omit<TextProps, 'children'> {
  /** Text that will be generated over time with the delay property */
  generativeText: string;
  /** milliseconds that will wait to render the next word */
  delay: number;
  /** If supplied, will be rendered before the generative text */
  accumulatedText?: string;
  /** Loop after the process is finished */
  infinite?: boolean;
  /** @defaultValue ` ` */
  splitChar?: string;
  /** @defaultValue ` ` */
  joinChar?: string;
  /** Triggered when the process is finished. Only available if infinite is false */
  markdownProps?: Omit<MarkdownProps, 'children'>;
  onFinish?(): void;
}

/**
 * Will render each word of the text with a delay of the milliseconds supplied. Will
 * return a markdown text
 */
export const GenerativeText = ({
  generativeText,
  delay,
  infinite = false,
  onFinish = (): void => undefined,
  splitChar = ' ',
  joinChar = ' ',
  accumulatedText = '',
  markdownProps = {},
  ...rest
}: GenerativeTextProps): JSX.Element => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = useMemo(() => generativeText.split(splitChar), [generativeText, splitChar]);
  const wordsLength = words.length;

  const currentText = `${getPartialText(words, currentWordIndex).join(joinChar)}`;

  /**
   * Creates an interval that will render the words from start to finish after the delay.
   * When the process finishes, will trigger the onFinish callback
   */
  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      if (index < wordsLength) {
        setCurrentWordIndex((prev) => prev + 1);
        index++;
      } else if (index >= wordsLength) {
        if (infinite) {
          setCurrentWordIndex(0);
          index = 0;
        } else {
          clearInterval(timer);
          onFinish();
        }
      }
    }, delay);

    return (): void => {
      setCurrentWordIndex(0);
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generativeText, accumulatedText, delay, wordsLength, infinite]);

  return (
    <Text
      {...rest}
      as="span"
    >
      <Markdown {...markdownProps}>{`${accumulatedText}${currentText}`}</Markdown>
    </Text>
  );
};
