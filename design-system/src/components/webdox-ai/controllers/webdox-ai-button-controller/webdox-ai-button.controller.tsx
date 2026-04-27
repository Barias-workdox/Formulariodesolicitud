import { useCallback } from 'react';

import { noop } from '@utils/noop';
import { getOverrideProps } from '@utils/overrides.utils';

import { WebdoxAIButton, WebdoxAIButtonInformationPopover } from '../../components';

import type { WebdoxAIButtonControllerOverrides } from './webdox-ai-button-controller.interfaces';
import type {
  PopoverVariant,
  WebdoxAIButtonInformationPopoverProps,
  WebdoxAIButtonProps,
} from '../../components';
import type { ChatBotUser, WebdoxAIErrorType } from '@components/webdox-ai/interfaces';

// Define the mapping between error types and variants
const errorVariantMap: Record<string, PopoverVariant> = {
  documentEnable: 'processFailedError',
  encryptedDocument: 'encryptedDocument',
  generic: 'genericError',
};

export interface WebdoxAIButtonControllerProps {
  'data-testid': string;
  user: Pick<ChatBotUser, 'firstName'>;
  isLoading: boolean;
  hasError: boolean;
  errorType?: WebdoxAIErrorType;
  overrides?: WebdoxAIButtonControllerOverrides;
  /**
   * This is for scenarios where the user cannot write a question
   * and the chat shortcut popover needs to be hidden.
   */
  isQuestionWritingAllowed?: boolean;
  popoverProps?: Pick<
    WebdoxAIButtonInformationPopoverProps,
    'isOpen' | 'onClose' | 'onOpen' | 'onSendClick' | 'sendTextValue' | 'isDisabled'
  >;
  onClick(): void;
}

/**
 * Component for controlling the behavior of the WebdoxAIButton based on loading and error states.
 */
export const WebdoxAIButtonController = ({
  'data-testid': dataTestId,
  user,
  isLoading,
  hasError,
  errorType,
  overrides,
  popoverProps,
  isQuestionWritingAllowed = true,
  onClick,
}: WebdoxAIButtonControllerProps): JSX.Element => {
  const {
    isOpen = false,
    onClose = noop,
    onOpen = noop,
    onSendClick = noop,
    sendTextValue,
    isDisabled,
  } = popoverProps ?? {};
  const { Button: ButtonOverride, Popover: PopoverOverride } = overrides || {};

  /** Callback function to execute `onClick` function when `isLoading` and `hasError` are false. */
  const handleClick = useCallback((): void => {
    if (!isLoading && !hasError) {
      onClick();
    }
  }, [hasError, isLoading, onClick]);

  const errorPopoverVariant: PopoverVariant | undefined = hasError
    ? (errorVariantMap[errorType] ?? 'genericError')
    : undefined;

  const popoverVariant: PopoverVariant | undefined =
    (isLoading ? 'loading' : errorPopoverVariant) || 'active';

  const shouldOpenActivePopoverVariant =
    popoverVariant === 'active' ? isQuestionWritingAllowed : true;

  /**
   * Callback function to execute `onOpen` function when `popoverVariant` is `active`.
   * it is necesary because when the varian is active, and the user clicks the button, we need to open
   * the brain container modal through the `onOpen` function
   */
  const handleOpen = useCallback((): void => {
    if (popoverVariant === 'active') {
      onClick();
    } else {
      onOpen();
    }
  }, [onClick, onOpen, popoverVariant]);

  const webdoxAIButtonProps: WebdoxAIButtonProps = {
    'data-testid': `${dataTestId}__webdox-ai-button`,
    isLoading,
    hasError,
    onClick: handleClick,
    ...getOverrideProps(ButtonOverride),
  };

  return (
    <WebdoxAIButtonInformationPopover
      data-testid={`${dataTestId}__popover`}
      user={user}
      variant={popoverVariant}
      isOpen={isOpen && shouldOpenActivePopoverVariant}
      onClose={onClose}
      onOpen={handleOpen}
      onSendClick={onSendClick}
      sendTextValue={sendTextValue}
      isDisabled={isDisabled}
      {...getOverrideProps(PopoverOverride)}
    >
      <WebdoxAIButton {...webdoxAIButtonProps} />
    </WebdoxAIButtonInformationPopover>
  );
};
