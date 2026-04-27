import type { ReactElement, ReactNode } from 'react';

import {
  Chat,
  CheckmarkFilled,
  DocumentAdd,
  Download,
  Edit,
  Flag,
  Misuse,
  TrashCan,
  Upload,
  UserFollow,
  View,
  WarningFilled,
} from '@carbon/icons-react';

import {
  ActivityComment,
  ActivityDocuments,
  ActivityUsers,
} from '@components/activity-timeline/components';
import { TimelineActivity, TimelineIcon } from '@components/timeline';
import { useTranslation } from '@components/utils';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';

import {
  CANCEL_ACTIVITY,
  COLLABORATION_APPROVALS_RESTART,
  COLLABORATION_COMMENT_ACTIVITY,
  COLLABORATION_DOCUMENT_VERSION_UPLOAD,
  CREATE_ACTIVITY,
  DELETED_DOCUMENTS,
  DELETED_THIRD_PARTIES,
  DOCUMENT_APPROVED_ACTIVITY,
  DOCUMENT_UPDATED_LOCALLY,
  DOWNLOAD_DOCUMENT_ACTIVITY,
  FINISH_ACTIVITY,
  NEW_DOCUMENTS,
  NEW_THIRD_PARTIES,
  VIEWED_DOCUMENT_ACTIVITY,
} from '../../../../../constants';

import type {
  CollaborationActivity,
  CollaborationUser,
} from '@components/collaboration/interfaces';
import type { TimelineIconProps } from '@components/timeline/components/timeline-icon/timeline-icon';

type CustomParams = CollaborationActivity['parameters'] & {
  userFullName: string;
  version: string;
};

type HistoryElementVariantsType = Record<
  string,
  {
    title: string;
    Icon: TimelineIconProps['Icon'];
    iconColor?: TimelineIconProps['iconColor'];
    backgroundColor?: TimelineIconProps['backgroundColor'];
    children?: ReactNode;
  }
>;

const defaultIconConfig: TimelineIconProps = {
  iconColor: 'brand',
  backgroundColor: 'brandSubtle',
};

/** Mapping of the available history activities in the contract negotiation scope */
const historyElementVariants = ({
  comment = '',
  documents = [],
  thirdParties = [],
}: CollaborationActivity['parameters']): HistoryElementVariantsType => ({
  [CREATE_ACTIVITY]: {
    ...defaultIconConfig,
    Icon: Flag,
    title: 'contractNegotiationCollaboration.collaborationActivities.create',
    children: <ActivityComment comment={comment} />,
  },
  [FINISH_ACTIVITY]: {
    Icon: CheckmarkFilled,
    iconColor: 'positive',
    backgroundColor: 'positiveSubtle',
    title: 'contractNegotiationCollaboration.collaborationActivities.finish',
    children: <ActivityComment comment={comment} />,
  },
  [DOCUMENT_APPROVED_ACTIVITY]: {
    Icon: CheckmarkFilled,
    iconColor: 'positive',
    backgroundColor: 'positiveSubtle',
    title: 'contractNegotiationCollaboration.collaborationActivities.documentApproved',
    children: <ActivityComment comment={comment} />,
  },
  [VIEWED_DOCUMENT_ACTIVITY]: {
    ...defaultIconConfig,
    Icon: View,
    title: 'contractNegotiationCollaboration.collaborationActivities.viewedDocument',
  },
  [DOWNLOAD_DOCUMENT_ACTIVITY]: {
    ...defaultIconConfig,
    Icon: Download,
    title: 'contractNegotiationCollaboration.collaborationActivities.downloadDocument',
  },
  [COLLABORATION_COMMENT_ACTIVITY]: {
    ...defaultIconConfig,
    Icon: Chat,
    title: 'contractNegotiationCollaboration.collaborationActivities.collaborationComment',
    children: <ActivityComment comment={comment} />,
  },
  [CANCEL_ACTIVITY]: {
    Icon: Misuse,
    iconColor: 'negative',
    backgroundColor: 'negativeSubtle',
    title: 'contractNegotiationCollaboration.collaborationActivities.cancel',
    children: <ActivityComment comment={comment} />,
  },
  [COLLABORATION_APPROVALS_RESTART]: {
    Icon: WarningFilled,
    iconColor: 'warning',
    backgroundColor: 'warningSubtle',
    title: 'contractNegotiationCollaboration.collaborationActivities.approvalsRestart',
  },
  [COLLABORATION_DOCUMENT_VERSION_UPLOAD]: {
    ...defaultIconConfig,
    Icon: Upload,
    title: 'contractNegotiationCollaboration.collaborationActivities.versionUpload',
  },
  [NEW_DOCUMENTS]: {
    ...defaultIconConfig,
    Icon: DocumentAdd,
    title: 'contractNegotiationCollaboration.collaborationActivities.newDocuments',
    children: <ActivityDocuments documents={documents} />,
  },
  [DELETED_DOCUMENTS]: {
    Icon: TrashCan,
    ...defaultIconConfig,
    title: 'contractNegotiationCollaboration.collaborationActivities.deletedDocuments',
    children: <ActivityDocuments documents={documents} />,
  },
  [NEW_THIRD_PARTIES]: {
    Icon: UserFollow,
    ...defaultIconConfig,
    title: 'contractNegotiationCollaboration.collaborationActivities.newThirdParties',
    children: <ActivityUsers users={thirdParties} />,
  },
  [DELETED_THIRD_PARTIES]: {
    ...defaultIconConfig,
    Icon: TrashCan,
    title: 'contractNegotiationCollaboration.collaborationActivities.deletedThirdParties',
    children: <ActivityUsers users={thirdParties} />,
  },
  [DOCUMENT_UPDATED_LOCALLY]: {
    ...defaultIconConfig,
    Icon: Edit,
    title: 'contractNegotiationCollaboration.collaborationActivities.documentUpdatedLocally',
  },
});

type HistoryListProps = {
  activity: CollaborationActivity;
  responsible: CollaborationUser;
  isLast: boolean;
};

/** Component that renders an activity that is rendered inside a `Timeline` component */
export const HistoryElement = ({
  isLast,
  responsible,
  activity: {
    id,
    key,
    createdAt,
    owner: { firstName = '', lastName = '' } = { id: -1, email: '', firstName: '', lastName: '' },
    collaboration: { message = '' },
    parameters: {
      comment = '',
      documentName = '',
      documentVersion = 0,
      documents = [],
      thirdParties = [],
    } = {},
  },
}: HistoryListProps): ReactElement => {
  const { t } = useTranslation();
  const { formatDateAsText } = useDateUtilsWithLocale();

  const params = {
    comment: key === CREATE_ACTIVITY ? message : comment,
    userFullName:
      key === CREATE_ACTIVITY
        ? `${responsible.firstName} ${responsible.lastName}`
        : `${firstName} ${lastName}`,
    version: `${documentVersion}.0`,
    documentName,
    documents,
    documentVersion,
    thirdParties,
  } satisfies CustomParams;

  const { title, Icon, iconColor, backgroundColor, children } = historyElementVariants(params)[
    key
  ] || {
    icon: { Icon: Flag },
    title: '',
  };

  return (
    <TimelineActivity
      isLast={isLast}
      title={t(title, params)}
      subtitle={formatDateAsText(createdAt, true)}
      indicator={
        <TimelineIcon
          data-testid={`activity-${id}-icon`}
          Icon={Icon}
          iconColor={iconColor}
          backgroundColor={backgroundColor}
        />
      }
    >
      {children}
    </TimelineActivity>
  );
};
