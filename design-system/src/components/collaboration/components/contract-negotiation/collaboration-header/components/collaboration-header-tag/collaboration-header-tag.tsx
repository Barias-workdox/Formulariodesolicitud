import type { ReactElement } from 'react';

import { Tag } from '@components/tag';
import { useTranslation } from '@components/utils/i18n';

import type { CollaborationStatus } from '@components/collaboration/interfaces';
import type { TagProps } from '@components/tag';

const collaborationHeaderTagVariants: Record<
  CollaborationStatus,
  {
    kind: TagProps['kind'];
    message: string;
  }
> = {
  active: {
    kind: 'accent',
    message: 'collaborationDetails.status.active',
  },
  canceled: {
    kind: 'negative',
    message: 'collaborationDetails.status.canceled',
  },
  finished: {
    kind: 'positive',
    message: 'collaborationDetails.status.finished',
  },
};

export interface CollaborationHeaderTagProps {
  status: CollaborationStatus;
}

/** Component that communicates the status of a collaboration */
export const CollaborationHeaderTag = ({ status }: CollaborationHeaderTagProps): ReactElement => {
  const { t } = useTranslation();

  const { kind, message } =
    collaborationHeaderTagVariants[status] || collaborationHeaderTagVariants['active'];

  return (
    <Tag
      kind={kind}
      variant="overlay"
    >
      {t(message)}
    </Tag>
  );
};
