import type { ReactElement } from 'react';

import { noop } from 'lodash';

import { DSTrans } from '@components/utils/i18n/translation-component';
import { MessageList } from '@components/webdox-ai/components/message-list';
import { StyledBaseParagraphText } from '@components/webdox-ai/components/styled-base-paragraph-text/styled-base-paragraph-text';

import { ChatMessageLayout } from '../../..';
import { StyledBrandText } from '../../styled-components';

import { StyledContainer } from './styled-components';

import type { ChatBotChatMessageType } from '@components/webdox-ai/interfaces';
import type {
  MessageListItemType,
  TempAnswerProps,
} from '@components/webdox-ai/interfaces/chat-bot-component.interface';

export type ContractKindAnswerVariantProps = Pick<ChatBotChatMessageType, 'id' | 'zIndex'> &
  Pick<TempAnswerProps, 'item' | 'options' | 'onSubmit'>;

const BASE_DATA_TEST_ID = 'chat-bot-answer__contract-kind';

/**
 * Styled placeholder answer by the chat bot. It allows the user
 * to confirm if the supplied contract kind is correct or not
 */
export const ContractKindAnswerVariant = ({
  id,
  zIndex,
  item: { label = '' } = {},
  options = [],
  onSubmit = noop,
}: ContractKindAnswerVariantProps): ReactElement => {
  /** Return the current  */
  const handleSubmit = (payload: MessageListItemType): void => {
    onSubmit('contractKind', {
      id,
      item: payload,
    });
  };

  return (
    <ChatMessageLayout kind="primary">
      <StyledContainer>
        <StyledBaseParagraphText>
          <DSTrans
            i18nKey="webdoxAI.chat.contractKindAnswer.description"
            values={{ contractKind: label }}
            tOptions={{ interpolation: { escapeValue: false } }}
            components={{ sp: <StyledBrandText /> }}
          />
        </StyledBaseParagraphText>
        <MessageList
          dataTestId={`${BASE_DATA_TEST_ID}-prompts-list`}
          items={options}
          onClick={handleSubmit}
          zIndex={zIndex}
        />
      </StyledContainer>
    </ChatMessageLayout>
  );
};
