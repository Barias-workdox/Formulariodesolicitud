import { Notification } from '@components/notification/next';
import { ProgressBar } from '@components/progress';
import { Text } from '@components/text';

import { StyledBody, StyledProgressBarContainer } from '../../styled-components';

export type UsageOverviewPopoverBodyProps = {
  /** Description of the usage overview. */
  description: string;
  /** Disclaimer of the usage overview. This will be displayed at the bottom of the usage overview. */
  disclaimer?: string;
  /** Text of the progress bar label. */
  progressBarLabelText: string;
  /** Number of requests remaining. */
  remainingRequests: number;
  /** Total number of requests available. */
  totalRequests: number;
  /** Description of the warning notification. This will be displayed when the remaining requests are 0.*/
  warningDescription?: string;
  /** it checks if the plan is unlimited. Decides if the progressBar should be render */
  isPlanUnlimited?: boolean;
};

/**
 * A body component for the usage overview popover.
 */
export const UsageOverviewPopoverBody = ({
  description,
  disclaimer,
  progressBarLabelText,
  remainingRequests,
  totalRequests,
  warningDescription = '',
  isPlanUnlimited = false,
}: UsageOverviewPopoverBodyProps): JSX.Element => {
  const showNotification = remainingRequests === 0 && warningDescription !== '';

  const shouldRenderProgressBar = !isPlanUnlimited;

  const shouldRenderDisclaimer = !isPlanUnlimited;

  return (
    <StyledBody $showNotification={showNotification}>
      <Text
        color="neutral"
        variant="body"
        margin={0}
      >
        {description}
      </Text>
      {shouldRenderProgressBar && (
        <StyledProgressBarContainer>
          <ProgressBar
            completed={false}
            value={remainingRequests}
            maxValue={totalRequests}
            minValue={0}
            showLabel
            size="large"
            overrides={{
              BarContainer: {
                style: ({ $theme }) => ({
                  margin: `0 0 ${$theme.spacing.spacingXs}`,
                }),
              },
            }}
            getProgressLabel={() => (
              <Text
                variant="bodySmall"
                margin={0}
                color="neutralStrong"
              >
                {progressBarLabelText}
              </Text>
            )}
          />
          {showNotification && (
            <Notification
              description={warningDescription}
              kind="negative"
              size="small"
            />
          )}
        </StyledProgressBarContainer>
      )}
      {shouldRenderDisclaimer && (
        <Text
          variant="bodySmall"
          margin={0}
          color="neutral"
        >
          {disclaimer}
        </Text>
      )}
    </StyledBody>
  );
};
