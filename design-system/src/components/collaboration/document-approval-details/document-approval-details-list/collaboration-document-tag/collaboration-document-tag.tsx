import { Tag } from '@components/tag';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';
import { useTranslation } from '@components/utils/i18n/utils';

import type { CollaborationResourceStatus } from '../../../interfaces';
import type { TagProps } from '@components/tag';
import type { TranslationType } from '@components/utils/i18n/i18n.interface';

export interface CollaborationDocumentTagProps {
  status: CollaborationResourceStatus;
  date: string;
}

/** All options for every document status */
const collaborationDocumentOptions = (
  t: TranslationType,
  formattedDate: string,
): Record<CollaborationResourceStatus, { kind: TagProps['kind']; text: string }> => ({
  pending: {
    kind: 'warning',
    text: t('collaborationDetails.updatedText.pending'),
  },
  rejected: {
    kind: 'negative',
    text: t('collaborationDetails.updatedText.rejected', { date: formattedDate }),
  },
  approved: {
    kind: 'positive',
    text: t('collaborationDetails.updatedText.approved', { date: formattedDate }),
  },
});

/** Set the styled Tag for every collaboration status value */
export const CollaborationDocumentTag = ({
  status,
  date,
}: CollaborationDocumentTagProps): JSX.Element => {
  const { t } = useTranslation();
  const { formatDate } = useDateUtilsWithLocale();

  const formattedDate = formatDate(date);
  const { kind, text } = collaborationDocumentOptions(t, formattedDate)[status];

  return (
    <Tag
      kind={kind}
      variant="overlay"
    >
      {text}
    </Tag>
  );
};
