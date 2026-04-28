import { MetadataListMode } from './data-extraction-beta.interfaces';
import { InlineEditInputMode } from '../../../../../inline-edit-input';
import { MessageListItemType } from '../../../../interfaces/chat-bot-component.interface';
export interface IsValueUpdatedProps {
    metadataList: MessageListItemType[];
    localValues: Record<string, string>;
    metadataId: string;
}
export interface ResetValuesProps {
    prevMode: MetadataListMode;
    metadataList: MessageListItemType[];
    localValues: Record<string, string>;
}
/**
 * Toggles between inline edit input modes.
 */
export declare const inlineInputToggle: (mode: InlineEditInputMode) => InlineEditInputMode;
/**
 * Checks if the value of a metadata has been updated.
 */
export declare const isValueUpdated: ({ metadataList, localValues, metadataId, }: IsValueUpdatedProps) => boolean;
/**
 * Reset values based on prevMode and localValues
 * if the localValues has been updated we are going to keep it as an input
 * else we are going to keep it as a caption
 */
export declare const resetValues: ({ metadataList, localValues, prevMode, }: ResetValuesProps) => MetadataListMode;
/**
 * Maps metadata list to their respective modes.
 */
export declare const mapMetadataMode: (metadataList: MessageListItemType[]) => MetadataListMode;
/**
 * Maps metadata list to their respective values.
 */
export declare const mapMetadataListValue: (metadataList: MessageListItemType[]) => Record<string, string>;
