import { useCallback } from 'react';

import { SendAltFilled } from '@carbon/icons-react';

import { MessageBox } from '@components/message-box/next';
import { StyledAddonsContainer } from '@components/message-box/next/styled-components';
import { Notification } from '@components/notification/next';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { MESSAGE_MAX_LENGTH } from '@components/webdox-ai/constants';
import { usePlanUsage } from '@components/webdox-ai/hooks/plan-usage.hook';
import { getUsagePlanData } from '@components/webdox-ai/utils/webdox-ai-plans.utils';
import { noop } from '@utils/noop';

import { UsagePlanCounter } from '../../plan-usage/plan-usage-counter';

import { ConversationSelectorWithPopoverContainer } from './components/conversation-selector-with-popover';
import { CountryAndAreaSelectorWithPopover } from './components/country-and-area-selector-with-popover';
import {
  StyledConversationSelectorWrapper,
  StyledExtraActionsContainer,
  StyledSettingsContainer,
  StyledUsagePlanContainer,
} from './styled-components';
import { SuggestionList } from './suggestion-list';
import { UnratedAnswerAlert } from './unrated-answer-alert';

import type { MessageBoxValue } from '@components/message-box/next/message-box.interfaces';
import type { SelectProps } from '@components/select/next';
import type { CountryCodeType } from '@components/utils/interfaces';
import type { SuggestionItemType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export type LegalWhisperChatComposerProps = WithTestId<
  WithZIndex<{
    areaOptions: SelectProps['options'];
    selectedArea?: SelectProps['value'];
    countryOptions: CountryCodeType[];
    selectedCountry?: SelectProps['value'];
    disabled: boolean;
    isGeneratingAnswer?: boolean;
    showSuggestionList?: boolean;
    showUnratedAnswerAlert: boolean;
    /**
     * This is used to show the area and country selector and conversation selector.
     */
    showSettingsSelector: boolean;
    suggestionList: SuggestionItemType[];
    onAreaChange: SelectProps['onChange'];
    onCountryChange: SelectProps['onChange'];
    onCreateMessage(content: string): Promise<void>;
    onRateAnswer(): void;
    onSuggestionClick(suggestion: SuggestionItemType): void;
  }>
>;

/**
 * Legal Whisper Chat Composer component
 *
 * This component is used to compose a message for the legal whisper chat.
 * It includes a selector for the area and country, a suggestion list, and a unrated answer alert.
 */
export const LegalWhisperChatComposer = ({
  areaOptions = [],
  selectedArea,
  countryOptions,
  selectedCountry,
  dataTestId = 'chat-composer',
  disabled,
  isGeneratingAnswer,
  showSuggestionList,
  showUnratedAnswerAlert,
  showSettingsSelector,
  suggestionList = [],
  zIndex,
  onAreaChange = noop,
  onCountryChange = noop,
  onCreateMessage,
  onRateAnswer = noop,
  onSuggestionClick = noop,
}: LegalWhisperChatComposerProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useCss();

  const { availablePlans, isPlanUsageActive } = usePlanUsage();

  const { usageStatus, remainingRequests } = getUsagePlanData(availablePlans, 'legal_whisper');

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

  const isSubmitButtonDisabled = disabled || isGeneratingAnswer || !canMakeRequest;
  const canSendWithEnter = !disabled && canMakeRequest && !isGeneratingAnswer;
  const showAddons =
    showSuggestionList || showUnratedAnswerAlert || !canMakeRequest || showSettingsSelector;

  /**
   * Handles the create message in the messages component, executing parent's callback.
   */
  const handleCreateMessage = useCallback(
    (value: MessageBoxValue): void => {
      onCreateMessage?.(value.textValue);
    },
    [onCreateMessage],
  );

  return (
    <>
      <MessageBox
        data-testid={dataTestId}
        autofocus
        width="unset"
        margin={`${theme.spacing.spacingMd} ${theme.spacing.spacingMd} ${theme.spacing.spacingXs}`}
        canSendWithEnter={canSendWithEnter}
        onSubmit={handleCreateMessage}
        placeholder={t('webdoxAI.legalWhisperComposerPlaceholder')}
        disabled={disabled}
        maxLength={MESSAGE_MAX_LENGTH}
        primaryButtonText={t('general.send')}
        primaryButtonIcon={<SendAltFilled />}
        primaryButtonProps={{
          ...(isSubmitButtonDisabled && { disabled: isSubmitButtonDisabled }),
        }}
        extraActions={
          <StyledExtraActionsContainer>
            <StyledUsagePlanContainer>
              {isPlanUsageActive && (
                <UsagePlanCounter
                  availablePlans={availablePlans}
                  planName="legal_whisper"
                />
              )}
            </StyledUsagePlanContainer>
          </StyledExtraActionsContainer>
        }
        addons={
          showAddons && (
            <StyledAddonsContainer>
              {canMakeRequest && showSuggestionList && (
                <SuggestionList
                  dataTestId={`${dataTestId}-suggestion-list`}
                  onClick={onSuggestionClick}
                  items={suggestionList}
                />
              )}
              {showUnratedAnswerAlert && (
                <UnratedAnswerAlert
                  dataTestId={`${dataTestId}__unrated-answer-alert`}
                  onClick={onRateAnswer}
                />
              )}
              {!canMakeRequest && (
                <Notification
                  kind="negative"
                  description={`${t('webdoxAI.planUsage.popovers.planTrial.notification')}`}
                  size="small"
                  closeable={false}
                />
              )}
              {showSettingsSelector && (
                <StyledSettingsContainer>
                  <CountryAndAreaSelectorWithPopover
                    areaOptions={areaOptions}
                    countryOptions={countryOptions}
                    dataTestId={`${dataTestId}__legal-whisper-selector`}
                    onAreaChange={onAreaChange}
                    onCountryChange={onCountryChange}
                    selectedArea={selectedArea}
                    selectedCountry={selectedCountry}
                    zIndex={zIndex}
                  />
                  <StyledConversationSelectorWrapper>
                    <ConversationSelectorWithPopoverContainer
                      dataTestId={`${dataTestId}__conversation-selector`}
                      zIndex={zIndex}
                    />
                  </StyledConversationSelectorWrapper>
                </StyledSettingsContainer>
              )}
            </StyledAddonsContainer>
          )
        }
      />
      <Text
        variant="bodySmall"
        color="neutralStrong"
        textAlign="center"
        margin={`0 0 ${theme.spacing.spacingMd}`}
      >
        {t('webdoxAI.assistantDisclaimer')}
      </Text>
    </>
  );
};
