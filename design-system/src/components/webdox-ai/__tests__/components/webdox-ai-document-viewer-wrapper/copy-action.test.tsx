import { userEvent } from '@testing-library/user-event';

import { CopyAction } from '@components/webdox-ai/components/webdox-ai-document-viewer-wrapper/components/copy-action';
import { writeTextMock } from '@test/__mocks__/clipboard.mock';
import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

import type { CopyActionProps } from '@components/webdox-ai/components/webdox-ai-document-viewer-wrapper/components/copy-action';
import type { RenderType } from '@test/test-utils';

const baseTestId = 'copy-action';
const onCopyMock = testHelpers.fn();

const defaultProps: CopyActionProps = {
  'data-testid': baseTestId,
  selectedText: 'Anim occaecat amet veniam id.',
  onCopy: onCopyMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CopyActionProps>): RenderType => {
  return render(
    <CopyAction
      {...defaultProps}
      {...props}
    />,
  );
};

describe('CopyAction - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render CopyAction with tooltip and icon button', async () => {
    renderComponent();

    // Copy Button
    const copyButton = screen.getByText(t('copyToClipboardButton.defaultText'));

    await userEvent.click(copyButton);

    await waitFor(() => {
      expect(writeTextMock).toHaveBeenCalledWith(defaultProps.selectedText);
      expect(onCopyMock).toHaveBeenCalled();
    });
  });
});
