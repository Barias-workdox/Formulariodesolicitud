import type { PopoverVariantNext } from '../../components';
import type { WebdoxAIErrorType, WebdoxAIOptionType } from '@components/webdox-ai/interfaces';

export const GENERIC_ERROR_POPOVER_VARIANT_MAP: Record<WebdoxAIOptionType, PopoverVariantNext> = {
  brainCompanion: 'genericError',
  legalWhisper: 'legalWhisperGenericError',
};

export const ERROR_POPOVER_VARIANT_MAP: Partial<
  Record<WebdoxAIOptionType, Partial<Record<WebdoxAIErrorType, PopoverVariantNext>>>
> = {
  brainCompanion: {
    documentEnable: 'processFailedError',
    encryptedDocument: 'encryptedDocumentError',
  },
};

export const LOADING_POPOVER_VARIANT_MAP: Record<WebdoxAIOptionType, PopoverVariantNext> = {
  brainCompanion: 'loading',
  legalWhisper: 'legalWhisperGreetings',
};

export const ACTIVE_POPOVER_VARIANT_MAP: Record<WebdoxAIOptionType, PopoverVariantNext> = {
  brainCompanion: 'active',
  legalWhisper: 'legalWhisperActive',
};
