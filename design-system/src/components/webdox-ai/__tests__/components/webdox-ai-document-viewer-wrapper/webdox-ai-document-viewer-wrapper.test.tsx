import { userEvent } from '@testing-library/user-event';

import { WebdoxAIDocumentViewerWrapper } from '@components/webdox-ai/components/webdox-ai-document-viewer-wrapper';
import * as textSelectionHook from '@components/webdox-ai/components/webdox-ai-document-viewer-wrapper/hooks/use-text-selection.hook';
import { DEFAULT_DOCUMENT_VIEWER_WRAPPER_ACTIONS } from '@components/webdox-ai/constants/webdox-ai.constants';
import { writeTextMock } from '@test/__mocks__/clipboard.mock';
import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

import type { ActionButtonConfig } from '@components/webdox-ai/components/webdox-ai-document-viewer-wrapper';
import type { RenderType } from '@test/test-utils';

const baseTestId = 'webdox-ai-document-viewer-wrapper';
const content = 'Exercitation eiusmod et commodo proident tempor eiusmod culpa nostrud sit.';
const onMouseUpMock = testHelpers.fn();
const onResetSelectionMock = testHelpers.fn();
const onCopyMock = testHelpers.fn();
const onTranslateMock = testHelpers.fn();
const onExplainMock = testHelpers.fn();

const documentViewerActions: ActionButtonConfig[] = [
  ...DEFAULT_DOCUMENT_VIEWER_WRAPPER_ACTIONS,
  { action: 'translate', isVisible: true },
  { action: 'explain', isVisible: true },
];

const allActionButton = documentViewerActions.map(({ action }) => action);

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType => {
  return render(
    <WebdoxAIDocumentViewerWrapper
      actions={documentViewerActions}
      data-testid={baseTestId}
      onCopy={onCopyMock}
      onTranslate={onTranslateMock}
      onExplain={onExplainMock}
    >
      <div>{content}</div>
    </WebdoxAIDocumentViewerWrapper>,
  );
};

beforeAll(() => {
  testHelpers
    .spyOn(textSelectionHook, 'useTextSelection')
    .mockImplementation(({ onSelectText, onResetSelection, 'data-testid': dataTestId }) => ({
      onMouseUp: onMouseUpMock.mockImplementation(() => onSelectText()),
      resetSelection: onResetSelectionMock.mockImplementation(() => onResetSelection()),
      selectedText: content,
      selectionPositionNode: <div data-testid={`${dataTestId}--node`} />,
    }));
});

beforeEach(() => {
  testHelpers.clearAllMocks();
});

describe('WebdoxAIDocumentViewerWrapper - tests', () => {
  const { t } = renderUseTranslation();

  it('should render WebdoxAIDocumentViewerWrapper correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseTestId}--node`)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it.each(allActionButton)(
    'should display the %s action button when the popover is open',
    async (action) => {
      renderComponent();

      await userEvent.click(screen.getByText(content));

      expect(onMouseUpMock).toHaveBeenCalled();
      expect(await screen.findByTestId(`${baseTestId}--${action}`)).toBeInTheDocument();
    },
  );

  it('should copy text to clipboard when copy action is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(content));
    await userEvent.click(await screen.findByTestId(`${baseTestId}--copy`));

    await waitFor(() => {
      expect(writeTextMock).toHaveBeenCalledWith(content);
      expect(onCopyMock).toHaveBeenCalled();
    });
  });

  it('should close the popover when close action is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(content));
    await userEvent.click(await screen.findByTestId(`${baseTestId}--close`));

    await waitFor(() => {
      expect(onResetSelectionMock).toHaveBeenCalled();
      expect(screen.queryByTestId(`${baseTestId}--close`)).not.toBeInTheDocument();
    });
  });

  it('should translate text when translate action is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(content));
    await userEvent.click(await screen.findByTestId(`${baseTestId}--translate`));

    const englishOption = await screen.findByText(t('locales.en'));

    await userEvent.click(englishOption);

    expect(onTranslateMock).toHaveBeenCalledWith(
      content,
      expect.objectContaining({
        id: 'en',
        label: t('locales.en'),
      }),
    );
  });

  it('should explain text when explain action is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(content));
    await userEvent.click(await screen.findByTestId(`${baseTestId}--explain`));

    expect(onExplainMock).toHaveBeenCalledWith(content);
  });
});
