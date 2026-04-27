import { useCallback, useMemo } from 'react';
import type { ReactElement } from 'react';

import { Link } from '@components/link';
import { Markdown } from '@components/markdown';
import { useTranslation } from '@components/utils';
import { ChatMessageMenu } from '@components/webdox-ai/components/chat-message-menu';
import { StyledBaseParagraphText } from '@components/webdox-ai/components/styled-base-paragraph-text';
import { messageConstants } from '@components/webdox-ai/constants';
import { useMessages } from '@components/webdox-ai/hooks';
import { useMessageTableHeaderHover } from '@components/webdox-ai/hooks/use-message-table-header-hover.hook';
import { noop } from '@utils/noop';

import { ChatMessageLayout } from '../../../chat-message-layout';
import { styles } from '../../chat-box-message-item.styles';
import {
  StyledPre,
  StyledPreViewer,
  StyledReferenceWrapper,
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  StyledTableHeaderCell,
  StyledTableViewer,
} from '../../styled-components';
import { AnswerHeader } from '../answer-header';
import { AnswerReferences } from '../answer-references';
import { LegalWhisperQuotesTabs } from '../legal-whisper-quotes-tabs';
import { MarkdownModal } from '../markdown-modal';

import { StyledContainer } from './styled-components';

import type {
  AnswerReference,
  ChatBotChatMessageType,
  ChatMessageEncodedDataType,
} from '@components/webdox-ai/interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export type PersistAnswerVariantProps = WithTestId<
  Pick<
    ChatBotChatMessageType,
    | 'activeAnswerId'
    | 'createdAt'
    | 'feedback'
    | 'id'
    | 'isFeedbackLoading'
    | 'onCopyToClipboardButtonClick'
    | 'onFeedbackButtonClick'
    | 'onRetryAnswerGeneration'
    | 'question'
    | 'quotes'
    | 'selectedAnswerReference'
    | 'showCopyToClipboard'
    | 'showFeedback'
    | 'showRetry'
    | 'suiteAIOption'
    | 'tempProps'
    | 'updateActiveMessage'
    | 'updateAnswerReference'
    | 'value'
    | 'zIndex'
  >
>;

/** The Styled main answer got directly from the Chat Bot */
export const PersistAnswerVariant = ({
  dataTestId = 'persist-answer',
  createdAt,
  activeAnswerId,
  feedback,
  id,
  isFeedbackLoading,
  question,
  quotes,
  selectedAnswerReference,
  showCopyToClipboard,
  showFeedback,
  showRetry,
  suiteAIOption,
  tempProps,
  value = '',
  zIndex,
  onCopyToClipboardButtonClick = noop,
  onFeedbackButtonClick = noop,
  onRetryAnswerGeneration = noop,
  updateActiveMessage = noop,
  updateAnswerReference = noop,
}: PersistAnswerVariantProps): ReactElement => {
  const { value: questionValue, answers = [] } = question || {};
  const [{ references = [] }] = answers;
  const { onSubmit = noop } = tempProps || {};

  const { t } = useTranslation();
  const { isHovered, setIsHeaderHovered, setIsTableMenuHovered } = useMessageTableHeaderHover();

  const { replacedValue, referenceMap } = useMessages({
    value,
    answerReferences: references,
  });

  const isActive = useMemo(() => activeAnswerId === id, [activeAnswerId, id]);

  /** Trigger the persist answer submit event with the page number clicked */
  const handleSubmit = useCallback(
    (page: ChatMessageEncodedDataType['page']): void => {
      onSubmit('persist', {
        item: {
          id: messageConstants.specialAnswerId.pageChange,
          value: String(page),
        },
      });
    },
    [onSubmit],
  );

  /**
   * Callback to update the selected answer reference
   * when the user clicks on a new reference indicator.
   * It also updates the active message to the current one.
   */
  const handleAnswerReferenceClick = useCallback(
    (reference: AnswerReference): void => {
      const selectedReference = references.find(({ id }) => {
        return id === reference.id;
      });

      if (selectedReference) {
        updateAnswerReference(selectedReference);
        updateActiveMessage(id);
      }
    },
    [id, references, updateActiveMessage, updateAnswerReference],
  );

  return (
    <ChatMessageLayout
      kind="primary"
      header={
        <AnswerHeader
          dataTestId={`${dataTestId}__header`}
          createdAt={createdAt}
          suiteAIOption={suiteAIOption}
        />
      }
      footer={
        <ChatMessageMenu
          dataTestId={`webdox-ai__message-footer-${id}`}
          id={id}
          zIndex={zIndex}
          content={value}
          isLoading={isFeedbackLoading}
          selectedFeedback={feedback?.value}
          renderFeedback={showFeedback}
          renderRetry={showRetry}
          renderCopyToClipboard={showCopyToClipboard}
          onFeedbackButtonClick={onFeedbackButtonClick}
          onCopyToClipboardButtonClick={onCopyToClipboardButtonClick}
          onRetryAnswerGeneration={onRetryAnswerGeneration}
        />
      }
    >
      <StyledContainer>
        <StyledBaseParagraphText
          $style={styles.markdownStyles()}
          as="span"
        >
          <Markdown
            extraComponents={{
              [messageConstants.pageRefHtml]: (
                <StyledReferenceWrapper
                  data-testid={`${dataTestId}__reference-wrapper`}
                  onClick={(ev: React.MouseEvent<HTMLSpanElement>) =>
                    handleSubmit(referenceMap[ev.currentTarget.innerHTML])
                  }
                />
              ),
              [messageConstants.answerReferencesRefHtml]: (
                <AnswerReferences
                  selectedReference={isActive ? selectedAnswerReference : undefined}
                  updateSelectedAnswerReference={handleAnswerReferenceClick}
                />
              ),
              table: (
                <MarkdownModal
                  isMenuVisible={isHovered}
                  setIsMenuHovered={setIsTableMenuHovered}
                  questionValue={questionValue}
                  isViewerFullwidth
                  overrides={{
                    MarkdownElement: { component: StyledTable },
                    MarkdownElementViewer: { component: StyledTableViewer },
                  }}
                  isFixed
                  zIndex={zIndex}
                />
              ),
              thead: (
                <StyledTableHeader
                  $isHovered={isHovered}
                  onMouseEnter={() => setIsHeaderHovered(true)}
                  onMouseLeave={() => setIsHeaderHovered(false)}
                />
              ),
              th: <StyledTableHeaderCell />,
              td: <StyledTableCell />,
              a: <Link />,
              pre: (
                <MarkdownModal
                  questionValue={questionValue}
                  zIndex={zIndex}
                  copyButtonTexts={{
                    tooltipText: t('webdoxAI.textCopyToClipboardButton.defaultTooltipText'),
                    copiedTooltipText: t('webdoxAI.textCopyToClipboardButton.copiedTooltipText'),
                    buttonText: t('webdoxAI.textCopyToClipboardButton.defaultText'),
                    copiedButtonText: t('webdoxAI.textCopyToClipboardButton.defaultText'),
                  }}
                  copyText
                  overrides={{
                    MarkdownElement: {
                      component: StyledPre,
                    },
                    MarkdownElementViewer: { component: StyledPreViewer },
                  }}
                />
              ),
            }}
          >
            {replacedValue}
          </Markdown>
          {quotes && (
            <LegalWhisperQuotesTabs
              dataTestId={`${dataTestId}__quotes`}
              quotes={quotes}
              zIndex={zIndex}
            />
          )}
        </StyledBaseParagraphText>
      </StyledContainer>
    </ChatMessageLayout>
  );
};
