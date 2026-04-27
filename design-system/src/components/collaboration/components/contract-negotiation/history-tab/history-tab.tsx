import { RecentlyViewed } from '@carbon/icons-react';

import { Timeline } from '@components/timeline';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/index';
import { COMMON_ICON_SIZE_32 } from '@constants/common.constants';

import { HeaderTab } from '../header-tab';

import { HistoryElement } from './components';
import { styles } from './history-tab.styles';

import type { CollaborationActivity, CollaborationUser } from '../../../interfaces';
import type { TimelineProps } from '@components/timeline';

export type HistoryTabProps = Pick<TimelineProps, 'isLoading' | 'onPageEnd'> & {
  'data-testid': string;
  activities: CollaborationActivity[];
  responsible: CollaborationUser;
  onClose(): void;
};

/** HistoryTab is a component that renders the ActivitiesTimeline component */
export const HistoryTab = ({
  'data-testid': dataTestId = 'history-tab',
  isLoading,
  activities,
  responsible,
  onPageEnd,
  onClose,
}: HistoryTabProps): JSX.Element => {
  const { t } = useTranslation();
  const { containerStyles, tabContentStyles } = useCss(styles);

  return (
    <div className={containerStyles}>
      <HeaderTab
        data-testid={dataTestId}
        title={t('contractNegotiationCollaboration.historyTab.activityHistory')}
        onClose={onClose}
        startEnhancerProps={{
          backgroundColor: 'brandWashed',
          Icon: RecentlyViewed,
          size: COMMON_ICON_SIZE_32,
        }}
      />
      <div className={tabContentStyles}>
        <Timeline
          isPaginated
          isLoading={isLoading}
          onPageEnd={onPageEnd}
          activities={activities.map((activity, index) => {
            const isLast = activities.length - 1 === index;

            return {
              id: activity.id,
              component: (
                <HistoryElement
                  activity={activity}
                  responsible={responsible}
                  isLast={isLast}
                />
              ),
            };
          })}
        />
      </div>
    </div>
  );
};
