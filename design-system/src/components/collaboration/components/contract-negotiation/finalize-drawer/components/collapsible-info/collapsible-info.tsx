import type { ReactElement } from 'react';

import { CollapsibleBox } from '@components/collapsible-box';
import { Text } from '@components/text';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useCss } from '@components/utils/hooks/use-css';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';
import { useTranslation } from '@components/utils/i18n';

import { ThirdPartyStatus } from '../../../activity-tab/components';
import { DocumentStatusTag } from '../../../documents-tab/components';

import { collapsibleBoxOverrides, styles } from './collapsible-info.styles';

import type {
  CollaborationActivityDocument,
  CollaborationResourceStatusInfo,
} from '@components/collaboration/interfaces';

export type CollapsibleInfoProps = {
  document: Pick<
    CollaborationActivityDocument,
    'id' | 'updatedAt' | 'thirdParties' | 'officeDocumentVersion'
  >;
  status: CollaborationResourceStatusInfo;
};

/**
 * Component that renders the required information of a document
 */
export const CollapsibleInfo = ({
  document: { id, updatedAt, thirdParties, officeDocumentVersion },
  status,
}: CollapsibleInfoProps): ReactElement => {
  const {
    approvalsContainerStyles,
    collapsibleContainerStyles,
    lastEditionContainerStyles,
    statusContainerStyles,
    thirdPartiesContainerStyles,
    theme,
  } = useCss(styles);

  const {
    user: { firstName, lastName },
  } = officeDocumentVersion;

  const thirdPartyFullName = `${firstName} ${lastName}`;

  const { t } = useTranslation();
  const { formatDateAsText } = useDateUtilsWithLocale();

  return (
    <CollapsibleBox
      initialState={{ isExpanded: false }}
      title={t('contractNegotiationCollaboration.showSummary')}
      overrides={collapsibleBoxOverrides(theme)}
    >
      <div className={collapsibleContainerStyles}>
        <div className={statusContainerStyles}>
          <Text
            variant="upperDetails"
            margin={0}
            fontWeight="500"
            $style={styles.titleTextStyles(theme)}
          >
            {t('contractNegotiationCollaboration.state')}
          </Text>
          <DocumentStatusTag
            useLongText
            status={status}
          />
        </div>

        <div className={lastEditionContainerStyles}>
          <Text
            variant="upperDetails"
            margin={0}
            fontWeight="500"
            $style={styles.titleTextStyles(theme)}
          >
            {t('contractNegotiationCollaboration.lastUpdated')}
          </Text>

          <StatefulTooltipNext
            showArrow
            placement="bottom"
            content={t('contractNegotiationCollaboration.lastUpdatedDate', {
              date: formatDateAsText(updatedAt, true),
              user: thirdPartyFullName,
            })}
          >
            <Text
              variant="bodySmall"
              margin={0}
              color="neutralSubdued"
              fontWeight="400"
            >
              {t('contractNegotiationCollaboration.lastUpdatedDate', {
                date: formatDateAsText(updatedAt, true),
                user: thirdPartyFullName,
              })}
            </Text>
          </StatefulTooltipNext>
        </div>

        <div className={approvalsContainerStyles}>
          <Text
            variant="upperDetails"
            margin={0}
            fontWeight="500"
            $style={styles.titleTextStyles(theme)}
          >
            {t('contractNegotiationCollaboration.activityTab.approvers')}
          </Text>
          <div className={thirdPartiesContainerStyles}>
            {thirdParties.map((thirdParty) => (
              <ThirdPartyStatus
                key={`${id}-${thirdParty.id}`}
                thirdParty={thirdParty}
              />
            ))}
          </div>
        </div>
      </div>
    </CollapsibleBox>
  );
};
