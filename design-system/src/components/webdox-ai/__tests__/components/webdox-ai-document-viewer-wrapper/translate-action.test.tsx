import { userEvent } from '@testing-library/user-event';

import { TranslateAction } from '@components/webdox-ai/components/webdox-ai-document-viewer-wrapper/components/translate-action';
import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

import type { TranslateActionProps } from '@components/webdox-ai/components/webdox-ai-document-viewer-wrapper/components/translate-action';
import type { RenderType } from '@test/test-utils';

const onTranslateMock = testHelpers.fn();

const defaultProps: TranslateActionProps = {
  onTranslate: onTranslateMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<TranslateActionProps>): RenderType => {
  return render(
    <TranslateAction
      {...defaultProps}
      {...props}
    />,
  );
};

describe('TranslateAction - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly', async () => {
    renderComponent();

    const translateButton = screen.getByText(t('general.translate'));

    await userEvent.click(translateButton);

    await waitFor(() => {
      expect(screen.getByText(t('locales.en'))).toBeInTheDocument();
      expect(screen.getByText(t('locales.pt'))).toBeInTheDocument();
      expect(screen.getByText(t('locales.es'))).toBeInTheDocument();
    });

    await userEvent.click(screen.getByText(t('locales.en')));

    expect(onTranslateMock).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'en',
        label: t('locales.en'),
      }),
    );
  });
});
