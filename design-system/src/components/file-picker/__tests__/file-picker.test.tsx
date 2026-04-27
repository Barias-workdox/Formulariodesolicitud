import { render, renderUseTranslation, screen } from '@test/test-utils';

import { FilePicker } from '../file-picker';

import type { FilePickerProps } from '../file-picker';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const dataTestId = 'file-picker-test';

const defaultProps: FilePickerProps = {
  'data-testid': dataTestId,
  disabled: false,
  filename: '',
  isUploading: false,
  uploadProgress: 0,
  onUpload: vi.fn(),
  onDelete: vi.fn(),
  onDownload: vi.fn(),
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<FilePickerProps>): RenderType =>
  render(
    <FilePicker
      {...defaultProps}
      {...props}
    />,
  );

describe('FilePicker - tests', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the component DocumentSelector successfully', () => {
    renderComponent({ disabled: false });

    expect(screen.getByText(t('filePicker.select'))).toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--filename`)).not.toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--progress-circle`)).not.toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--progress-bar`)).not.toBeInTheDocument();
  });

  it('should render the component DocumentDownload successfully', () => {
    renderComponent({ disabled: true, filename: 'filename' });

    expect(screen.getByText('filename')).toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--delete-button`)).not.toBeInTheDocument();
  });

  it('should render with progress completed message', () => {
    renderComponent({ disabled: false, isUploading: true, uploadProgress: 100 });

    expect(screen.getByText(t('filePicker.uploadStatuses.progressCompleted'))).toBeInTheDocument();
  });

  it('should render with in progress message', () => {
    const uploadProgress = 50;

    renderComponent({ disabled: false, isUploading: true, uploadProgress });

    expect(
      screen.getByText(t('filePicker.uploadStatuses.progress', { number: uploadProgress })),
    ).toBeInTheDocument();
  });
});
