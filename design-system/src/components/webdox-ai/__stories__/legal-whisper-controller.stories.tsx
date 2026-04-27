import { useEffect, useState } from 'react';

import { faker } from '@faker-js/faker';
import { useToggle } from 'react-use';

import { Button } from '@components/button';
import { noop } from '@utils/noop';

import { AVAILABLE_PLANS_LIST } from '../__mocks__/available-plans.mock';
import { WebdoxAIDynamicDialog, type AnswerRatingForm } from '../components';
import { LegalWhisperLayout } from '../components';
import { LegalWhisperSettings } from '../components/legal-whisper-settings';
import { LegalWhisperAnswerRatingController } from '../controllers/legal-whisper-answer-rating-controller';
import { LegalWhisperChatController } from '../controllers/legal-whisper-chat.controller';
import { PlanUsageProvider } from '../providers';
import { LegalWhisperConversationsProvider } from '../providers/legal-whisper-conversations.provider';

import { legalWhisperConversationsExamples } from './constants/legal-whisper-settings-examples/legal-whisper-conversations-examples';
import { useLegalWhisperFakeConversation } from './hooks/use-legal-whisper-fake-conversation.hook';

import type { FakeConversationParamsType } from './interfaces';
import type { LegalWhisperChatControllerProps } from '../controllers/legal-whisper-chat.controller';
import type {
  LegalWhisperConversation,
  LegalWhisperConversationListItemType,
} from '../interfaces/legal-whisper.interfaces';
import type { CountryCodeType } from '@components/utils/interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

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

const areaOptions: LegalWhisperChatControllerProps['areaOptions'] = [
  {
    id: '1',
    label: 'Área Laboral',
  },
  {
    id: '2',
    label: 'Área Civil',
  },
];
const countryOptions: CountryCodeType[] = ['CHL', 'ARG'];

export default {
  title: 'Modules/WebdoxAI/Controllers/LegalWhisperChatController',
  component: LegalWhisperChatController,
  parameters: {
    controls: { disable: true },
  },
} as Meta<LegalWhisperChatControllerProps & FakeConversationParamsType>;

/** A ChatMessageLayout */
const Template: StoryFn<LegalWhisperChatControllerProps & FakeConversationParamsType> = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [isExpanded, toggleExpanded] = useToggle(false);
  const [selectedArea, setSelectedArea] = useState<LegalWhisperChatControllerProps['selectedArea']>(
    [areaOptions[0]],
  );
  const [selectedConversation, setSelectedConversation] =
    useState<LegalWhisperConversationListItemType>(legalWhisperConversationsExamples[0]);
  const [isRightColumnToggled, toggleRightColumn] = useToggle(false);
  const [selectedCountry, setSelectedCountry] = useState<
    LegalWhisperChatControllerProps['selectedCountry']
  >([{ id: 'CHL' }]);
  const [conversationSearchValue, setConversationSearchValue] = useState<string>('');
  const [conversations, setConversations] = useState<LegalWhisperConversationListItemType[]>(
    legalWhisperConversationsExamples,
  );
  const [isLoadingMoreConversations, setIsLoadingMoreConversations] = useToggle(false);

  const {
    conversationState: {
      conversation,
      isLoading: isConversationLoading,
      disabled: isConversationDisabled,
    },
    onCreateMessage,
  } = useLegalWhisperFakeConversation();

  const isConversationEmpty = conversation?.questions?.length === 0;
  const answerToRate = conversation?.questions[0]?.answers[0];

  /**
   * Handles the creation of a new message in the conversation.
   */
  const handleCreateMessage: LegalWhisperChatControllerProps['onCreateMessage'] = (content) => {
    onCreateMessage(content);

    return Promise.resolve();
  };

  /**
   * Handles the stopping of answer generation.
   */
  const handleRateAnswer = async (formValues: AnswerRatingForm): Promise<void> => {
    console.log('Rating submitted:', formValues);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  /**
   * Effect to toggle the right column when the answer to rate is available.
   */
  useEffect(() => {
    if (answerToRate) {
      toggleRightColumn();
    }
  }, [answerToRate, toggleRightColumn]);

  /**
   * Handles the loading of more conversations.
   */
  const handleLoadMoreConversations = () => {
    setIsLoadingMoreConversations(true);
    setTimeout(() => {
      setConversations([
        ...conversations,
        ...(Array.from({ length: 10 }).map(() => ({
          id: faker.string.uuid(),
          title: faker.lorem.words(5),
        })) as LegalWhisperConversationListItemType[]),
      ]);
      setIsLoadingMoreConversations(false);
    }, 1000);
  };

  return (
    <article>
      <Button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'} Legal Whisper</Button>
      <LegalWhisperConversationsProvider
        conversations={conversations}
        onSelectConversation={setSelectedConversation}
        onCreateConversation={() => window.alert('New conversation created')}
        onEditConversation={async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          window.alert('Conversation edited');
        }}
        onDeleteConversation={async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          window.alert('Conversation deleted');
        }}
        onSearch={setConversationSearchValue}
        searchValue={conversationSearchValue}
        selectedConversation={selectedConversation}
        zIndex={99999}
        onLoadMoreConversations={handleLoadMoreConversations}
        isLoadingMoreConversations={isLoadingMoreConversations}
      >
        <WebdoxAIDynamicDialog
          isOpen={isOpen}
          placement="bottomRight"
          type="legalWhisper"
          onClose={toggleOpen}
          onToggleExpand={toggleExpanded}
          fullViewport={isExpanded}
        >
          <LegalWhisperLayout
            isExpanded={isExpanded}
            showRightColumn={isRightColumnToggled}
            showLeftColumn={isExpanded}
            leftColumnContent={
              <LegalWhisperSettings
                areaOptions={areaOptions}
                countryOptions={countryOptions}
                selectedArea={selectedArea}
                selectedCountry={selectedCountry}
                onAreaChange={setSelectedArea}
                onCountryChange={setSelectedCountry}
                zIndex={99999}
              />
            }
            rightColumnContent={
              answerToRate ? (
                <LegalWhisperAnswerRatingController
                  answerToRate={answerToRate}
                  onSubmit={handleRateAnswer}
                  onClose={toggleRightColumn}
                />
              ) : undefined
            }
          >
            <PlanUsageProvider
              availablePlans={AVAILABLE_PLANS_LIST}
              isPlanUsageActive
            >
              <LegalWhisperChatController
                zIndex={99999}
                dataTestId="legal-whisper-controller"
                disabled={isConversationDisabled}
                onCreateMessage={handleCreateMessage}
                suggestionList={suggestionsList}
                isGeneratingAnswer={isConversationLoading}
                selectedArea={selectedArea}
                selectedCountry={selectedCountry}
                onAreaChange={setSelectedArea}
                onCountryChange={setSelectedCountry}
                areaOptions={areaOptions}
                countryOptions={countryOptions}
                // TODO: Remove this type assertion when the legal whisper conversation type is updated
                conversation={conversation as LegalWhisperConversation}
                showSettingsSelector={!isExpanded}
                showSuggestionList={isConversationEmpty}
                onCopyToClipboardButtonClick={noop}
                onSuggestionClick={noop}
                onRateAnswer={toggleRightColumn}
                showUnratedAnswerAlert={Boolean(answerToRate)}
              />
            </PlanUsageProvider>
          </LegalWhisperLayout>
        </WebdoxAIDynamicDialog>
      </LegalWhisperConversationsProvider>
    </article>
  );
};

export const Default = Template.bind({});
