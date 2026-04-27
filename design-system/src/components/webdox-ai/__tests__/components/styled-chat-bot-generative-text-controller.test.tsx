import { act, render, screen, testHelpers } from '@test/test-utils';

import { StyledChatBotGenerativeTextController } from '../../components/styled-chat-bot-generative-text-controller';

import type { StyledChatBotGenerativeTextControllerProps } from '../../components/styled-chat-bot-generative-text-controller';
import type { RenderType } from '@test/test-utils';

const accumulatedText = 'Reprehenderit minim ';
const generativeText = 'Dolore elit';

const queuedTexts = {
  accumulatedText: 'Duis elit elit consectetur ',
  generativeText: 'deserunt aute cupidatat',
};

const fullText = `${accumulatedText}${generativeText}`;
const fullQueuedText = `${queuedTexts.accumulatedText}${queuedTexts.generativeText}`;

const defaultProps: StyledChatBotGenerativeTextControllerProps = {
  accumulatedText,
  generativeText,
  'data-testid': 'data-testid',
};

vi.useFakeTimers();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<StyledChatBotGenerativeTextControllerProps>): RenderType =>
  render(
    <StyledChatBotGenerativeTextController
      {...defaultProps}
      {...props}
    />,
  );

describe('styled-chat-bot-generative-text-controller - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component successfully', async () => {
    const { rerender } = renderComponent();

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(screen.getByText(fullText)).toBeInTheDocument();

    rerender(
      <StyledChatBotGenerativeTextController
        {...defaultProps}
        {...queuedTexts}
      />,
    );
    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(screen.getByText(fullQueuedText)).toBeInTheDocument();
  });
});
