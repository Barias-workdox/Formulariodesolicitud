import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import {
  GenerativeTextController,
  type GenerativeTextControllerProps,
} from '../generative-text.controller';

import type { RenderType } from '@test/test-utils';

const accumulatedText = 'Reprehenderit minim ';
const generativeText = 'Dolore elit';

const queuedTexts = {
  accumulatedText: 'Duis elit elit consectetur ',
  generativeText: 'deserunt aute cupidatat',
};

const fullText = `${accumulatedText}${generativeText}`;
const fullQueuedText = `${queuedTexts.accumulatedText}${queuedTexts.generativeText}`;

const defaultProps: GenerativeTextControllerProps = {
  accumulatedText,
  generativeText,
  'data-testid': 'data-testid',
  delay: 10,
  variant: 'bodySmall',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<GenerativeTextControllerProps>): RenderType =>
  render(
    <GenerativeTextController
      {...defaultProps}
      {...props}
    />,
  );

describe('generative-text-controller - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component successfully', async () => {
    const { rerender } = renderComponent();

    await waitFor(() => {
      expect(screen.getByText(fullText)).toBeInTheDocument();
    });

    rerender(
      <GenerativeTextController
        {...defaultProps}
        {...queuedTexts}
      />,
    );

    await waitFor(() => {
      expect(screen.getByText(fullQueuedText)).toBeInTheDocument();
    });
  });
});
