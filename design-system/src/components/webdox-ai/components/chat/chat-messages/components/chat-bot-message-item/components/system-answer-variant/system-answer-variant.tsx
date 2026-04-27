import type { ReactElement } from 'react';

import { StyledBaseParagraphText } from '@components/webdox-ai/components/styled-base-paragraph-text/styled-base-paragraph-text';

import { ChatMessageLayout } from '../../..';

import type { ChatBotChatMessageType } from '@components/webdox-ai/interfaces';

export type SystemAnswerVariantProps = Pick<ChatBotChatMessageType, 'value' | 'tempProps'>;

/** The Styled main answer got directly from the Chat Bot */
export const SystemAnswerVariant = ({
  value,
  tempProps,
}: SystemAnswerVariantProps): ReactElement => {
  const { title, footerText } = tempProps || {};

  return (
    <ChatMessageLayout kind="primary">
      {title && <StyledBaseParagraphText fontWeight="700">{title}</StyledBaseParagraphText>}
      <StyledBaseParagraphText>{value}</StyledBaseParagraphText>
      {footerText && (
        <StyledBaseParagraphText
          marginTop="24px"
          color="neutral"
        >
          {footerText}
        </StyledBaseParagraphText>
      )}
    </ChatMessageLayout>
  );
};
