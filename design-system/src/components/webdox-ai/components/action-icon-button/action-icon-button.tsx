import type { ReactNode } from 'react';

import { IconButton } from '@components/button';
import { StatefulTooltipNext } from '@components/tooltip-next';

import type { IconButtonProps } from '@components/button/variants/icon-button/icon-button.interfaces';
import type { StatefulTooltipNextProps } from '@components/tooltip-next';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface ActionIconButtonProps extends WithTestId {
  /** Render or not the tooltip text. True by default */
  showTooltip?: boolean;
  disabled?: IconButtonProps['disabled'];
  isLoading?: IconButtonProps['isLoading'];
  Icon: ReactNode;
  type?: IconButtonProps['type'];
  /**
   * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
   *
   * @deprecated Only required for legacy support with `DocumentViewerModal`
   */
  zIndex?: number;
  tooltipContent?: StatefulTooltipNextProps['content'];
  onClick(): void;
}

/**
 * Icon button with custom overrides to use it as action button within WebdoxAi Assistant.
 */
export const ActionIconButton = ({
  dataTestId,
  disabled = false,
  isLoading = false,
  tooltipContent,
  zIndex,
  showTooltip = true,
  Icon,
  onClick,
}: ActionIconButtonProps): JSX.Element => {
  return (
    <StatefulTooltipNext
      showArrow
      placement="bottomRight"
      zIndex={zIndex}
      content={showTooltip ? tooltipContent : undefined}
    >
      <IconButton
        dataTestId={dataTestId}
        size="32px"
        disabled={disabled}
        isLoading={isLoading}
        kind="tertiary"
        onClick={onClick}
      >
        {Icon}
      </IconButton>
    </StatefulTooltipNext>
  );
};
