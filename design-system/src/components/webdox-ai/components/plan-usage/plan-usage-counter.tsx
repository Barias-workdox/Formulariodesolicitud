import type { ReactNode } from 'react';

import { ReactComponent as CreditsIcon } from '@assets/icons/webdox-ai/credits-icon.svg';
import { BackgroundIcon } from '@components/background-icon';
import { DIALOG_Z_INDEX } from '@components/dynamic-dialog/next/dynamic-dialog.constants';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';

import { getUsagePlanData, isUsagePlanFound } from '../../utils/webdox-ai-plans.utils';
import { UsageCounterTag } from '../usage-counter-tag';
import { UsageOverviewPopover } from '../usage-overview-popover';

import type { PlanUsageCounterType } from './plan-usage.types';
import type { WithTestId } from '@interfaces/common.interfaces';

const USAGE_PLAN_DATA_TEST_ID = 'usage-plan';

/**
 * Component that renders the current plan counter status, and show additional
 * information of the current plan state and actions available
 */
export const UsagePlanCounter = ({
  dataTestId = USAGE_PLAN_DATA_TEST_ID,
  availablePlans,
  planName,
}: WithTestId<PlanUsageCounterType>): ReactNode => {
  const { t } = useTranslation();

  const isPlanAvailable = isUsagePlanFound(availablePlans, planName);

  const { usageStatus, remainingRequests, totalRequests } = getUsagePlanData(
    availablePlans,
    planName,
  );

  const isPlanUnlimited = usageStatus === 'unlimited';

  const parsedPlanName = planName
    ? planName.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    : '';

  return (
    isPlanAvailable && (
      <>
        <UsageOverviewPopover
          data-testid={`${dataTestId}__popover`}
          placement="auto"
          header={
            <UsageOverviewPopover.Header
              title={t(
                `webdoxAI.planUsage.popovers.planTrial.${isPlanUnlimited ? 'unlimitedTitle' : 'title'}`,
              )}
              subtitle={parsedPlanName}
              startEnhancer={
                <BackgroundIcon
                  shape="square"
                  backgroundColor="positiveSubtle"
                  iconColor="positive"
                  Icon={CreditsIcon}
                  size="32px"
                />
              }
            />
          }
          zIndex={DIALOG_Z_INDEX.TOOLTIP}
          body={
            <UsageOverviewPopover.Body
              description={
                isPlanUnlimited
                  ? t('webdoxAI.planUsage.popovers.planTrial.unlimitedDescription')
                  : t('webdoxAI.planUsage.popovers.planTrial.description', {
                      total: totalRequests,
                    })
              }
              totalRequests={totalRequests}
              remainingRequests={remainingRequests}
              isPlanUnlimited={isPlanUnlimited}
              progressBarLabelText={`${t('webdoxAI.planUsage.popovers.planTrial.progress', { used: remainingRequests, total: totalRequests })}`}
              disclaimer={`* ${t('webdoxAI.planUsage.popovers.planTrial.disclaimer')}`}
              warningDescription={t('webdoxAI.planUsage.popovers.planTrial.notification')}
            />
          }
          footer={
            !isPlanUnlimited && (
              <Text
                variant="bodySmall"
                color="brandMedium"
                fontWeight="400"
                margin="0px"
                textAlign="center"
              >
                {`${t('webdoxAI.planUsage.popovers.planTrial.action')}`}
              </Text>
            )
          }
        >
          <UsageCounterTag
            dataTestId={dataTestId}
            usageStatus={usageStatus}
            remainingRequests={remainingRequests}
            totalRequests={totalRequests}
            icon={CreditsIcon}
          />
        </UsageOverviewPopover>
      </>
    )
  );
};
