import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { FileDownloadManagerBodyContainer } from '../containers/body/body.container';
import { MAX_OVERFLOW_FILES_LENGTH } from '../file-download-manager.constants';

import type { BodyContainerProps } from '../containers/body/body.container';
import type { FileDownloadItem } from '../file-download-manager.interfaces';

const makeFile = (overrides: Partial<FileDownloadItem> = {}): FileDownloadItem => ({
  id: '1',
  name: 'file.zip',
  fileType: 'zip',
  onDownload: vi.fn(),
  ...overrides,
});

const defaultProps: BodyContainerProps = {
  files: [makeFile()],
  status: 'idle',
  handleFileClick: vi.fn(),
};

const renderComponent = (props: Partial<BodyContainerProps> = {}) =>
  render(
    <FileDownloadManagerBodyContainer
      {...defaultProps}
      {...props}
    />,
  );

describe('FileDownloadManagerBodyContainer', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders one file item per file', () => {
    const files = [makeFile({ id: '1', name: 'a.zip' }), makeFile({ id: '2', name: 'b.pdf' })];

    renderComponent({ files });

    expect(screen.getByText('a.zip')).toBeInTheDocument();
    expect(screen.getByText('b.pdf')).toBeInTheDocument();
  });

  it('calls handleFileClick with the file onDownload when a finished item is clicked', async () => {
    const onDownload = vi.fn();
    const handleFileClick = vi.fn((cb?: () => void) => cb?.());

    renderComponent({
      files: [makeFile({ onDownload })],
      status: 'finished',
      handleFileClick,
    });

    await userEvent.hover(screen.getByTestId('file-download-manager--file-item--container'));
    await userEvent.click(screen.getByTestId('file-download-manager--file-item--download-button'));

    expect(handleFileClick).toHaveBeenCalledTimes(1);
    expect(onDownload).toHaveBeenCalledTimes(1);
  });

  it('does not call onDownload for non-finished statuses', async () => {
    const onDownload = vi.fn();
    const handleFileClick = vi.fn();

    renderComponent({
      files: [makeFile({ onDownload })],
      status: 'error',
      handleFileClick,
    });

    await userEvent.hover(screen.getByTestId('file-download-manager--file-item--container'));

    expect(
      screen.queryByTestId('file-download-manager--file-item--download-button'),
    ).not.toBeInTheDocument();
    expect(onDownload).not.toHaveBeenCalled();
  });

  it('renders all items when file count is below MAX_OVERFLOW_FILES_LENGTH', () => {
    const files = Array.from({ length: MAX_OVERFLOW_FILES_LENGTH - 1 }, (_, i) =>
      makeFile({ id: String(i), name: `file-${i}.zip` }),
    );

    renderComponent({ files });

    files.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('renders all items when file count reaches MAX_OVERFLOW_FILES_LENGTH', () => {
    const files = Array.from({ length: MAX_OVERFLOW_FILES_LENGTH }, (_, i) =>
      makeFile({ id: String(i), name: `file-${i}.zip` }),
    );

    renderComponent({ files });

    files.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
