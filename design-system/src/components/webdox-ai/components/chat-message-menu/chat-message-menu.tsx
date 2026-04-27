import { useMemo } from 'react';

import { Renew } from '@carbon/icons-react';

import { CopyToClipboardButton } from '@components/webdox-ai/components/copy-to-clipboard-button';
import { FeedbackButton } from '@components/webdox-ai/components/feedback-button';

import { FooterMessageButton } from '../footer-message-button/footer-message-button';

import { StyledContainer } from './styled-components';

import type { ChatBotCopyToClipboardPayload } from '../../../interfaces/webdox-ai.interfaces';
import type { ButtonProps } from '@components/button';
import type { FeedbackKind } from '@components/webdox-ai/components/feedback-button';
import type { ChatBotChatMessageType } from '@components/webdox-ai/interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export interface ChatMessageMenuProps extends WithZIndex, WithTestId {
  id: ChatBotChatMessageType['id'];
  content: ChatBotChatMessageType['value'];
  /** If a feedback is submitted, the selected option will be rendered without more interactions */
  selectedFeedback?: FeedbackKind;
  /** If some feedback query is loading, the feedbacks should be disabled */
  isLoading?: boolean;
  /** If true will render the feedback icon buttons */
  renderFeedback?: boolean;
  /** If true will render the retry button */
  renderRetry?: boolean;
  /** If true will render the copy to clipboard button */
  renderCopyToClipboard?: boolean;
  buttonKind?: ButtonProps['kind'];
  /** Triggers when the user clicks the copy to clipboard button on a chatbot's message */
  onCopyToClipboardButtonClick(payload: ChatBotCopyToClipboardPayload, isError?: boolean): void;
  /** Triggers when the positive or negative feedback button is clicked */
  onFeedbackButtonClick(id: ChatBotChatMessageType['id'], kind: FeedbackKind): void;
  /** Triggers when the retry button is clicked */
  onRetryAnswerGeneration(data: Pick<ChatBotChatMessageType, 'id'>): void;
}

/**
 * The Webdox AI chat menu for each message. Will only apply for
 * bot messages
 *
 */
export const ChatMessageMenu = ({
  dataTestId,
  id,
  content = '',
  zIndex,
  isLoading = false,
  selectedFeedback,
  renderFeedback = true,
  renderCopyToClipboard = true,
  renderRetry = false,
  onFeedbackButtonClick,
  onCopyToClipboardButtonClick,
  onRetryAnswerGeneration,
}: ChatMessageMenuProps): JSX.Element => {
  const isPositiveFeedback = useMemo(() => selectedFeedback === 'positive', [selectedFeedback]);
  const isNegativeFeedback = useMemo(() => selectedFeedback === 'negative', [selectedFeedback]);

  const disabled = isLoading;

  /** Triggers on copy to clipboard user interaction */
  const handleOnCopyToClipboardButtonClick = (isError?: boolean): void => {
    onCopyToClipboardButtonClick({ id }, isError);
  };

  return (
    <StyledContainer>
      {renderFeedback && (
        <>
          <FeedbackButton
            data-testid={`${dataTestId}--positive-feedback-button-${id}`}
            feedbackKind="positive"
            isActive={isPositiveFeedback}
            onClick={(): void => onFeedbackButtonClick(id, 'positive')}
            disabled={isLoading}
            tooltipProps={{ placement: 'bottomRight' }}
            zIndex={zIndex}
          />

          <FeedbackButton
            data-testid={`${dataTestId}--negative-feedback-button-${id}`}
            feedbackKind="negative"
            tooltipProps={{ placement: 'bottomRight' }}
            isActive={isNegativeFeedback}
            onClick={(): void => onFeedbackButtonClick(id, 'negative')}
            disabled={disabled}
            zIndex={zIndex}
          />
        </>
      )}
      {renderCopyToClipboard && (
        <CopyToClipboardButton
          data-testid={`${dataTestId}--copy-to-clipboard-button-${id}`}
          value={content}
          tooltipProps={{ placement: 'bottomRight' }}
          zIndex={zIndex}
          buttonKind="control"
          onCopy={handleOnCopyToClipboardButtonClick}
        />
      )}
      {renderRetry && (
        <FooterMessageButton
          data-testid={`${dataTestId}--retry-button-${id}`}
          onClick={() => onRetryAnswerGeneration({ id })}
          tooltipText="general.regenerate"
          buttonKind="control"
        >
          <Renew />
        </FooterMessageButton>
      )}
    </StyledContainer>
  );
};
