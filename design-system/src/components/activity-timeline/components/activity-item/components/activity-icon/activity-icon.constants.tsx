import {
  ChartNetwork,
  Chat,
  CheckmarkFilled,
  Document,
  DocumentAdd,
  Download,
  Flag,
  Misuse,
  RequestQuote,
  TrashCan,
  Upload,
  UserFollow,
  View,
  WarningFilled,
} from '@carbon/icons-react';

import type {
  IconConfigurationType,
  IconsByActivityType,
} from '@components/activity-timeline/activity-timeline.interfaces';

export const ACTIVITY_ICON_CONTAINER_SIZE = '32px';

/** To use with the background-icon component that accept only numbers to define the size. */
export const ACTIVITY_ICON_SIZE = 16;

export const TAIL_MARGIN_TOP = '56px';

export const defaultIconConfig: IconConfigurationType = {
  backgroundColor: 'brandSubtle',
  Icon: Flag,
  iconColor: 'brand',
};

export const iconsByActivity: IconsByActivityType = {
  flag: defaultIconConfig,
  comment: {
    ...defaultIconConfig,
    Icon: Chat,
  },
  download: {
    ...defaultIconConfig,
    Icon: Download,
  },
  upload: {
    ...defaultIconConfig,
    Icon: Upload,
  },
  view: {
    ...defaultIconConfig,
    Icon: View,
  },
  document: {
    ...defaultIconConfig,
    Icon: Document,
  },
  request: {
    ...defaultIconConfig,
    Icon: RequestQuote,
  },
  flow: {
    ...defaultIconConfig,
    Icon: ChartNetwork,
  },
  approved: {
    Icon: CheckmarkFilled,
    iconColor: 'positive',
    backgroundColor: 'positiveSubtle',
  },
  warning: {
    Icon: WarningFilled,
    iconColor: 'warning',
    backgroundColor: 'warningSubtle',
  },
  rejected: {
    Icon: Misuse,
    iconColor: 'negative',
    backgroundColor: 'negativeSubtle',
  },
  'new-document': {
    ...defaultIconConfig,
    Icon: DocumentAdd,
  },
  'new-user': {
    ...defaultIconConfig,
    Icon: UserFollow,
  },
  delete: {
    ...defaultIconConfig,
    Icon: TrashCan,
  },
};
