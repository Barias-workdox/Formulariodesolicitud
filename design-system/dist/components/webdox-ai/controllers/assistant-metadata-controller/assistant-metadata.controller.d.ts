import { ReactElement } from 'react';
import { AssistantTypeProps } from '../../interfaces';
export type AssistantMetadataControllerProps = Pick<AssistantTypeProps, 'contractKind' | 'contractKinds' | 'isContractKindLoading' | 'isMetadataLoading' | 'isPreparingMetadata' | 'metadataList' | 'contractSummary' | 'onContractKindChange' | 'onMetadataItemChange' | 'data-testid' | 'conversationDisabled' | 'zIndex' | 'onSummaryScroll' | 'onContractSummaryCopy' | 'customPrompts' | 'onExecuteCustomPromptAction' | 'isDataExtractionEnabled' | 'onDataExtractionHighlight' | 'onGoToClassificationButtonClick' | 'onGoToEntitiesDirectoryClick'>;
/**
 * The Assistant metadata controller containing the contract
 * form, metadata list and the minimal version of the chat composer
 */
export declare const AssistantMetadataController: (props: AssistantMetadataControllerProps) => ReactElement;
