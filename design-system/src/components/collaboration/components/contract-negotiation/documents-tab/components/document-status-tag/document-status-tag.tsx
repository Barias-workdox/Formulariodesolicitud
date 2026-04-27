import type { ReactElement } from 'react';

import { Tag } from '@components/tag';
import { useTranslation } from '@components/utils/i18n/utils';

import { tagOverrides } from './document-status-tag.styles';

import type { CollaborationResourceStatus } from '../../../../../interfaces';
import type { TagProps } from '@components/tag';

export interface DocumentStatusTagProps {
  status: CollaborationResourceStatus;
  useLongText?: boolean;
}

/**
 * Kind and text by collaboration resource status to use in a tag component.
 */
const tagByStatus: Record<
  CollaborationResourceStatus,
  { kind: TagProps['kind']; text: string; longText: string }
> = {
  pending: {
    kind: 'warning',
    text: 'collaborationDetails.documentStatus.pending',
    longText: 'collaborationDetails.documentStatus.longPending',
  },
  approved: {
    kind: 'positive',
    text: 'collaborationDetails.documentStatus.approved',
    longText: 'collaborationDetails.documentStatus.approved',
  },
  rejected: {
    kind: 'negative',
    text: 'collaborationDetails.documentStatus.rejected',
    longText: 'collaborationDetails.documentStatus.rejected',
  },
};

/** Set the styled Tag for every document status value */
export const DocumentStatusTag = ({
  status,
  useLongText = false,
}: DocumentStatusTagProps): ReactElement => {
  const { t } = useTranslation();

  const { kind, text, longText } = tagByStatus[status];

  const renderText = useLongText ? longText : text;

  return (
    <Tag
      kind={kind}
      variant="overlay"
      overrides={tagOverrides()}
    >
      {t(renderText)}
    </Tag>
  );
};
