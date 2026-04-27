import { render, screen } from '@test/test-utils';

import { FileListItem } from '../components/file-list-item';

import type { FileListItemProps } from '../components/file-list-item';
import type { ListItemProps } from '../components/list-item';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'file-list-item';

const labelMock = 'Id laboris cupidatat nostrud qui in amet non fugiat.';
const detailsMock = 'Reprehenderit id cupidatat eu aliqua dolor labore aliquip do sint.';

const defaultProps: FileListItemProps = {
  label: labelMock,
  details: detailsMock,
  fileExtension: 'doc',
  'data-testid': baseDataTestId,
};

const renderComponent = (props?: Partial<ListItemProps>): RenderType =>
  render(
    <FileListItem
      {...defaultProps}
      {...props}
    />,
  );

describe('FileListItem', () => {
  it('renders the label and details correctly', () => {
    renderComponent();

    expect(screen.getByText(labelMock)).toBeInTheDocument();
    expect(screen.getByText(detailsMock)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--file-icon-doc`)).toBeInTheDocument();
  });
});
