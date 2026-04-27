import { useRef } from 'react';
import type { FormEvent } from 'react';

import { SendAlt } from '@carbon/icons-react';
import { useClickAway } from 'react-use';

import { Button } from '@components/button';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';
import { useMessageComposer } from '@hooks/use-message-composer';
import { noop } from '@utils/noop';

import { ExpandButton, MessageBoxTextarea } from './components';
import {
  StyledExtraActionsContainer,
  StyledFooter,
  StyledRoot,
  StyledTextBoxContainer,
  StyledTooltipAnchorContainer,
} from './styled-components';

import type { ButtonProps } from '@components/button';
import type { StatefulTooltipNextProps } from '@components/tooltip-next';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export interface MessageBoxProps extends WithTestId, WithZIndex {
  /** Reference to additional elements used to determine if the message box should close when clicking outside. */
  addonsRef?: React.RefObject<HTMLDivElement>;
  buttonProps?: Pick<ButtonProps, 'kind' | 'startEnhancer' | 'endEnhancer' | 'disabled'> & {
    text?: string;
  };
  closeOnClickAway?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  /** Indicates when the message box is at full height. */
  isExpanded: boolean;
  isLoading?: boolean;
  /** Indicates when the message box is open and ready for use, also showing action buttons. */
  isOpen: boolean;
  infoTooltip?: StatefulTooltipNextProps['content'];
  isWritingDisabled?: boolean;
  extraActions?: React.ReactNode;
  placeholder?: string;
  maxLength?: number;
  onCreate?(value: string): void;
  setIsExpanded(isExpanded: boolean): void;
  setIsOpen(isOpen: boolean): void;
}

/**
 * This component renders a message box with a textarea for composing messages. It includes functionality
 * for expanding and collapsing the textarea, and handles input, paste, and key down events.
 *
 * @deprecated Use the new MessageBox component instead.
 */
export const MessageBox = ({
  'data-testid': dataTestId,
  addonsRef,
  buttonProps,
  closeOnClickAway = true,
  defaultValue,
  disabled,
  isExpanded,
  isLoading,
  isOpen,
  infoTooltip,
  isWritingDisabled,
  extraActions,
  placeholder,
  zIndex,
  maxLength,
  onCreate = noop,
  setIsExpanded = noop,
  setIsOpen = noop,
}: MessageBoxProps): JSX.Element => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLDivElement>(null);

  const { handleChange, handleCreate, handleKeyDown, handlePaste, isEmpty, textareaRef, value } =
    useMessageComposer({
      defaultValue,
      maxLength,
      onCreate: (value) => {
        if (isExpanded) {
          setIsExpanded(false);
        }

        onCreate(value);
      },
      onEscape: () => {
        if (isExpanded) {
          setIsExpanded(false);
        } else {
          setIsOpen(false);
        }
      },
    });

  const { text: textButton, ...restButtonProps } = buttonProps || {};

  const isButtonDisabled = isEmpty || isLoading;

  useClickAway(rootRef, (event) => {
    const isAddonsEvent = addonsRef?.current && addonsRef.current.contains(event.target as Node);
    const isCloseableState = !isExpanded && isOpen;
    const shouldClose = closeOnClickAway && isEmpty && isCloseableState && !isAddonsEvent;

    if (shouldClose) {
      setIsOpen(false);
    }
  });

  /**
   * Handles input events in the textarea.
   *
   * This function is triggered whenever there is an input event in the textarea.
   * It toggles the message box if it is not already toggled, and updates the message value.
   */
  const handleInput = (event: FormEvent<HTMLDivElement>): void => {
    if (!isOpen) {
      setIsOpen(true);
    }

    if (!isWritingDisabled) {
      handleChange(event.currentTarget.textContent || '');
    }
  };

  return (
    <StyledRoot
      data-testid={`${dataTestId}--root`}
      ref={rootRef}
      $isOpen={isOpen}
      $isExpanded={isExpanded}
      $disabled={disabled}
      onClick={() => !disabled && setIsOpen(true)}
      $overflow="visible"
    >
      {isOpen && (
        <ExpandButton
          data-testid={`${dataTestId}--${isExpanded ? 'collapse' : 'expand'}-button`}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      )}
      <StatefulTooltipNext
        content={infoTooltip}
        zIndex={zIndex}
        showArrow
        placement="top"
      >
        <StyledTooltipAnchorContainer>
          <StyledTextBoxContainer $isExpanded={isExpanded}>
            <MessageBoxTextarea
              data-testid={`${dataTestId}--textarea`}
              disabled={disabled || isWritingDisabled}
              ref={textareaRef}
              value={value}
              placeholder={placeholder}
              onInput={handleInput}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
            />
          </StyledTextBoxContainer>
          {isOpen && (
            <StyledFooter>
              {extraActions && (
                <StyledExtraActionsContainer>{extraActions}</StyledExtraActionsContainer>
              )}
              <Button
                data-testid={`${dataTestId}--send-button`}
                kind="primary"
                size="32px"
                disabled={isButtonDisabled}
                onClick={handleCreate}
                isLoading={isLoading}
                startEnhancer={<SendAlt />}
                {...restButtonProps}
              >
                {textButton || t('general.send')}
              </Button>
            </StyledFooter>
          )}
        </StyledTooltipAnchorContainer>
      </StatefulTooltipNext>
    </StyledRoot>
  );
};
