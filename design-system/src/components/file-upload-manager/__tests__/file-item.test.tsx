import { render, renderUseTranslation, screen } from '@test/test-utils';

import { mockFilesEveryType } from '../__mocks__/files.mocks';
import { FileItem } from '../components/file-item/file-item';

import type { FileItemProps } from '../components/file-item/file-item';

const [
  mockFileUploading,
  mockFilePending,
  mockFileCanceled,
  mockFileFinished,
  mockFileRejected,

  _,
  mockFileOmitted,
] = mockFilesEveryType;

const renderComponent = (props: FileItemProps) => render(<FileItem {...props} />);

describe('FileItem', () => {
  const { t } = renderUseTranslation();

  it('should renders pending status correctly', () => {
    renderComponent(mockFilePending);

    expect(screen.getByText(mockFilePending.name)).toBeInTheDocument();
    expect(screen.getByText(t('fileUploadManager.fileStatusLabels.pending'))).toBeInTheDocument();
  });

  it('should renders uploading status with progress bar correctly', () => {
    renderComponent(mockFileUploading);

    expect(screen.getByText(mockFileUploading.name)).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should renders canceled status correctly', () => {
    renderComponent(mockFileCanceled);

    expect(screen.getByText(mockFileCanceled.name)).toBeInTheDocument();
    expect(screen.getByText(t('fileUploadManager.fileStatusLabels.canceled'))).toBeInTheDocument();
  });

  it('should renders finished status correctly', () => {
    renderComponent(mockFileFinished);

    expect(screen.getByText(mockFileFinished.name)).toBeInTheDocument();
    expect(screen.getByText(t('fileUploadManager.fileStatusLabels.completed'))).toBeInTheDocument();
  });

  it('should renders rejected status correctly', () => {
    renderComponent(mockFileRejected);

    // that will never happen because que status will always be rejected
    if (mockFileRejected.status !== 'rejected') return;

    expect(screen.getByText(mockFileRejected.name)).toBeInTheDocument();
    expect(screen.getByText(mockFileRejected.reason)).toBeInTheDocument();
  });

  it('should renders omitted status correctly', () => {
    renderComponent(mockFileOmitted);

    expect(screen.getByText(t('fileUploadManager.fileStatusLabels.omitted'))).toBeInTheDocument();
  });
});
