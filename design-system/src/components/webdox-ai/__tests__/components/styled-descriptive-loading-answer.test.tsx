import { render, renderUseTranslation, screen } from '@test/test-utils';

import { DescriptiveLoadingAnswerVariant } from '../../components/chat/chat-messages/components/chat-bot-message-item/components';

import type { RenderType } from '@test/test-utils';

const baseTestId = 'descriptive-loading';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType =>
  render(<DescriptiveLoadingAnswerVariant data-testid={baseTestId} />);

const { t } = renderUseTranslation();

describe('DescriptiveLoadingAnswerVariant - tests', () => {
  it('should render the loading component with correct translations and elements', () => {
    renderComponent();

    // Assert that the translated texts are rendered correctly
    expect(screen.getByText(t('webdoxAI.chat.descriptiveLoading.text1'))).toBeInTheDocument();
    expect(screen.getByText(t('webdoxAI.chat.descriptiveLoading.text2'))).toBeInTheDocument();
    expect(screen.getByText(t('webdoxAI.chat.descriptiveLoading.text3'))).toBeInTheDocument();

    expect(screen.getByTestId(`${baseTestId}--spinner`)).toBeInTheDocument();
  });
});
