import type { FunctionComponent } from 'react';

import {
  BrainCompanionChatShortcutContent,
  DefaultContent,
  GenericErrorContent,
  LegalWhisperGenericErrorContent,
  ProcessFailedErrorContent,
} from './components';
import { LegalWhisperChatShortcutContent } from './components/legal-whisper-chat-shortcut-content';

import type { InformationPopoverContentCommonProps } from './information-popover-content.interfaces';
import type { PopoverVariant } from '../../webdox-ai-button-information-popover.interfaces';

const contentTextKeyByPopoverVariant: Partial<Record<PopoverVariant, string>> = {
  legalWhisperGreetings: 'webdoxAI.webdoxAIButton.legalWhisperGreetings.detail',
  loading: 'webdoxAI.webdoxAIButton.documentInProcessInformation.detail',
  suiteAIGreetings: 'webdoxAI.webdoxAIButton.suiteAIGreetings.detail',
  encryptedDocumentError: 'webdoxAI.webdoxAIButton.encryptedDocumentError.detail',
};

const contentByPopoverVariant: Record<
  PopoverVariant,
  FunctionComponent<InformationPopoverContentCommonProps>
> = {
  active: BrainCompanionChatShortcutContent,
  genericError: GenericErrorContent,
  legalWhisperActive: LegalWhisperChatShortcutContent,
  legalWhisperGreetings: DefaultContent,
  loading: DefaultContent,
  processFailedError: ProcessFailedErrorContent,
  suiteAIGreetings: DefaultContent,
  encryptedDocumentError: DefaultContent,
  legalWhisperGenericError: LegalWhisperGenericErrorContent,
};

/**
 * A component that dynamically renders the content of an information popover based on the provided variant.
 *
 * This component selects the appropriate content component and optionally translates associated text.
 * using a translation key mapped to the `popoverVariant`.
 */
export const InformationPopoverContent = (
  props: InformationPopoverContentCommonProps,
): JSX.Element => {
  const { popoverVariant } = props;

  const SelectedContent = contentByPopoverVariant[popoverVariant];
  const selectedContentTextKey = contentTextKeyByPopoverVariant[popoverVariant];

  return <SelectedContent {...props}>{selectedContentTextKey}</SelectedContent>;
};
