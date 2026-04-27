import { useEffect, useState } from 'react';

import { useToggle } from 'react-use';

import { Button } from '@components/button';

import { AVAILABLE_PLANS_LIST } from '../__mocks__/available-plans.mock';
import { BrainCompanionLayout, WebdoxAIDynamicDialog } from '../components';
import { conversationConstants } from '../constants';
import { AssistantChatController } from '../controllers/assistant-chat.controller';
import { PlanUsageProvider } from '../providers';

import { useFakeConversation } from './hooks/use-fake-conversation.hook';
import { chatStoriesUtils } from './utils';

import type { FakeConversationParamsType } from './interfaces';
import type { AssistantChatControllerProps } from '../controllers/assistant-chat.controller';
import type { AssistantTypeProps } from '@components/webdox-ai/interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

type StateType = Pick<
  AssistantTypeProps,
  'isPreparingConversation' | 'isPreparingDocument' | 'isContractSummaryLoading'
>;

export default {
  title: 'Modules/WebdoxAI/Controllers/AssistantChatController',
  component: AssistantChatController,
  parameters: {
    controls: { disable: true },
  },
} as Meta<AssistantChatControllerProps & FakeConversationParamsType>;

const TIMEOUT = 750;
const isPlanUsageActive = true;

const { item: contractKind, options: prompts = [] } = chatStoriesUtils.getAnswerData();
const { options: suggestions = [] } = chatStoriesUtils.getAnswerData();
const customPrompts = chatStoriesUtils.getFakeCustomPrompts();

/** A ChatMessageLayout */
const Template: StoryFn<AssistantChatControllerProps & FakeConversationParamsType> = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [isExpanded, toggleExpanded] = useToggle(false);
  const [state, setState] = useState<StateType>({
    isPreparingConversation: true,
    isPreparingDocument: true,
    isContractSummaryLoading: false,
  });

  const fakeConversation = useFakeConversation();

  /**
   * Handles the creation of a new message in the conversation.
   */
  const handleCreateMessage: AssistantChatControllerProps['onCreateMessage'] = (content) => {
    fakeConversation.onCreateMessage(content);

    return Promise.resolve();
  };

  /**
   * Handles the stopping of answer generation.
   */
  const handleOnStopAnswerGeneration = () => {
    fakeConversation.conversationDispatch({
      type: conversationConstants.actions.stopAnswerGeneration,
    });
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

  /**
   * Each time the document and the conversation are prepared and the conversation is empty, will trigger the
   * contract kind answer
   * it should run only with brain companion
   */
  useEffect(() => {
    if (
      !state.isPreparingConversation &&
      !state.isPreparingDocument &&
      fakeConversation.conversationState.conversation === undefined
    ) {
      fakeConversation.conversationDispatch({
        type: conversationConstants.actions.contractKindAnswer,
        payload: {
          tempProps: {
            item: contractKind,
            options: prompts,
          },
        },
      });
    }
  }, [
    fakeConversation.conversationDispatch,
    fakeConversation,
    state.isPreparingConversation,
    state.isPreparingDocument,
  ]);

  return (
    <article>
      <Button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'} Brain Companion</Button>
      <WebdoxAIDynamicDialog
        isOpen={isOpen}
        placement="bottomRight"
        type="brainCompanion"
        onClose={toggleOpen}
        onToggleExpand={toggleExpanded}
        fullViewport={isExpanded}
      >
        <BrainCompanionLayout isExpanded={isExpanded}>
          <PlanUsageProvider
            availablePlans={AVAILABLE_PLANS_LIST}
            isPlanUsageActive={isPlanUsageActive}
          >
            <AssistantChatController
              {...state}
              conversationDispatch={fakeConversation.conversationDispatch}
              data-testid="assistant-chat-controller"
              isConversationEmpty={
                fakeConversation.conversationState.conversation?.questions.length === 0
              }
              customPrompts={customPrompts}
              contractKind={contractKind}
              prompts={prompts}
              suggestions={suggestions}
              selectedTab="chat"
              conversationDisabled={fakeConversation.conversationState.disabled}
              onCreateMessage={handleCreateMessage}
              isGeneratingAnswer={fakeConversation.conversationState.isLoading}
              onStopAnswerGeneration={handleOnStopAnswerGeneration}
              conversation={fakeConversation.conversationState.conversation}
            />
          </PlanUsageProvider>
        </BrainCompanionLayout>
      </WebdoxAIDynamicDialog>
    </article>
  );
};

export const Default = Template.bind({});
