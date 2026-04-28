import { ReactNode } from 'react';
import { IconButtonProps } from '../../../button/variants/icon-button/icon-button.interfaces';
import { StatefulTooltipNextProps } from '../../../tooltip-next';
import { WithTestId } from '../../../../interfaces/common.interfaces';
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
export declare const ActionIconButton: ({ dataTestId, disabled, isLoading, tooltipContent, zIndex, showTooltip, Icon, onClick, }: ActionIconButtonProps) => JSX.Element;
