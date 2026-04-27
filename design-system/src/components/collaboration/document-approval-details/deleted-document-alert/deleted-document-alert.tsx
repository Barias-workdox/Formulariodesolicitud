import type { ReactElement } from 'react';

import { Notification } from '@components/notification/next';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';

import { styles } from './deleted-document-alert.styles';

export interface DeletedDocumentAlertProps {
  deletedAt: string;
}

/**
 * Part of document approval details by document.
 * Shows an alert to indicate that the document has been deleted.
 */
export const DeletedDocumentAlert = ({ deletedAt }: DeletedDocumentAlertProps): ReactElement => {
  const { alertContainerStyles, alertTitleContainerStyles, theme } = useCss(styles);
  const { formatDateAsText } = useDateUtilsWithLocale();
  const { t } = useTranslation();

  return (
    <div className={alertContainerStyles}>
      <Notification
        kind="warning"
        description={
          <div>
            <div className={alertTitleContainerStyles}>
              <Text
                variant="bodySmall"
                margin={0}
                marginBottom={theme.spacing.spacingXs}
                color={theme.colors.warningStrong}
              >
                {t('collaborationDetails.deletedDocumentAlert.title')}
              </Text>
            </div>
            <Text
              variant="bodySmall"
              fontWeight="500"
              margin={0}
              marginTop={theme.spacing.spacingXs}
              color={theme.colors.warningStrong}
            >
              {formatDateAsText(deletedAt, true)}
            </Text>
          </div>
        }
        closeable
      />
    </div>
  );
};
