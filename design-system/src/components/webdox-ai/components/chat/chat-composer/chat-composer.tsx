import { useCallback, useState } from 'react';
import type { ReactElement } from 'react';

import { SendAltFilled, StopOutline } from '@carbon/icons-react';

import { MessageBox } from '@components/message-box/next';
import { QuickActionsPlugin } from '@components/message-box/next/plugins';
import { Notification } from '@components/notification/next';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { CustomPromptAction, MESSAGE_MAX_LENGTH } from '@components/webdox-ai/constants';
import { usePlanUsage } from '@components/webdox-ai/hooks/plan-usage.hook';
import { getUsagePlanData } from '@components/webdox-ai/utils/webdox-ai-plans.utils';
import { noop } from '@utils/noop';

import { AddCustomPromptButtonContainer } from '../../add-custom-prompt-button';
import { UsagePlanCounter } from '../../plan-usage';
import { PromptQuickActions } from '../../prompt-quick-actions';

import { SuggestionsButton } from './components/suggestions-button';
import { StyledExtraActionsContainer, StyledUsagePlanContainer } from './styled-components';

import type { MessageBoxValue } from '@components/message-box/next/message-box.interfaces';
import type { ChatBotMessageTypePropsV2, CustomPrompt } from '@components/webdox-ai/interfaces';

export type ChatComposerProps = Pick<
  ChatBotMessageTypePropsV2,
  | 'zIndex'
  | 'onCreateMessage'
  | 'onSuggestionsClick'
  | 'onSuggestionClick'
  | 'data-testid'
  | 'disabled'
  | 'isSuggestionsLoading'
  | 'isGeneratingAnswer'
  | 'onStopAnswerGeneration'
  | 'onLegalWhisperAreaChange'
  | 'onLegalWhisperCountryChange'
  | 'isQuestionWritingAllowed'
  | 'customPrompts'
  | 'onExecuteCustomPromptAction'
> & { placeholder?: string; showStopButton?: boolean };

/** Chat messages composer component */
export const ChatComposer = ({
  'data-testid': dataTestId = 'chat-composer',
  customPrompts = [],
  disabled,
  isGeneratingAnswer,
  isQuestionWritingAllowed = true,
  isSuggestionsLoading = false,
  placeholder,
  showStopButton = true,
  zIndex,
  onCreateMessage,
  onExecuteCustomPromptAction = noop,
  onStopAnswerGeneration = noop,
  onSuggestionsClick,
}: ChatComposerProps): ReactElement => {
  const [composerDefaultValue, setComposerDefaultValue] = useState<string>('');
  const [lastComposerDefaultValue, setLastComposerDefaultValue] = useState<string>('');
  const [isCustomPromptsPopoverOpen, setIsCustomPromptsPopoverOpen] = useState(false);
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);

  const { t } = useTranslation();
  const { theme } = useCss();

  const { availablePlans, isPlanUsageActive } = usePlanUsage();

  const { usageStatus, remainingRequests } = getUsagePlanData(availablePlans, 'brain_companion');

  /**
   * The user can make a request if:
   * 1. The plan feature control is NOT active (usage limits are not enforced yet)
   * OR
   * 2. The plan feature control IS active and:
   *    - the user's plan is not exhausted
   *    - and the user has remaining credits
   *
   * At the moment, all resources cost 1 unit,
   * so remaining === 0 means the request must be blocked.
   */
  const canMakeRequest =
    !isPlanUsageActive || (usageStatus !== 'exhausted' && remainingRequests !== 0);

  const canStopAnswerGeneration = showStopButton && isGeneratingAnswer;
  const isSubmitButtonDisabled = canStopAnswerGeneration ? false : disabled || isGeneratingAnswer;
  const canSendWithEnter =
    !disabled && canMakeRequest && !isQuickActionsOpen && !isGeneratingAnswer;

  /**
   * Handles the create message in the messages component, executing parent's callback.
   * Async / await required to clean the composer value, otherwise it persists
   */
  const handleCreateMessage = useCallback(
    (value: MessageBoxValue): void => {
      setLastComposerDefaultValue(value.HTMLValue);
      setComposerDefaultValue('');
      onCreateMessage?.(value.textValue);
    },
    [onCreateMessage],
  );

  /**
   * To stop answer generation when  stop button is clicked.
   */
  const handleStopAnswerGeneration = useCallback(() => {
    onStopAnswerGeneration();
    setComposerDefaultValue(lastComposerDefaultValue);
    setLastComposerDefaultValue('');
  }, [onStopAnswerGeneration, lastComposerDefaultValue]);

  /**
   * To handle the custom prompt selection.
   * It sets the composer value to the selected custom prompt content.
   */
  const handleCustomPromptClick = useCallback(
    (customPrompt: CustomPrompt): void => {
      setIsCustomPromptsPopoverOpen(false);
      onExecuteCustomPromptAction(CustomPromptAction.Select, customPrompt);
      setComposerDefaultValue(customPrompt.content);
    },
    [onExecuteCustomPromptAction],
  );

  return (
    <>
      <MessageBox
        autofocus
        data-testid={`${dataTestId}__message-box`}
        width="unset"
        margin={`${theme.spacing.spacingMd} ${theme.spacing.spacingMd} ${theme.spacing.spacingXs}`}
        canSendWithEnter={canSendWithEnter}
        isReadOnly={!isQuestionWritingAllowed}
        onSubmit={canStopAnswerGeneration ? handleStopAnswerGeneration : handleCreateMessage}
        placeholder={placeholder}
        defaultValue={composerDefaultValue}
        disabled={disabled}
        maxLength={MESSAGE_MAX_LENGTH}
        primaryButtonText={canStopAnswerGeneration ? t('general.stop') : t('general.send')}
        primaryButtonIcon={canStopAnswerGeneration ? <StopOutline /> : <SendAltFilled />}
        primaryButtonProps={{
          ...((canStopAnswerGeneration || isSubmitButtonDisabled) && {
            disabled: isSubmitButtonDisabled,
          }),
          ...(!canMakeRequest && { disabled: true }),
        }}
        plugins={[
          QuickActionsPlugin({
            customRender: (query) => (
              <PromptQuickActions
                filterValue={query}
                allOptions={customPrompts}
                handleChange={(selectedPrompt) => setComposerDefaultValue(selectedPrompt)}
                zIndex={zIndex}
                isOpen={isQuickActionsOpen}
                setIsOpen={setIsQuickActionsOpen}
              />
            ),
          }),
        ]}
        addons={
          !canMakeRequest && (
            <Notification
              kind="negative"
              description={`${t('webdoxAI.planUsage.popovers.planTrial.notification')}`}
              size="small"
              closeable={false}
            />
          )
        }
        extraActions={
          <StyledExtraActionsContainer>
            <AddCustomPromptButtonContainer
              customPrompts={customPrompts}
              dataTestId={`${dataTestId}__custom-prompts-button`}
              isEditingDisabled={isQuestionWritingAllowed}
              isOpen={isCustomPromptsPopoverOpen}
              onClose={() => setIsCustomPromptsPopoverOpen(false)}
              onCustomPromptClick={handleCustomPromptClick}
              onOpen={() => setIsCustomPromptsPopoverOpen(true)}
              zIndex={zIndex}
            />
            <SuggestionsButton
              dataTestId={dataTestId}
              isLoading={disabled || isSuggestionsLoading}
              onClick={onSuggestionsClick}
            />
            <StyledUsagePlanContainer>
              {isPlanUsageActive && (
                <UsagePlanCounter
                  availablePlans={availablePlans}
                  planName="brain_companion"
                />
              )}
            </StyledUsagePlanContainer>
          </StyledExtraActionsContainer>
        }
      />
      <Text
        variant="microCopy"
        color="neutralStrong"
        textAlign="center"
        margin={`0 0 ${theme.spacing.spacingMd}`}
      >
        {t('webdoxAI.assistantDisclaimer')}
      </Text>
    </>
  );
};
