import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';

import { LoadingWrapper } from '@components/loading-wrapper';

import { ActivityTab } from '../components/contract-negotiation';
import { getActivitySelectedDocument } from '../logic/business/contract-negotiation.business';
import { useContractNegotiationContext } from '../logic/contexts';

import type { CollaborationActivityDocument } from '../interfaces';
import type { FileType } from '@components/file-icon';
import type { SelectOption } from '@components/select';

export interface Option extends SelectOption {
  id: string | number;
  fileExt?: FileType;
}

export interface ActivityTabContainerProps {
  'data-testid': string;
  onClose(): void;
}

/**
 * Container of the activity tab.
 *
 * It manages the state of the selected document and ensures that changes in document selection
 * are reflected in the ActivityTab.
 */
export const ActivityTabContainer = ({
  'data-testid': dataTestId,
  onClose,
}: ActivityTabContainerProps): ReactElement => {
  const {
    activityDocuments,
    collaborationDetails,
    selectedDocument: { document: contextSelectedDocument },
    onTriggerActivityTab,
  } = useContractNegotiationContext();

  const [selectedDocument, setSelectedDocument] = useState<
    CollaborationActivityDocument | undefined
  >();

  /** The initial state of the `selectedDocument` is `undefined` so there is no need to render anything */
  const isLoading = selectedDocument === undefined;

  /** Triggers the onOpen tab callback */
  useEffect(() => onTriggerActivityTab(), [onTriggerActivityTab]);

  /**
   * Update the inner selected document according to the collaboration selected document or
   * when the array of activity documents changes.
   */
  useEffect(() => {
    setSelectedDocument(getActivitySelectedDocument(activityDocuments, contextSelectedDocument));
  }, [activityDocuments, contextSelectedDocument]);

  /** Handle the selected document in the summary for third parties */
  const handleOnChange = ({ id = '' }: Option): void => {
    setSelectedDocument(activityDocuments.find(({ id: activityId }) => activityId === id));
  };

  return (
    <LoadingWrapper isLoading={isLoading}>
      <ActivityTab
        data-testid={dataTestId}
        selectedDocument={selectedDocument}
        documents={activityDocuments}
        collaborationDetails={collaborationDetails}
        handleOnChange={handleOnChange}
        onClose={onClose}
      />
    </LoadingWrapper>
  );
};
