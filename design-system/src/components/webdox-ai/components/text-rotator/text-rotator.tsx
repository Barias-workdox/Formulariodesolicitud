import { useEffect, useState } from 'react';

import { Text } from '@components/text';

import { TEXT_ROTATOR_TRANSITION_DURATION } from './text-rotator.constants';
import {
  StyledOverflowContainer,
  StyledTextContainer,
  StyledTextRotatorContainer,
} from './text-rotator.styles';

import type { StyleObject } from 'styletron-react';

interface TextRotatorProps {
  texts: string[];
  align?: StyleObject['alignItems'];
}

/**
 * A component that rotates through an array of text strings, displaying
 * each one in sequence with a smooth transition.
 */
export const TextRotator = ({ texts, align }: TextRotatorProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Sets up an interval to rotate through the `texts` array, updating the
   * `currentIndex` every 4 seconds to display the next text item.
   *
   * The effect recalculates whenever the length of the `texts` array changes.
   * If the current `currentIndex` reaches the end of the array, it resets back
   * to the beginning, creating a continuous rotation.
   *
   * Cleans up by clearing the interval when the component unmounts.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
    }, TEXT_ROTATOR_TRANSITION_DURATION);

    return (): void => clearInterval(interval);
  }, [texts.length]);

  return (
    <StyledOverflowContainer>
      <StyledTextRotatorContainer
        $textIndex={currentIndex}
        $align={align}
      >
        {texts.map((text, index) => (
          <StyledTextContainer key={index}>
            <Text
              variant="microCopy"
              margin={0}
              color="neutral"
            >
              {text}
            </Text>
          </StyledTextContainer>
        ))}
      </StyledTextRotatorContainer>
    </StyledOverflowContainer>
  );
};
