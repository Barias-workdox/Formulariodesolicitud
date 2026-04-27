import { render, renderUseTranslation, screen } from '@test/test-utils';

import { mockFilesEveryType } from '../__mocks__/files.mocks';
import { FileUploadManagerList } from '../components/file-upload-manager-list';

import type { FileUploadManagerListProps } from '../components/file-upload-manager-list';

const defaultProps: FileUploadManagerListProps = {
  files: mockFilesEveryType,
};

const renderComponent = (props: Partial<FileUploadManagerListProps> = {}) => {
  return render(
    <FileUploadManagerList
      {...defaultProps}
      {...props}
    />,
  );
};

describe('FileUploadManagerList', () => {
  const { t } = renderUseTranslation();

  it('renders files correctly', () => {
    renderComponent();

    mockFilesEveryType.forEach((file) => {
      expect(screen.getByText(file.name)).toBeInTheDocument();
    });
  });

  it('renders empty state when no files are provided', () => {
    renderComponent({ files: [] });

    expect(screen.getByText(t('fileUploadManager.empty'))).toBeInTheDocument();
  });
});
