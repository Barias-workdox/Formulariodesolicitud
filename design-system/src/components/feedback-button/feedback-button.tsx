import { useMemo } from 'react';

import { ThumbsDown, ThumbsDownFilled, ThumbsUp, ThumbsUpFilled } from '@carbon/icons-react';

import { IconButton } from '@components/button/index';
import { StatefulTooltip } from '@components/tooltip/index';
import { useTranslation } from '@components/utils/index';

import type {
  FeedbackButtonProps,
  FeedbackKind,
  FeedbackOption,
  FeedbackState,
} from './feedback-button.interfaces';

const allFeedbackOptions: Record<FeedbackKind, Record<FeedbackState, FeedbackOption>> = {
  positive: {
    inactive: {
      tooltipText: 'feedbackButton.positive',
      Icon: ThumbsUp,
    },
    active: {
      tooltipText: 'feedbackButton.undo',
      Icon: ThumbsUpFilled,
    },
  },
  negative: {
    inactive: {
      tooltipText: 'feedbackButton.negative',
      Icon: ThumbsDown,
    },
    active: {
      tooltipText: 'feedbackButton.undo',
      Icon: ThumbsDownFilled,
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
  type = 'button',
  tooltipProps = {},
  zIndex,
  onClick,
}: FeedbackButtonProps): JSX.Element => {
  const { t } = useTranslation();

  const state: FeedbackState = isActive ? 'active' : 'inactive';

  const { Icon, tooltipText } = useMemo(
    () => allFeedbackOptions[feedbackKind][state],
    [feedbackKind, state],
  );

  return (
    <StatefulTooltip
      showArrow
      placement="bottom"
      zIndex={zIndex}
      content={showTooltip ? t(tooltipText) : undefined}
      {...tooltipProps}
    >
      <IconButton
        data-testid={dataTestId}
        disabled={disabled}
        isLoading={isLoading}
        type={type}
        size="32px"
        kind="control"
        onClick={onClick}
      >
        <Icon />
      </IconButton>
    </StatefulTooltip>
  );
};
