import type { IconButtonProps } from '@components/button/variants/icon-button/icon-button.interfaces';
import type { StatefulTooltipNextProps } from '@components/tooltip-next';

export interface InfoButtonProps {
  'data-testid': string;
  disabled?: boolean;
  isLoading?: boolean;
  overrides?: {
    Button?: IconButtonProps['overrides'];
    Tooltip?: StatefulTooltipNextProps['overrides'];
  };
  zIndex?: number;
  showTooltip?: boolean;
  tooltipText?: string;
  buttonKind?: IconButtonProps['kind'];
  onClick?(): void;
}
