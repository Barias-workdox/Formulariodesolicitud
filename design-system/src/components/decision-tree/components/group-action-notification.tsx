import { Notification } from '@components/notification/next';
import { useTranslation } from '@components/utils';
import { themedStyled } from '@themes/utilities';

import type { DistributionModeType } from '../interfaces';
import type { NotificationProps } from '@components/notification/next';

const StyledGroupActionNotificationWrapper = themedStyled('div', ({ $theme }) => ({
  marginTop: $theme.spacing.spacingSm,
  width: 'fit-content',
}));

/**
 * This component displays a notification about the sequential global distribution mode
 */
export const GroupActionNotification = ({
  distributionMode = 'disabled',
}: {
  distributionMode?: DistributionModeType;
}): JSX.Element => {
  const { t } = useTranslation();

  const props: Record<DistributionModeType, NotificationProps> = {
    disabled: {
      title: `${t('decisionTree.distributionModeOptions.disabled')} ${t('decisionTree.distributionModeOptions.freeLabel')}`,
      description: t('decisionTree.distributionModeOptions.defaultDescription'),
    },
    global_sequential: {
      title: t('decisionTree.distributionModeOptions.globalSequential'),
      description: t('decisionTree.distributionModeOptions.globalSequentialDescription'),
    },
  };

  return (
    <StyledGroupActionNotificationWrapper>
      <Notification
        size="small"
        {...props[distributionMode]}
      />
    </StyledGroupActionNotificationWrapper>
  );
};
