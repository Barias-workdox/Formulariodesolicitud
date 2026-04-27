import { INLINE_INPUT_MODE } from './data-extraction-beta.constants';

import type { MetadataListMode } from './data-extraction-beta.interfaces';
import type { InlineEditInputMode } from '@components/inline-edit-input';
import type { MessageListItemType } from '@components/webdox-ai/interfaces/chat-bot-component.interface';

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
export const inlineInputToggle = (mode: InlineEditInputMode): InlineEditInputMode => {
  const { caption, input } = INLINE_INPUT_MODE;

  return caption === mode ? input : caption;
};

/**
 * Checks if the value of a metadata has been updated.
 */
export const isValueUpdated = ({
  metadataList,
  localValues,
  metadataId,
}: IsValueUpdatedProps): boolean => {
  const foundMetadata = metadataList.find(({ id }) => id === metadataId);

  return localValues[metadataId] !== foundMetadata.value;
};

/**
 * Reset values based on prevMode and localValues
 * if the localValues has been updated we are going to keep it as an input
 * else we are going to keep it as a caption
 */
export const resetValues = ({
  metadataList,
  localValues,
  prevMode,
}: ResetValuesProps): MetadataListMode => {
  return Object.keys(prevMode).reduce((acc, key) => {
    if (isValueUpdated({ metadataList, localValues, metadataId: key })) {
      acc[key] = 'input';
    } else {
      acc[key] = 'caption';
    }

    return acc;
  }, {} as MetadataListMode);
};

/**
 * Maps metadata list to their respective modes.
 */
export const mapMetadataMode = (metadataList: MessageListItemType[]): MetadataListMode => {
  const mode: MetadataListMode = {};

  metadataList.forEach(({ id }) => {
    mode[id] = 'caption';
  });

  return mode;
};

/**
 * Maps metadata list to their respective values.
 */
export const mapMetadataListValue = (
  metadataList: MessageListItemType[],
): Record<string, string> => {
  const metadataListValue: Record<string, string> = {};

  metadataList.forEach(({ id, value }) => {
    metadataListValue[id] = value;
  });

  return metadataListValue;
};
