import type { ReactElement } from 'react';

import { CheckmarkFilled, ErrorFilled } from '@carbon/icons-react';

import { Alert } from '@components/alert';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';
import { useTranslation } from '@components/utils/index';

import type { CollaborationDetails, CollaborationStatus } from '../../../interfaces';
import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { AlertProps } from '@components/alert';
import type { DesignSystemColorType } from '@themes/theme.interfaces';

type BannerCollaborationStatus = Extract<CollaborationStatus, 'canceled' | 'finished'>;

/** Available variants for the banner */
const bannerThirdPartyVariants = ({
  cancelledAt,
  finishedAt,
}: Pick<CollaborationDetails, 'cancelledAt' | 'finishedAt'>): Record<
  BannerCollaborationStatus,
  {
    kind: AlertProps['kind'];
    icon: {
      Icon: CarbonIconType;
      fill: DesignSystemColorType;
    };
    message: {
      text: string;
      date: string;
      color: DesignSystemColorType;
    };
  }
> => ({
  canceled: {
    kind: 'error',
    icon: {
      Icon: ErrorFilled,
      fill: 'negativeSubdued',
    },
    message: {
      text: 'contractNegotiationCollaboration.bannerCollaboration.canceled',
      date: cancelledAt,
      color: 'negativeStrong',
    },
  },
  finished: {
    kind: 'success',
    icon: {
      Icon: CheckmarkFilled,
      fill: 'positive',
    },
    message: {
      text: 'contractNegotiationCollaboration.bannerCollaboration.finished',
      date: finishedAt,
      color: 'positiveStrong',
    },
  },
});

export type BannerCollaborationProps = Pick<
  CollaborationDetails,
  'status' | 'cancelledAt' | 'finishedAt'
>;

/**
 * Component that indicates the status of a collaboration.
 *
 * This banner is only active when the status of the collaboration is `finished` or `canceled`
 */
export const BannerCollaboration = ({
  status,
  finishedAt,
  cancelledAt,
}: BannerCollaborationProps): ReactElement => {
  const { theme } = useCss();
  const { formatDateAsText } = useDateUtilsWithLocale();
  const { t } = useTranslation();

  const {
    kind,
    icon: { Icon, fill },
    message: { text, date, color },
  } = bannerThirdPartyVariants({
    cancelledAt,
    finishedAt,
  })[status as BannerCollaborationStatus] ||
  bannerThirdPartyVariants({
    cancelledAt,
    finishedAt,
  })['finished'];

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
        {t(text, { date: formatDateAsText(date, true) })}
      </Text>
    </Alert>
  );
};
