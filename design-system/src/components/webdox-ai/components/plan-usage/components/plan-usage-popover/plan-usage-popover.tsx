import type { ReactNode } from 'react';

import { Close } from '@carbon/icons-react';

import { ReactComponent as CreditsIcon } from '@assets/icons/webdox-ai/credits-icon.svg';
import { IconButton } from '@components/button';
import { Notification } from '@components/notification/next';
import { ProgressBar } from '@components/progress/progress-bar';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';

import {
  StyledPlanUsageContainer,
  StyledPlanUsageHeader,
  StyledPlanUsageHeaderIcon,
  StyledPlanUsageTitle,
  StyledPlanUsageCloseButton,
  StyledPlanUsageContent,
  StyledPlanUsageAction,
} from './plan-usage.styles';

import type { PlanUsagePopoverType } from './plan-usage.interface';
import type { WithTestId } from '@interfaces/common.interfaces';

/**
 * Popover component that shows additional information about the current user plan
 * And its current actions that are available.
 */
export const PlanUsagePopover = ({
  dataTestId,
  planName,
  remainingRequests,
  totalRequests,
  handleClose,
}: WithTestId<PlanUsagePopoverType>): ReactNode => {
  const { t } = useTranslation();

  const parsedPlanName = planName
    ? planName.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    : '';

  return (
    <StyledPlanUsageContainer data-testid={`${dataTestId}__popover`}>
      <StyledPlanUsageHeader>
        <StyledPlanUsageHeaderIcon>
          <CreditsIcon />
        </StyledPlanUsageHeaderIcon>
        <StyledPlanUsageTitle>
          <Text
            variant="h2"
            color="darkPrimary"
            fontWeight="700"
            margin={0}
          >
            {`${t('webdoxAI.planUsage.popovers.planTrial.title')}`}
          </Text>
          <Text
            variant="bodySmall"
            color="darkSecondary"
            fontWeight="400"
            margin="0px"
          >
            {parsedPlanName}
          </Text>
        </StyledPlanUsageTitle>
        <StyledPlanUsageCloseButton>
          <IconButton
            kind="control"
            size="32px"
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        </StyledPlanUsageCloseButton>
      </StyledPlanUsageHeader>
      <StyledPlanUsageContent>
        <Text
          variant="body"
          color="darkSecondary"
          fontWeight="400"
          margin="0px"
        >
          {`${t('webdoxAI.planUsage.popovers.planTrial.description')}`}
        </Text>
        <ProgressBar
          maxValue={totalRequests}
          minValue={0}
          showLabel
          size="medium"
          steps={1}
          successValue={totalRequests}
          value={remainingRequests}
          completed={false}
          getProgressLabel={(value, maxValue): ReactNode => (
            <Text variant="bodySmall">
              {`${t('webdoxAI.planUsage.popovers.planTrial.progress', { used: value, total: maxValue })}`}
            </Text>
          )}
        />
        {remainingRequests === 0 && (
          <Notification
            kind="negative"
            description={`${t('webdoxAI.planUsage.popovers.planTrial.notification')}`}
            size="small"
            closeable={false}
          />
        )}
      </StyledPlanUsageContent>
      <StyledPlanUsageAction>
        <Text
          variant="bodySmall"
          color="brandMedium"
          fontWeight="400"
          margin="0px"
        >
          {`${t('webdoxAI.planUsage.popovers.planTrial.action')}`}
        </Text>
      </StyledPlanUsageAction>
    </StyledPlanUsageContainer>
  );
};
