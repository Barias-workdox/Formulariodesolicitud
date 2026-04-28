import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import { IconButtonProps } from '../button/variants/icon-button/icon-button.interfaces';
import { StatefulTooltipProps } from '../tooltip';
export type FeedbackKind = 'positive' | 'negative';
export type FeedbackState = 'active' | 'inactive';
export interface FeedbackButtonProps {
    'data-testid': string;
    feedbackKind: FeedbackKind;
    /** If false it is not checked, if true it is checked */
    isActive: boolean;
    /** Render or not the tooltip text. True by default */
    showTooltip?: boolean;
    disabled?: IconButtonProps['disabled'];
    isLoading?: IconButtonProps['isLoading'];
    type?: IconButtonProps['type'];
    /** Override some tooltip section props */
    tooltipProps?: Partial<StatefulTooltipProps>;
    /**
     * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
     *
     * @deprecated Only required for legacy support with `DocumentViewerModal`
     */
    zIndex?: number;
    onClick(): void;
}
export interface FeedbackOption {
    tooltipText: string;
    Icon: CarbonIconType;
}
export interface IUseFeedbackButtonState {
    /** The current state in the feedback button */
    feedbackState: FeedbackState;
    /** Set a newState directly or manage the states uncontrolled */
    toggleFeedbackState(newState?: FeedbackState): void;
}
