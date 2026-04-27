import { useEffect, useState } from 'react';

import { Tag } from '@components/tag';
import { noop } from '@utils/noop';

import { AVAILABLE_PLANS_LIST } from '../__mocks__/available-plans.mock';
import { conversationConstants } from '../constants';
import { AssistantController } from '../controllers/assistant-controller';
import { LegalWhisperChatController } from '../controllers/legal-whisper-chat.controller';

import { METADATA_LIST } from './constants/metadata-examples/metadata-examples';
import { useMultipleFakeConversations } from './hooks/use-multiple-fake-conversations.hook';
import { chatStoriesUtils } from './utils';

import type { FakeConversationParamsType } from './interfaces';
import type { CustomPromptAction } from '../constants';
import type { AssistantControllerProps } from '../controllers/assistant-controller';
import type {
  AnswerReference,
  AssistantAIServiceType,
  AssistantLayoutTabType,
  AssistantTypeProps,
  CustomPrompt,
} from '../interfaces';
import type { CountryCodeType } from '@components/utils/interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

const TIMEOUT = 750;
type StateType = Pick<
  AssistantTypeProps,
  'isPreparingConversation' | 'isPreparingDocument' | 'isContractSummaryLoading'
>;

const { item: contractKind, options: prompts = [] } = chatStoriesUtils.getAnswerData();
const { options: suggestions = [] } = chatStoriesUtils.getAnswerData();
const { options: CONTRACT_KINDS = [] } = chatStoriesUtils.getAnswerData();

/**
 * This constant for contract_kind is needed because the options are created randomly and
 * it will not render properly in the metadata list item.
 */
const LEASE_CONTRACT_KIND = {
  id: 'id-10',
  value: 'lease_agreement',
  label: 'Contrato de Arriendo',
};

const suggestionsList = [
  {
    label: '¿Qué indemnización corresponde en caso de despido y cómo se calcula?',
    id: '1',
    value: 'test 1',
  },
  {
    label: '¿Qué es un accidente del trabajo?',
    id: '2',
    value: 'test 2',
  },
  {
    label: '¿Cuáles son los diferentes tipos de contratos de trabajo y sus características?',
    id: '3',
    value: 'test 3',
  },
];

const suggestionTitle = 'Consultas recurrentes en ámbito laboral chileno';

const areaOptions = [
  { id: '1', label: 'Área Laboral' },
  { id: '2', label: 'Área Civil' },
];
const countryOptions: CountryCodeType[] = ['CHL'];

export default {
  title: 'Modules/WebdoxAI/Controllers/AssistantController',
  component: AssistantController,
} as Meta<AssistantControllerProps & FakeConversationParamsType>;

/** A ChatMessageLayout */
const Template: StoryFn<AssistantControllerProps & FakeConversationParamsType> = () => {
  const [activeAnswerId, setActiveAnswerId] = useState<string>();
  const [selectedAnswerReference, setSelectedAnswerReference] = useState<AnswerReference>();
  const [selectedTab, setSelectedTab] = useState<AssistantLayoutTabType>('metadata');
  const [selectedArea, setSelectedArea] = useState<AssistantTypeProps['legalWhisperAreaSelected']>([
    areaOptions[0],
  ]);
  const [selectedCountry, setSelectedCountry] = useState<
    AssistantTypeProps['legalWhisperCountrySelected']
  >([{ id: 'CHL' }]);

  const [selectedAIService, setSelectedAIService] =
    useState<AssistantAIServiceType>('brainCompanion');

  const [contractSummary, setContractSummary] =
    useState<AssistantTypeProps['contractSummary']>(undefined);

  const { brainCompanion: brainCompanionConversation, legalWhisper: legalWhisperConversation } =
    useMultipleFakeConversations();

  const [state, setState] = useState<StateType>({
    isPreparingConversation: true,
    isPreparingDocument: true,
    isContractSummaryLoading: false,
  });

  const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);

  const onSubmitFeedback: AssistantControllerProps['onSubmitFeedback'] = (): void => {
    setIsFeedbackLoading(true);
    setTimeout(() => {
      setIsFeedbackLoading(false);
    }, 1000);
  };

  /** On init start the conversation */
  useEffect(() => {
    setTimeout(() => {
      setState({
        isPreparingDocument: false,
        isPreparingConversation: true,
      });

      setTimeout(() => {
        setState({
          isPreparingDocument: false,
          isPreparingConversation: false,
        });
      }, TIMEOUT);
    }, TIMEOUT);
  }, []);

  const handleGenerateSummary: AssistantControllerProps['onGenerateContractSummary'] = () => {
    setState({ ...state, isContractSummaryLoading: true });

    setTimeout(() => {
      setContractSummary(chatStoriesUtils.getFakeLorem(20));
      setState({ ...state, isContractSummaryLoading: false });
    }, 3000);
  };

  const handleOnStopAnswerGeneration = () => {
    brainCompanionConversation.conversationDispatch({
      type: conversationConstants.actions.stopAnswerGeneration,
    });
  };

  /**
   * Handle custom prompt action.
   */
  const handleExecuteCustomPromptAction = async (
    kind: CustomPromptAction,
    payload: CustomPrompt,
  ) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        window.alert(
          `Custom prompt action: ${kind} - Title: ${payload.title} - Content: ${payload.content}`,
        );
        resolve(true);
      }, 1000);
    });
  };

  const showSuggestionList = selectedAIService === 'legalWhisper';
  const showLegalWhisperSelector = selectedAIService === 'legalWhisper';

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <article
        style={{
          display: 'flex',
          height: '900px',
          border: '1px solid lightgray',
          width: '500px',
          overflow: 'hidden',
        }}
      >
        <AssistantController
          {...state}
          zIndex={99}
          availablePlans={AVAILABLE_PLANS_LIST}
          isDataExtractionEnabled
          isPlanUsageActive
          highlightedText=""
          isContractKindLoading={false}
          contractKind={contractKind}
          isConversationEmpty={
            brainCompanionConversation.conversationState.conversation?.questions.length === 0
          }
          suggestions={suggestions}
          isLoading={false}
          isMetadataLoading={false}
          isPreparingMetadata={false}
          isPreparingDocument={false}
          isPreparingConversation={false}
          isContractSummaryLoading={false}
          metadataList={METADATA_LIST}
          prompts={prompts}
          data-testid="assistant-controller"
          contractKinds={[...CONTRACT_KINDS, LEASE_CONTRACT_KIND]}
          activeAnswerId={activeAnswerId}
          selectedAnswerReference={selectedAnswerReference}
          updateActiveMessage={setActiveAnswerId}
          updateAnswerReference={setSelectedAnswerReference}
          onExecuteCustomPromptAction={handleExecuteCustomPromptAction}
          selectedTab={selectedTab}
          selectedAIService={selectedAIService}
          conversation={brainCompanionConversation.conversationState.conversation}
          conversationDisabled={brainCompanionConversation.conversationState.disabled}
          onCreateMessage={brainCompanionConversation.onCreateMessage}
          conversationDispatch={brainCompanionConversation.conversationDispatch}
          onSubmitFeedback={onSubmitFeedback}
          isFeedbackLoading={isFeedbackLoading}
          chatComposerSuggestionList={suggestionsList}
          showLegalWhisperSelector={showLegalWhisperSelector}
          showLegalWhisper
          suggestionListTitle={suggestionTitle}
          onGenerateContractSummary={handleGenerateSummary}
          contractSummary={contractSummary}
          contractSummaryUpdatedAt={contractSummary ? '2023-01-01T13:00:23.690-04:00' : undefined}
          onTabChange={({ activeKey }) => setSelectedTab(activeKey)}
          isGeneratingAnswer={brainCompanionConversation.conversationState.isLoading}
          onStopAnswerGeneration={handleOnStopAnswerGeneration}
          legalWhisperAreaSelected={selectedArea}
          legalWhisperCountrySelected={selectedCountry}
          onLegalWhisperAreaChange={(value) => setSelectedArea(value)}
          onLegalWhisperCountryChange={(value) => setSelectedCountry(value)}
          legalWhisperAreaOptions={areaOptions}
          legalWhisperCountryOptions={countryOptions}
          onAIServiceChange={setSelectedAIService}
          onTempAnswerSubmit={(variant, payload) =>
            console.log('temp answer submit', variant, payload)
          }
          onCopyToClipboardButtonClick={(variant, payload) =>
            console.log('submit', variant, payload)
          }
          onContractSummaryCopy={(payload) => console.log('copy', payload)}
          onSuggestionsClick={() => console.log('suggestions button clicked')}
          onSettingsClick={() => console.log('settings clicked')}
          onClose={() => console.log('on Close')}
          onContractKindChange={(item) => console.log('onContractKindChange', item)}
          onMetadataItemChange={(item) => console.log('onMetadataItemChange', item)}
          onDataExtractionHighlight={(item) => console.log('onDataExtractionHighlight', item)}
          onGoToClassificationButtonClick={() => console.log('go to Classification')}
          onGoToEntitiesDirectoryClick={() => console.log('Show counterparty Folders')}
          onClickDynamicView={() => console.log('Change to dynamic view')}
          legalWhisperController={
            <LegalWhisperChatController
              showSuggestionList={showSuggestionList}
              conversation={legalWhisperConversation.conversationState.conversation}
              areaOptions={areaOptions}
              countryOptions={countryOptions}
              selectedArea={selectedArea}
              selectedCountry={selectedCountry}
              onCreateMessage={legalWhisperConversation.onCreateMessage}
              onSuggestionClick={(payload) => console.log('onSuggestionClick', payload)}
              onRateAnswer={noop}
              onCopyToClipboardButtonClick={noop}
              onAreaChange={noop}
              onCountryChange={noop}
              disabled={legalWhisperConversation.conversationState.disabled}
              suggestionList={suggestionsList}
              showUnratedAnswerAlert={false}
            />
          }
        />
      </article>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          border: '1px solid lightgray',
          padding: '1rem',
          alignItems: 'flex-start',
        }}
      >
        <Tag kind="warning">Story Setup</Tag>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
