import type { DocumentMetadata } from '@components/webdox-ai/interfaces';

/**
 * Type guard to check if an item is a DocumentMetadata
 */
export const isDocumentMetadata = (item: unknown): item is DocumentMetadata => {
  return !!item && typeof item === 'object' && 'uuid' in item && 'keyName' in item;
};
