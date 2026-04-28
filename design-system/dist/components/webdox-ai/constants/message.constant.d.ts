import { MessageListItemType } from '../interfaces/chat-bot-component.interface';
/** All Chat conversation message constants */
export declare class MessageConstants {
    pageRefHtml: string;
    answerReferencesRefHtml: string;
    pageRefBrHtml: string;
    specialAnswerId: {
        readonly editContract: "answer__edit-contract";
        readonly contractKind: "answer__contract-kind";
        readonly suggestions: "answer__suggestions";
        readonly pageChange: "action__page-change";
        readonly textSelectionRange: "action__text-selection-range";
    };
    contractKindPrompt: MessageListItemType;
    suggestionsPrompt: MessageListItemType;
}
export declare const messageConstants: MessageConstants;
