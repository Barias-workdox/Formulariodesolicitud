import type { ReactElement } from 'react';

import { CheckmarkFilled, WarningFilled } from '@carbon/icons-react';

import { StatefulTooltip } from '@components/tooltip';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './status-icon.styles';

import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { CollaborationResourceStatusInfo } from '@components/collaboration/interfaces';
import type { DesignSystemColorType } from '@themes/theme.interfaces';

const statusIconVariants: Record<
  CollaborationResourceStatusInfo,
  { Icon: CarbonIconType; color: DesignSystemColorType; text: string }
> = {
  approved: {
    Icon: CheckmarkFilled,
    color: 'positiveSubdued',
    text: 'collaborationDetails.documentStatus.approved',
  },
  pending: {
    Icon: WarningFilled,
    color: 'warningSubdued',
    text: 'collaborationDetails.documentStatus.longPending',
  },
};

export type StatusIconProps = {
  'data-testid': string;
  status: CollaborationResourceStatusInfo;
};

/**
 * Component that renders an icon that indicates the state of the document
 */
export const StatusIcon = ({
  'data-testid': dataTestId,
  status,
}: StatusIconProps): ReactElement => {
  const { statusIconContainer, theme } = useCss(styles);

  const { t } = useTranslation();

  const { Icon, color, text } = statusIconVariants[status] || statusIconVariants['approved'];

  return (
    <div
      data-testid={`${dataTestId}__${status}`}
      className={statusIconContainer}
    >
      <StatefulTooltip
        showArrow
        placement="bottom"
        content={t(text)}
      >
        <Icon
          color={theme.colors[color]}
          size={16}
          height={16}
          width={16}
        />
      </StatefulTooltip>
    </div>
  );
};
