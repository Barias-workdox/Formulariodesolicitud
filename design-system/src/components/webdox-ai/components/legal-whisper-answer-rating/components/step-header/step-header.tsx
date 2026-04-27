import { ChevronLeft } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { Text } from '@components/text';

import { StyledTitleContainer } from '../../styled-components';

import type { WithTestId } from '@interfaces/common.interfaces';

export type StepHeaderProps = WithTestId<{
  title: string;
  onBack(): void;
}>;

/**
 * StepHeader component renders the header of the step with a title and a back button.
 */
export const StepHeader = ({
  'data-testid': dataTestId,
  onBack,
  title,
}: StepHeaderProps): JSX.Element => {
  return (
    <StyledTitleContainer>
      <IconButton
        onClick={onBack}
        size="32px"
        data-testid={`${dataTestId}--back-button`}
      >
        <ChevronLeft />
      </IconButton>
      <Text
        variant="body"
        fontWeight="500"
        display="flex"
        alignItems="center"
        margin={0}
      >
        {title}
      </Text>
    </StyledTitleContainer>
  );
};
