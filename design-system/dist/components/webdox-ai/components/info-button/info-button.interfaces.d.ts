import { IconButtonProps } from '../../../button/variants/icon-button/icon-button.interfaces';
import { StatefulTooltipNextProps } from '../../../tooltip-next';
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
