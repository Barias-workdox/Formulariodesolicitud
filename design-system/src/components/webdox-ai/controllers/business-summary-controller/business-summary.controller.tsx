import { useState } from 'react';

import { useMedia } from 'react-use';

import { mediaQueries } from '@tokens/breakpoints';

import {
  BusinessSummaryDesktop,
  BusinessSummaryGreetingsPopover,
  BusinessSummaryMobile,
  WebdoxAIButton,
} from '../../components';

import type { InformationPopoverCommonProps } from '../../components';

export interface BusinessSummaryControllerProps {
  summary?: string;
  isOpen: boolean;
  user?: InformationPopoverCommonProps['user'];
  toggleOpen(): void;
}

/**
 * Business Summary Controller component that displays a summary of business information
 */
export const BusinessSummaryController = ({
  summary,
  isOpen,
  toggleOpen,
  user = { firstName: '' },
}: BusinessSummaryControllerProps): JSX.Element => {
  const isMedium = useMedia(mediaQueries.medium);
  const [isPopoverOpen, setIsPopoverOpen] = useState(true);

  /**
   * Handles the click event of the button.
   * It toggles the open state of the popover and closes the popover.
   */
  const handleButtonClick = (): void => {
    toggleOpen();

    if (isPopoverOpen) {
      setIsPopoverOpen(false);
    }
  };

  return (
    <div>
      <BusinessSummaryGreetingsPopover
        data-testid="business-summary-ai-button-popover"
        user={user}
        isOpen={isPopoverOpen}
        close={() => setIsPopoverOpen(false)}
        onClick={handleButtonClick}
      >
        <WebdoxAIButton />
      </BusinessSummaryGreetingsPopover>

      {isMedium ? (
        <BusinessSummaryDesktop
          isOpen={isOpen}
          summary={summary}
          toggleOpen={toggleOpen}
        />
      ) : (
        <BusinessSummaryMobile
          isOpen={isOpen}
          summary={summary}
          toggleOpen={toggleOpen}
        />
      )}
    </div>
  );
};
