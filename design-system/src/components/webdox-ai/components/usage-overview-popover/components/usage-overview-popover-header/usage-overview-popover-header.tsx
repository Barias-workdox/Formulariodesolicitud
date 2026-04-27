import type { ReactNode } from 'react';

import { Close } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { Text } from '@components/text';

import { StyledHeader, StyledTitleContainer } from '../../styled-components';

export type UsageOverviewPopoverHeaderProps = {
  /** Title of the usage overview popover header. */
  title?: string;
  /** Subtitle of the usage overview popover header. */
  subtitle?: string;
  /** Start enhancer of the usage overview popover header. */
  startEnhancer?: ReactNode;
  /**
   * Function to close the popover. When it is used within the UsageOverviewPopover component,
   * it will be passed as a prop by the popover.
   */
  close?(): void;
};

/**
 * A header component for the usage overview popover.
 */
export const UsageOverviewPopoverHeader = ({
  title,
  subtitle,
  startEnhancer,
  close,
}: UsageOverviewPopoverHeaderProps): JSX.Element => {
  return (
    <StyledHeader>
      {startEnhancer}
      <StyledTitleContainer>
        <Text
          variant="h2"
          margin={0}
          color="neutralStrong"
          fontWeight="700"
        >
          {title}
        </Text>
        <Text
          variant="bodySmall"
          margin={0}
          color="neutralStrong"
        >
          {subtitle}
        </Text>
      </StyledTitleContainer>
      <IconButton
        onClick={close}
        size="32px"
      >
        <Close />
      </IconButton>
    </StyledHeader>
  );
};
