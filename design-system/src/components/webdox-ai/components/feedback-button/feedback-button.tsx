import { useMemo } from 'react';

import { ThumbsDown, ThumbsUp } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/index';

import { styles } from './feedback-button.styles';

import type {
  FeedbackButtonProps,
  FeedbackKind,
  FeedbackOption,
  FeedbackState,
} from './feedback-button.interfaces';

const allFeedbackOptions: Record<FeedbackState, Record<FeedbackKind, FeedbackOption>> = {
  active: {
    positive: {
      tooltipText: 'feedbackButton.undo',
      Icon: ThumbsUp,
    },
    negative: {
      tooltipText: 'feedbackButton.undo',
      Icon: ThumbsDown,
    },
  },
  inactive: {
    positive: {
      tooltipText: 'feedbackButton.positive',
      Icon: ThumbsUp,
    },
    negative: {
      tooltipText: 'feedbackButton.negative',
      Icon: ThumbsDown,
    },
  },
};

/**
 * Feedback button that returns a tooltip with the thumbs up or thumbs down interaction
 */
export const FeedbackButton = ({
  'data-testid': dataTestId,
  feedbackKind,
  isActive,
  disabled = false,
  isLoading = false,
  showTooltip = true,
  tooltipProps = {},
  zIndex,
  onClick,
}: FeedbackButtonProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useCss();

  const state: FeedbackState = isActive ? 'active' : 'inactive';

  const { Icon, tooltipText } = useMemo(
    () => allFeedbackOptions[state][feedbackKind],
    [feedbackKind, state],
  );

  return (
    <StatefulTooltipNext
      showArrow
      placement="bottom"
      zIndex={zIndex}
      content={showTooltip ? t(tooltipText) : undefined}
      {...tooltipProps}
    >
      <IconButton
        data-testid={dataTestId}
        size="32px"
        disabled={disabled}
        isLoading={isLoading}
        kind="control"
        overrides={{
          BaseButton: {
            style: styles.buttonStyles(theme, { state }),
          },
        }}
        onClick={onClick}
      >
        <Icon />
      </IconButton>
    </StatefulTooltipNext>
  );
};
