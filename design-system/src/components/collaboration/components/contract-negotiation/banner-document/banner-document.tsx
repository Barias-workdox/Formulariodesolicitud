import type { ReactElement } from 'react';

import { CheckmarkFilled, WarningFilled } from '@carbon/icons-react';

import { Alert } from '@components/alert';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';
import { useTranslation } from '@components/utils/index';

import type { CollaborationResource, CollaborationResourceStatus } from '../../../interfaces';
import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { AlertProps } from '@components/alert';
import type { DesignSystemColorType } from '@themes/theme.interfaces';

type BannerCollaborationResourceStatus = Extract<
  CollaborationResourceStatus,
  'approved' | 'pending'
>;

/** Available variants for the banner */
const bannerDocumentVariants: Record<
  BannerCollaborationResourceStatus,
  {
    kind: AlertProps['kind'];
    icon: {
      Icon: CarbonIconType;
      fill: DesignSystemColorType;
    };
    message: {
      text: string;
      color: DesignSystemColorType;
    };
  }
> = {
  approved: {
    kind: 'success',
    icon: {
      Icon: CheckmarkFilled,
      fill: 'positive',
    },
    message: {
      text: 'contractNegotiationCollaboration.bannerDocument.approved',
      color: 'positiveStrong',
    },
  },
  pending: {
    kind: 'warning',
    icon: {
      Icon: WarningFilled,
      fill: 'warning',
    },
    message: {
      text: 'contractNegotiationCollaboration.bannerDocument.pending',
      color: 'warningStrong',
    },
  },
};

export interface BannerDocumentProps {
  status: CollaborationResourceStatus;
  approvedAt: CollaborationResource['approvedAt'];
}

/**
 * Component that indicates the status of a document to a user.
 *
 * This banner is only active when the status of the document is `approved` or `pending`.
 * If the status of the collaboration is `finished` or `cancelled` this banner is not visible.
 */
export const BannerDocument = ({
  status = 'pending',
  approvedAt,
}: BannerDocumentProps): ReactElement => {
  const { theme } = useCss();
  const { formatDateAsText } = useDateUtilsWithLocale();
  const { t } = useTranslation();

  const {
    kind,
    icon: { Icon, fill },
    message: { text, color },
  } = bannerDocumentVariants[status as BannerCollaborationResourceStatus] ||
  bannerDocumentVariants['approved'];

  return (
    <Alert
      kind={kind}
      icon={<Icon color={theme.colors[fill]} />}
    >
      <Text
        variant="bodySmall"
        margin={0}
        color={theme.colors[color]}
      >
        {t(text, { date: formatDateAsText(approvedAt, true) })}
      </Text>
    </Alert>
  );
};
