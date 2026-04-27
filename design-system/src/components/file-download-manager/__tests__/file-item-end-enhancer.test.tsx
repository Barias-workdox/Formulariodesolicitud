import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { FileItemEndEnhancer } from '../components/file-item/file-item-end-enhancer';

import type { FileItemEndEnhancerProps } from '../components/file-item/file-item-end-enhancer';

const { t } = renderUseTranslation();

const defaultProps: FileItemEndEnhancerProps = {
  fileStatus: 'idle',
  isHovered: false,
  onClick: vi.fn(),
};

const renderComponent = (props: Partial<FileItemEndEnhancerProps> = {}) =>
  render(
    <FileItemEndEnhancer
      {...defaultProps}
      {...props}
    />,
  );

describe('FileItemEndEnhancer', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders nothing for idle status', () => {
    renderComponent();

    expect(
      screen.queryByTestId('file-download-manager--file-item--download-button'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('file-download-manager--file-item--finished-icon--wrapper'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('file-download-manager--file-item--error-icon--wrapper'),
    ).not.toBeInTheDocument();
  });

  it('renders nothing for downloading status', () => {
    renderComponent({ fileStatus: 'downloading' });

    expect(
      screen.queryByTestId('file-download-manager--file-item--download-button'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('file-download-manager--file-item--finished-icon--wrapper'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('file-download-manager--file-item--error-icon--wrapper'),
    ).not.toBeInTheDocument();
  });

  it('renders the checkmark icon for finished status when not hovered', () => {
    renderComponent({ fileStatus: 'finished', isHovered: false });

    expect(
      screen.getByTestId('file-download-manager--file-item--finished-icon--wrapper'),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId('file-download-manager--file-item--download-button'),
    ).not.toBeInTheDocument();
  });

  it('renders the download button for finished status when hovered', () => {
    renderComponent({ fileStatus: 'finished', isHovered: true });

    expect(
      screen.getByTestId('file-download-manager--file-item--download-button'),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(t('fileDownloadManager.ariaLabels.downloadFileButton')),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId('file-download-manager--file-item--finished-icon--wrapper'),
    ).not.toBeInTheDocument();
  });

  it('calls onClick exactly once when the download button is clicked', async () => {
    const onClick = vi.fn();

    renderComponent({ fileStatus: 'finished', isHovered: true, onClick });

    await userEvent.click(screen.getByTestId('file-download-manager--file-item--download-button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders the error icon for error status', () => {
    renderComponent({ fileStatus: 'error' });

    expect(
      screen.getByTestId('file-download-manager--file-item--error-icon--wrapper'),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId('file-download-manager--file-item--download-button'),
    ).not.toBeInTheDocument();
  });
});
