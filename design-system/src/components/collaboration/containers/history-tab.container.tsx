import { useEffect, useMemo } from 'react';

import { HistoryTab } from '../components/contract-negotiation/history-tab/history-tab';
import { filterContractNegotiationActivities } from '../logic/business/contract-negotiation.business';
import { useContractNegotiationContext } from '../logic/contexts';

export interface HistoryTabContainerProps {
  'data-testid'?: string;
  onClose(): void;
}

/**
 * History Tab container, which makes all context connections,
 * supplying clean props to data rendering component.
 */
export const HistoryTabContainer = ({
  'data-testid': dataTestId = 'history-tab',
  onClose,
}: HistoryTabContainerProps): JSX.Element => {
  const {
    collaborationActivities,
    collaborationResponsible,
    isActivitiesLoading,
    onTriggerHistoryTab,
    loadMoreActivities,
  } = useContractNegotiationContext();

  /** Filter Activities that are going to be rendered on the `HistoryTab` */
  const filteredActivities = useMemo(
    () => filterContractNegotiationActivities(collaborationActivities),
    [collaborationActivities],
  );

  /** Triggers the onOpen tab callback */
  useEffect(() => onTriggerHistoryTab(), [onTriggerHistoryTab]);

  return (
    <HistoryTab
      data-testid={dataTestId}
      activities={filteredActivities}
      responsible={collaborationResponsible}
      isLoading={isActivitiesLoading}
      onPageEnd={loadMoreActivities}
      onClose={onClose}
    />
  );
};
