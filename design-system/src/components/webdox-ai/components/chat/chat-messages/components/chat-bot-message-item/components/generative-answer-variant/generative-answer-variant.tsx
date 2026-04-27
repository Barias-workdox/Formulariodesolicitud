import type { ReactElement } from 'react';

import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { StyledChatBotGenerativeTextController } from '@components/webdox-ai/components/styled-chat-bot-generative-text-controller';
import { messageConstants } from '@components/webdox-ai/constants';
import { useMessages } from '@components/webdox-ai/hooks';
import { useMessageTableHeaderHover } from '@components/webdox-ai/hooks/use-message-table-header-hover.hook';

import { ChatMessageLayout } from '../../..';
import {
  StyledPre,
  StyledReferenceWrapper,
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  StyledTableHeaderCell,
  StyledTableViewer,
} from '../../styled-components';
import { AnswerReferences } from '../answer-references';
import { MarkdownModal } from '../markdown-modal';

import { styles } from './generative-answer-variant.styles';

import type { ChatBotChatMessageType } from '@components/webdox-ai/interfaces';

export type GenerativeAnswerVariantProps = Pick<
  ChatBotChatMessageType,
  'staticContent' | 'value' | 'question' | 'zIndex'
>;

/** Styled generative text component */
export const GenerativeAnswerVariant = ({
  value = '',
  staticContent = '',
  question,
  zIndex,
}: GenerativeAnswerVariantProps): ReactElement => {
  const { value: questionValue } = question || {};

  const { theme } = useCss();
  const { replacedValue } = useMessages({ value });
  const { t } = useTranslation();
  const { replacedValue: replacedStaticContent } = useMessages({
    value: staticContent,
  });
  const { isHovered, setIsHeaderHovered, setIsTableMenuHovered } = useMessageTableHeaderHover();

  return (
    <ChatMessageLayout kind="primary">
      <StyledChatBotGenerativeTextController
        data-testid="webdox-ai__generative_text_answer"
        generativeText={replacedValue}
        accumulatedText={replacedStaticContent}
        $style={styles.textStyles(theme)}
        markdownProps={{
          extraComponents: {
            [messageConstants.pageRefHtml]: <StyledReferenceWrapper />,
            [messageConstants.answerReferencesRefHtml]: (
              <AnswerReferences
                data-testid="answer-references"
                disabled
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
                  MarkdownElementViewer: { component: StyledPre },
                }}
              />
            ),
          },
        }}
      />
    </ChatMessageLayout>
  );
};
