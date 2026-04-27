import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { FileItemDetails } from '../components/file-item/file-item-details';

import type { FileItemDetailsProps } from '../components/file-item/file-item-details';

const { t } = renderUseTranslation();

const defaultProps: FileItemDetailsProps = {
  fileStatus: 'idle',
};

const renderComponent = (props: Partial<FileItemDetailsProps> = {}) =>
  render(
    <FileItemDetails
      {...defaultProps}
      {...props}
    />,
  );

describe('FileItemDetails', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders nothing for idle status', () => {
    renderComponent();

    expect(
      screen.queryByTestId('file-download-manager--file-item--loading-progress-bar'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(t('fileDownloadManager.fileItemStatusLabel.finished')),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(t('fileDownloadManager.fileItemStatusLabel.error')),
    ).not.toBeInTheDocument();
  });

  it('renders the progress bar for downloading status', () => {
    renderComponent({ fileStatus: 'downloading', fileDownloadProgress: 50 });

    expect(
      screen.getByTestId('file-download-manager--file-item--loading-progress-bar'),
    ).toBeInTheDocument();
  });

  it('renders the finished label for finished status', () => {
    renderComponent({ fileStatus: 'finished' });

    expect(
      screen.getByText(t('fileDownloadManager.fileItemStatusLabel.finished')),
    ).toBeInTheDocument();
  });

  it('renders the error label for error status', () => {
    renderComponent({ fileStatus: 'error' });

    expect(
      screen.getByText(t('fileDownloadManager.fileItemStatusLabel.error')),
    ).toBeInTheDocument();
  });
});
