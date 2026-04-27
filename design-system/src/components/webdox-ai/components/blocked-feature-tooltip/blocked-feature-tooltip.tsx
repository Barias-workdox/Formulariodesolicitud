import type { PropsWithChildren } from 'react';

import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';

import type { WithZIndex } from '@interfaces/common.interfaces';

export type BlockedFeatureTooltipProps = PropsWithChildren<
  WithZIndex<{
    isBlocked: boolean;
  }>
>;

/**
 * Component to display a tooltip with information about blocked features.
 * It wraps its children and shows a tooltip when the feature is blocked.
 */
export const BlockedFeatureTooltip = ({
  children,
  isBlocked,
  zIndex,
}: BlockedFeatureTooltipProps): JSX.Element => {
  const { t } = useTranslation();

  return isBlocked ? (
    <StatefulTooltipNext
      content={t('webdoxAI.chat.blockedFeatureInfo')}
      showArrow
      placement="top"
      zIndex={zIndex}
    >
      <div>{children}</div>
    </StatefulTooltipNext>
  ) : (
    <>{children}</>
  );
};
