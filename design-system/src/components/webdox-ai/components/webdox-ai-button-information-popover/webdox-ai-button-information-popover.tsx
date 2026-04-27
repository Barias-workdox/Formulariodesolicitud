import type { FunctionComponent } from 'react';

import { noop } from '@utils/noop';

import { ChatShortcutInformationPopover } from './components/chat-shortcut-information-popover';
import { DocumentProcessingInformationPopover } from './components/document-processing-information-popover';
import { EncryptedDocumentErrorInformationPopover } from './components/encrypted-document-error-information-popover';
import { GenericErrorInformationPopover } from './components/generic-error-information-popover';
import { LegalWhisperGreetingsInformationPopover } from './components/legal-whisper-greetings-information-popover';
import { ProcessFailedErrorInformationPopover } from './components/process-failed-error-information-popover';
import { SuiteAIGreetingsInformationPopover } from './components/suite-ai-greetings-information-popover';

import type {
  InformationPopoverCommonProps,
  PopoverVariant,
} from './webdox-ai-button-information-popover.interfaces';

export interface WebdoxAIButtonInformationPopoverProps extends Omit<
  InformationPopoverCommonProps,
  'isOpen' | 'close'
> {
  variant: PopoverVariant;
  isOpen: boolean;
  onClose(): void;
  onOpen?(): void;
}

/**
 * A component that renders an information popover based on the provided variant.
 *
 * @deprecated - This component is deprecated because it does not preserve the instance of
 * its children, causing issues with animations and state retention.
 * Use the new `WebdoxAIButtonInformationPopover` component instead located in the file `./next`,
 * which resolves these issues and provides better performance.
 */
export const WebdoxAIButtonInformationPopover = ({
  'data-testid': dataTestId,
  user,
  variant,
  children,
  overrides,
  isOpen,
  onClose,
  onOpen = noop,
  ...rest
}: WebdoxAIButtonInformationPopoverProps): JSX.Element => {
  const popoverVariants: Record<
    PopoverVariant,
    FunctionComponent<InformationPopoverCommonProps>
  > = {
    active: ChatShortcutInformationPopover,
    loading: DocumentProcessingInformationPopover,
    genericError: GenericErrorInformationPopover,
    processFailedError: ProcessFailedErrorInformationPopover,
    legalWhisperGreetings: LegalWhisperGreetingsInformationPopover,
    suiteAIGreetings: SuiteAIGreetingsInformationPopover,
    encryptedDocument: EncryptedDocumentErrorInformationPopover,
  };

  const SelectedPopoverVariant = popoverVariants[variant];

  return (
    <SelectedPopoverVariant
      data-testid={dataTestId}
      user={user}
      overrides={overrides}
      isOpen={isOpen}
      onClick={onOpen}
      close={onClose}
      onClickOutside={onClose}
      onEsc={onClose}
      {...rest}
    >
      {children}
    </SelectedPopoverVariant>
  );
};
