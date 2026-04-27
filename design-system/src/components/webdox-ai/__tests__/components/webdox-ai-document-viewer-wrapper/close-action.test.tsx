import { userEvent } from '@testing-library/user-event';

import { CloseAction } from '@components/webdox-ai/components/webdox-ai-document-viewer-wrapper/components/close-action';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import type { CloseActionProps } from '@components/webdox-ai/components/webdox-ai-document-viewer-wrapper/components/close-action';
import type { RenderType } from '@test/test-utils';

const mockOnclose = testHelpers.fn();
const baseTestId = 'close-action';

const defaultProps: CloseActionProps = {
  onClose: mockOnclose,
  'data-testid': baseTestId,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CloseActionProps>): RenderType => {
  return render(
    <CloseAction
      {...defaultProps}
      {...props}
    />,
  );
};

describe('CloseAction - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render CloseAction with tooltip and icon button', async () => {
    renderComponent();

    // Hover event
    await userEvent.hover(screen.getByTestId(baseTestId));

    expect(screen.getByTestId(baseTestId)).toBeInTheDocument();
    expect(await screen.findByText(t('general.close'))).toBeInTheDocument();
  });

  it('should execute `onClose` correctly', async () => {
    renderComponent();

    // Click event
    await userEvent.click(screen.getByTestId(baseTestId));

    expect(mockOnclose).toHaveBeenCalled();
  });
});
