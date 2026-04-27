import type { ReactElement } from 'react';

import {
  ContractKindAnswerVariant,
  FirstAnswerVariant,
  PersistAnswerVariant,
  PromptsSuggestionAnswerVariant,
  GenerativeAnswerVariant,
  LoadingAnswerVariant,
  DescriptiveLoadingAnswerVariant,
  SystemAnswerVariant,
  ErrorVariant,
} from './components';

import type {
  ChatBotAnswerVariantV2,
  ChatBotChatMessageType,
} from '@components/webdox-ai/interfaces';

export type ChatBotMessageItemProps = ChatBotChatMessageType;

const allVariants: Record<
  Exclude<ChatBotAnswerVariantV2, 'placeholder'>,
  (props: ChatBotMessageItemProps & ChatBotMessageItemProps['tempProps']) => ReactElement
> = {
  persist: PersistAnswerVariant,
  contractKind: ContractKindAnswerVariant,
  promptsSuggestions: PromptsSuggestionAnswerVariant,
  firstAnswer: FirstAnswerVariant,
  generative: GenerativeAnswerVariant,
  loading: LoadingAnswerVariant,
  descriptiveLoading: DescriptiveLoadingAnswerVariant,
  systemAnswer: SystemAnswerVariant,
  error: ErrorVariant,
} as const;

/** Styled chat message for the chat bot interaction. Some of them are front-only with special answers */
export const ChatBotMessageItem = ({ ...props }: ChatBotMessageItemProps): ReactElement => {
  const { id, variant = 'persist', tempProps } = props;

  const Component = allVariants[variant];

  return (
    <Component
      dataTestId={id}
      variant={variant}
      {...props}
      {...tempProps}
    />
  );
};
