import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactElement } from 'react';

import { Chat, DataViewAlt } from '@carbon/icons-react';

import { LoadingWrapperOverlayed } from '@components/loading-wrapper/variants/loading-wrapper-overlayed/loading-wrapper-overlayed';
import { useTranslation } from '@components/utils';
import {
  assistantConstants,
  conversationConstants,
  messageConstants,
} from '@components/webdox-ai/constants';
import { noop } from '@utils/noop';

import { AssistantLayout } from '../../components';
import { CustomPromptModalsProvider } from '../../providers/custom-prompt-modals.provider';
import { PlanUsageProvider } from '../../providers/plan-usage.provider';
import { conversationUtils } from '../../utils/conversation.util';
import { AssistantChatController } from '../assistant-chat.controller';
import { AssistantMetadataController } from '../assistant-metadata-controller';

import type { AssistantLayoutProps } from '../../components';
import type { TFunction } from '@components/utils';
import type { AssistantTypeProps } from '@components/webdox-ai/interfaces';
import type {
  MessageListItemType,
  TempAnswerSubmitCallbackType,
} from '@components/webdox-ai/interfaces/chat-bot-component.interface';

export type AssistantControllerProps = AssistantTypeProps;

/** Get the contract kind with i18n texts */
const getContractKindI18n = (
  contractKind: MessageListItemType,
  t: TFunction,
): MessageListItemType => ({
  ...contractKind,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - it is correct but i18next wont allow strings
  label: t(`webdoxAI.dataExtraction.contractTypes.${contractKind.label}`, {
    defaultValue: contractKind.label,
    ignoreErrors: true,
  }),
});

/**
 * Chat full assistant controller, containing a tab layout with a
 * conversation tab and a metadata extraction one.
 *
 * Will trigger callbacks to the parent on each applied action.
 *
 * The controller will handle the routing by itself.
 * The conversation state is handled by the parent.
 * Each view's state are managed by boolean values
 */
export const AssistantController = ({
  contractKinds: rawContractKinds,
  contractKind: rawContractKind,
  metadataList: rawMetadataList,
  selectedTab = assistantConstants.assistantTabs.metadata,
  selectedAIService = 'brainCompanion',
  showLegalWhisper = false,
  isQuestionWritingAllowed = true,
  onClose,
  onAIServiceChange = noop,
  onClickDynamicView = noop,
  availablePlans = [],
  isPlanUsageActive = false,
  legalWhisperController,
  ...restProps
}: AssistantControllerProps): JSX.Element => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState<AssistantLayoutProps['selectedOption']>([
    assistantConstants.assistantOptions[0],
  ]);

  const {
    'data-testid': dataTestId,
    isLoading,
    onTabChange,
    conversationDisabled,
    onTempAnswerSubmit = (): void => undefined,
    isPreparingConversation,
    isPreparingDocument,
    conversationDispatch = noop,
    conversation: { questions = [] } = {},
    prompts,
    isConversationEmpty,
    onExecuteCustomPromptAction,
    zIndex,
  } = restProps;

  const selectedOptionId = selectedOption?.[0]?.id;

  const contractKinds = useMemo(
    () => rawContractKinds.map((item) => getContractKindI18n(item, t)),
    [rawContractKinds, t],
  );
  const contractKind = useMemo(
    () => (rawContractKind !== undefined ? getContractKindI18n(rawContractKind, t) : undefined),
    [rawContractKind, t],
  );
  const metadataList = useMemo(
    () =>
      rawMetadataList.map((metadata) => {
        return {
          ...metadata,
          label: t(`webdoxAI.dataExtraction.metadata.${metadata.label}`, {
            ignoreErrors: true,
            defaultValue: metadata.label,
          }),
        };
      }),
    [rawMetadataList, t],
  );

  /**
   * Handle some front related answers that change the view selected route
   *
   * Also, if the conversation has a loading answer, will not trigger the callback
   */
  const handleTempAnswerSubmit = useCallback<TempAnswerSubmitCallbackType>(
    (variant, payload): void => {
      const { item } = payload ?? {};
      if (
        [
          messageConstants.specialAnswerId.editContract,
          messageConstants.specialAnswerId.contractKind,
        ].some((current) => current === item?.id)
      ) {
        onTabChange({ activeKey: assistantConstants.assistantTabs.metadata });
      }

      if (!conversationDisabled) {
        onTempAnswerSubmit(variant, payload);
      }
    },
    [conversationDisabled, onTabChange, onTempAnswerSubmit],
  );

  const commonTabProps = {
    ...restProps,
    selectedTab,
    contractKind,
    contractKinds,
    metadataList,
    disabled: conversationDisabled,
    isQuestionWritingAllowed,
    onTabChange,
    onTempAnswerSubmit: handleTempAnswerSubmit,
  };

  /**
   * Each time the document and the conversation are prepared and the conversation is empty, will trigger the
   * contract kind answer
   * it should run only with brain companion
   */
  useEffect(() => {
    if (
      !isPreparingConversation &&
      !isPreparingDocument &&
      isConversationEmpty &&
      conversationUtils.findQuestionByVariant(questions, 'contractKind') === undefined &&
      selectedOptionId === 'brainCompanion'
    ) {
      if (prompts.length > 0) {
        conversationDispatch({
          type: conversationConstants.actions.contractKindAnswer,
          payload: {
            tempProps: {
              item: contractKind,
              options: prompts,
            },
          },
        });
      }
    }
  }, [
    contractKind,
    conversationDispatch,
    isConversationEmpty,
    isPreparingConversation,
    isPreparingDocument,
    prompts,
    questions,
    selectedOption,
    selectedOptionId,
  ]);

  const assistantOptions = useMemo(() => {
    if (showLegalWhisper) {
      return assistantConstants.assistantOptions.map((option) => ({
        ...option,
        label: t(option.label),
      }));
    }
  }, [t, showLegalWhisper]);

  const handleSelectChange = useCallback(
    (option: AssistantLayoutProps['selectedOption']): void => {
      if (option) {
        setSelectedOption(option);
        onAIServiceChange(option[0].id);
      }
    },
    [onAIServiceChange],
  );

  /**
   * Set the selected option when the selectedAIService changes.
   */
  useEffect(() => {
    if (selectedAIService) {
      const option = assistantConstants.assistantOptions.find(
        (option) => option.id === selectedAIService,
      );

      setSelectedOption([option]);
    }
  }, [selectedAIService]);

  return (
    <CustomPromptModalsProvider
      onExecuteCustomPromptAction={onExecuteCustomPromptAction}
      isEditingDisabled={!isQuestionWritingAllowed}
      zIndex={zIndex}
    >
      <PlanUsageProvider
        availablePlans={availablePlans}
        isPlanUsageActive={isPlanUsageActive}
      >
        <AssistantLayout
          data-testid={dataTestId}
          selectOptions={assistantOptions}
          selectedOption={selectedOption}
          onSelectChange={handleSelectChange}
          onClose={onClose}
          onClickDynamicView={onClickDynamicView}
        >
          {selectedOptionId === assistantConstants.assistantOptionMap.brainCompanion && (
            <AssistantLayout.Tabs
              onChange={onTabChange}
              activeKey={selectedTab}
            >
              <AssistantLayout.Tab
                key={assistantConstants.assistantTabs.metadata}
                title={t('webdoxAI.tabsTitles.contractSheet')}
                artwork={(): ReactElement => (
                  <DataViewAlt
                    width={16}
                    height={16}
                    color="inherit"
                  />
                )}
              >
                <LoadingWrapperOverlayed isLoading={isLoading}>
                  <AssistantMetadataController {...commonTabProps} />
                </LoadingWrapperOverlayed>
              </AssistantLayout.Tab>
              <AssistantLayout.Tab
                key={assistantConstants.assistantTabs.chat}
                title={t('webdoxAI.tabsTitles.askMe')}
                artwork={(): ReactElement => (
                  <Chat
                    width={16}
                    height={16}
                    color="inherit"
                  />
                )}
              >
                <LoadingWrapperOverlayed isLoading={isLoading}>
                  <AssistantChatController {...commonTabProps} />
                </LoadingWrapperOverlayed>
              </AssistantLayout.Tab>
            </AssistantLayout.Tabs>
          )}
          {selectedOptionId === assistantConstants.assistantOptionMap.legalWhisper && (
            <LoadingWrapperOverlayed isLoading={isLoading}>
              {legalWhisperController}
            </LoadingWrapperOverlayed>
          )}
        </AssistantLayout>
      </PlanUsageProvider>
    </CustomPromptModalsProvider>
  );
};
