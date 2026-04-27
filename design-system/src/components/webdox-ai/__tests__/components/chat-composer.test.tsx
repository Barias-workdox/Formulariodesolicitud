import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { ChatComposer } from '../../components/chat';

import '@test/__mocks__/tiptap.mock';

import type { ChatComposerProps } from '../../components/chat';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'chat-composer';

const onCreateMessageMock = testHelpers.fn();
const onSuggestionsClickMock = testHelpers.fn();
const onStopAnswerGenerationMock = testHelpers.fn();

const defaultProps: ChatComposerProps = {
  'data-testid': baseDataTestId,
  disabled: false,
  isSuggestionsLoading: false,
  isGeneratingAnswer: false,
  customPrompts: [],
  onCreateMessage: onCreateMessageMock,
  onSuggestionsClick: onSuggestionsClickMock,
  onStopAnswerGeneration: onStopAnswerGenerationMock,
};

const renderComponent = (props?: Partial<ChatComposerProps>): RenderType =>
  render(
    <ChatComposer
      {...defaultProps}
      {...props}
    />,
  );

const { t } = renderUseTranslation();

describe('ChatComposer - tests', () => {
  it('should render correctly', async () => {
    renderComponent();

    expect(
      screen.getByTestId('message-box-editor-content').querySelector('[contenteditable="true"]'),
    ).toBeInTheDocument();
    expect(screen.getByText(t('general.send'))).toBeInTheDocument();
    expect(
      screen.getByTestId(`${baseDataTestId}__custom-prompts-button__button`),
    ).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--prompt-suggestion-button`)).toBeInTheDocument();
  });

  it('should disabled textarea when `isQuestionWritingAllowed` is `false`', async () => {
    renderComponent({ isQuestionWritingAllowed: false });

    const editorElement = screen.getByTestId('message-box-editor-content');
    const noEditableElement = editorElement.querySelector(
      '[contenteditable="false"]',
    ) as HTMLElement;

    expect(noEditableElement).toBeInTheDocument();
  });

  it('should call "onCreateMessage" when message is submitted', async () => {
    renderComponent();

    const editorElement = screen.getByTestId('message-box-editor-content');
    const editableElement = editorElement.querySelector('[contenteditable="true"]') as HTMLElement;

    await userEvent.type(editableElement, 'Test message');

    const sendButton = await screen.findByText(t('general.send'));

    await userEvent.click(sendButton);

    expect(onCreateMessageMock).toHaveBeenCalled();
  });

  it('should show stop button when "isGeneratingAnswer" is true', async () => {
    renderComponent({ isGeneratingAnswer: true, showStopButton: true });

    expect(screen.getByText(t('general.stop'))).toBeInTheDocument();
  });

  it('should call "onStopAnswerGeneration" when stop button is clicked', async () => {
    renderComponent({ isGeneratingAnswer: true, showStopButton: true });

    const stopButton = await screen.findByText(t('general.stop'));

    await userEvent.click(stopButton);

    expect(onStopAnswerGenerationMock).toHaveBeenCalled();
  });
});
