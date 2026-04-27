import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { ButtonProps } from '@components/button/index';
import type { StatefulTooltipProps } from '@components/tooltip';
import type { WithZIndex } from '@interfaces/common.interfaces';

export type FeedbackKind = 'positive' | 'negative';

export type FeedbackState = 'active' | 'inactive';

export interface FeedbackButtonProps extends WithZIndex {
  'data-testid': string;
  feedbackKind: FeedbackKind;
  /** If false it is not checked, if true it is checked */
  isActive: boolean;
  /** Render or not the tooltip text. True by default */
  showTooltip?: boolean;
  disabled?: ButtonProps['disabled'];
  isLoading?: ButtonProps['isLoading'];
  /** Override some tooltip section props */
  tooltipProps?: Partial<StatefulTooltipProps>;
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
