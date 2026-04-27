import type { ReactElement, ReactNode } from 'react';

import { WatsonHealthStackedScrolling_1 } from '@carbon/icons-react';

import { FileTypeIcon } from '@components/file-type-icon';
import { TitleLayout } from '@components/layouts';
import { Select } from '@components/select';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { COMMON_ICON_SIZE_32 } from '@constants/common.constants';

import { HeaderTab } from '../header-tab';

import { styles } from './activity-tab.styles';
import { ThirdPartyStatus } from './components';

import type { ActivityTabContainerProps, Option } from '../../../containers';
import type { CollaborationActivityDocument, CollaborationDetails } from '../../../interfaces';
import type { FileType } from '@components/file-type-icon';

/** Render a custom Label and option for a select */
const renderSelectContent = (option: Option): ReactNode => (
  <TitleLayout
    startEnhancer={
      <FileTypeIcon
        fileExtension={option.fileExt as FileType}
        data-testid="document-activity-tab--file-type-icon"
        size={20}
      />
    }
    titleText={
      <Text
        variant="bodySmall"
        margin={0}
        fontWeight="400"
        color="neutralDepressed"
      >
        {option.label as string}
      </Text>
    }
  />
);

export interface ActivityTabProps extends ActivityTabContainerProps {
  collaborationDetails: CollaborationDetails;
  documents: CollaborationActivityDocument[];
  selectedDocument: CollaborationActivityDocument;
  handleOnChange(value: Option): void;
}

/**
 * Component that renders a summary for the collaboration.
 *
 * In the first place there is a banner with the status of the collaboration and after that there
 * is the status for a document with the information of each third party involved
 */
export const ActivityTab = ({
  'data-testid': dataTestId,
  documents,
  selectedDocument,
  handleOnChange,
  onClose,
}: ActivityTabProps): ReactElement => {
  const {
    activityTabContainer,
    tabMainContainer,
    approversContainerStyles,
    selectContainerStyles,
    thirdPartyGridContainerStyles,
    theme,
  } = useCss(styles);

  const { t } = useTranslation();

  return (
    <div className={activityTabContainer}>
      <HeaderTab
        data-testid={dataTestId}
        title={t('contractNegotiationCollaboration.activityTab.title')}
        onClose={onClose}
        startEnhancerProps={{
          backgroundColor: 'brandWashed',
          Icon: WatsonHealthStackedScrolling_1,
          size: COMMON_ICON_SIZE_32,
        }}
      />

      <div className={tabMainContainer}>
        <div className={approversContainerStyles}>
          <Text
            variant="bodySmall"
            margin={0}
            marginBottom={theme.spacing.spacingMd}
            fontWeight="500"
            color={theme.colors.neutralStrong}
          >
            {t('contractNegotiationCollaboration.activityTab.approvers')}
          </Text>

          <Text
            variant="bodySmall"
            margin={0}
            fontWeight="400"
            color="neutralSubdued"
          >
            {t('contractNegotiationCollaboration.activityTab.filterByDocument')}
          </Text>

          <div className={selectContainerStyles}>
            <Select
              data-testid={`${dataTestId}--select`}
              options={documents}
              value={selectedDocument}
              searchable={false}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              /* @ts-ignore - problem with `Select` props type but correctly typed */
              onChange={([option]): void => handleOnChange(option as Option)}
              getValueLabel={({ option }): ReactNode => renderSelectContent(option as Option)}
              getOptionLabel={({ option }): ReactNode => renderSelectContent(option as Option)}
            />
          </div>

          <div className={thirdPartyGridContainerStyles}>
            {selectedDocument.thirdParties.map((thirdParty) => (
              <ThirdPartyStatus
                key={thirdParty.id}
                thirdParty={thirdParty}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
