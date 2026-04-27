import type { ReactElement } from 'react';

import { noop } from 'lodash';

import { useTranslation } from '@components/utils';
import { MessageList } from '@components/webdox-ai/components/message-list';
import { StyledBaseParagraphText } from '@components/webdox-ai/components/styled-base-paragraph-text';

import { ChatMessageLayout } from '../../..';

import { StyledContainer } from './styled-components';

import type { ChatBotChatMessageType } from '@components/webdox-ai/interfaces';
import type {
  MessageListItemType,
  TempAnswerProps,
} from '@components/webdox-ai/interfaces/chat-bot-component.interface';

export type PromptsSuggestionAnswerVariantProps = Pick<ChatBotChatMessageType, 'id' | 'zIndex'> &
  Pick<TempAnswerProps, 'options' | 'onSubmit'>;

/** A Styled list dynamic prompts from consumer and a description */
export const PromptsSuggestionAnswerVariant = ({
  zIndex,
  id,
  onSubmit = noop,
  options = [],
}: PromptsSuggestionAnswerVariantProps): ReactElement => {
  const { t } = useTranslation();

  /** Return with the current answer variant and the payload */
  const handleSubmit = (newValue: MessageListItemType): void => {
    onSubmit('promptsSuggestions', {
      id,
      item: newValue,
    });
  };

  return (
    <ChatMessageLayout kind="primary">
      <StyledContainer>
        <StyledBaseParagraphText>
          {t('webdoxAI.chat.suggestionsAnswer.description')}
        </StyledBaseParagraphText>
        <MessageList
          dataTestId="webdox-ai__suggestions-answer"
          items={options}
          onClick={handleSubmit}
          zIndex={zIndex}
        />
      </StyledContainer>
    </ChatMessageLayout>
  );
};
