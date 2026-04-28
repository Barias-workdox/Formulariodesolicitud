import { AssistantTypeProps } from '../../../../interfaces';
export type DataExtractionBetaProps = Pick<AssistantTypeProps, 'contractKind' | 'contractKinds' | 'data-testid' | 'isContractKindLoading' | 'isMetadataLoading' | 'isPreparingMetadata' | 'metadataList' | 'onContractKindChange' | 'onMetadataItemChange' | 'zIndex'>;
/**
 * Component for displaying a chat contract summary form.
 */
export declare const DataExtractionBeta: ({ "data-testid": dataTestId, contractKind, contractKinds, isContractKindLoading, isMetadataLoading, isPreparingMetadata, metadataList, onContractKindChange, onMetadataItemChange, zIndex, }: DataExtractionBetaProps) => JSX.Element;
