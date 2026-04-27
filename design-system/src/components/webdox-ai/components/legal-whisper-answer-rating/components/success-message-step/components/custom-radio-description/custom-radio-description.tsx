import type { PropsWithChildren } from 'react';

import { ChevronRight } from '@carbon/icons-react';

import { Text } from '@components/text';

import { StyledRadioDescriptionContainer } from '../../../../styled-components';

/**
 * CustomRadioDescription component is used to display a description
 * for a radio button in the Legal Whisper Answer Rating component.
 * It includes a text description and a right chevron icon.
 */
export const CustomRadioDescription = ({ children }: PropsWithChildren<object>): JSX.Element => {
  return (
    <StyledRadioDescriptionContainer>
      <Text
        variant="bodySmall"
        margin={0}
        color="neutralSubdued"
      >
        {children}
      </Text>
      <ChevronRight />
    </StyledRadioDescriptionContainer>
  );
};
