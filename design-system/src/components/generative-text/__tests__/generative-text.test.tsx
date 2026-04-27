import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { GenerativeText } from '../generative-text';
import { getPartialText } from '../generative-text.util';

import type { GenerativeTextProps } from '../generative-text';
import type { RenderType } from '@test/test-utils';

const mockOnFinish = testHelpers.fn();
const accumulatedText = 'Reprehenderit minim ut ut esse incididunt do aliqua fugiat.';
const generativeText = 'ABC';

const fullText = `${accumulatedText}${generativeText}`;

const defaultProps: GenerativeTextProps = {
  delay: 1,
  generativeText,
  variant: 'body',
  onFinish: mockOnFinish,
  splitChar: '',
  joinChar: '',
  accumulatedText,
  infinite: false,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<GenerativeTextProps>): RenderType =>
  render(
    <GenerativeText
      {...defaultProps}
      {...props}
    />,
  );

describe('generative-text - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component when infinite is false', async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByText(fullText)).toBeInTheDocument();
      expect(mockOnFinish).toHaveBeenCalledTimes(1);
    });
  });

  it('should render the component when infinite is true', async () => {
    renderComponent({ infinite: true });

    const words = generativeText.split(defaultProps.splitChar);
    const wordsLength = words.length;

    for (let i = 0; i < wordsLength; i++) {
      const currentWord = getPartialText(words, i).join(defaultProps.joinChar);

      await waitFor(() => {
        expect(screen.getByText(`${accumulatedText}${currentWord}`)).toBeInTheDocument();
      });
    }
  });
});
