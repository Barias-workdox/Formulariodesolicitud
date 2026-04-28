import { AssistantTypeProps } from '../../interfaces';
export type AssistantControllerProps = AssistantTypeProps;
/**
 * Chat full assistant controller, containing a tab layout with a
 * conversation tab and a metadata extraction one.
 *
 * Will trigger callbacks to the parent on each applied action.
 *
 * The controller will handle the routing by itself.
 * The conversation state is handled by the parent.
 * Each view's state are managed by boolean values
 */
export declare const AssistantController: ({ contractKinds: rawContractKinds, contractKind: rawContractKind, metadataList: rawMetadataList, selectedTab, selectedAIService, showLegalWhisper, isQuestionWritingAllowed, onClose, onAIServiceChange, onClickDynamicView, availablePlans, isPlanUsageActive, legalWhisperController, ...restProps }: AssistantControllerProps) => JSX.Element;
