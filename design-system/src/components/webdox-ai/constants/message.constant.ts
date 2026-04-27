import { Idea } from '@carbon/icons-react';

import type { MessageListItemType } from '../interfaces/chat-bot-component.interface';

/** All Chat conversation message constants */
export class MessageConstants {
  public pageRefHtml = 'bai-page';
  public answerReferencesRefHtml = 'bai-references';
  public pageRefBrHtml = 'br';
  public specialAnswerId = {
    editContract: 'answer__edit-contract',
    contractKind: 'answer__contract-kind',
    suggestions: 'answer__suggestions',
    pageChange: 'action__page-change',
    textSelectionRange: 'action__text-selection-range',
  } as const;

  public contractKindPrompt: MessageListItemType = {
    id: this.specialAnswerId.contractKind,
    label: 'webdoxAI.chat.contractKindAnswer.contractSheet',
    Icon: Idea,
    isInternal: true,
  };

  public suggestionsPrompt: MessageListItemType = {
    id: this.specialAnswerId.suggestions,
    label: 'webdoxAI.chat.contractKindAnswer.suggestions',
    Icon: Idea,
    isInternal: true,
  };
}

export const messageConstants = new MessageConstants();
