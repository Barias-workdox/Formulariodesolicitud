import { render, screen } from '@test/test-utils';

import { AvatarListItem } from '../components/avatar-list-item';

import type { AvatarListItemProps } from '../components/avatar-list-item';
import type { ListItemProps } from '../components/list-item';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'avatar-list-item';

const labelMock = 'Id laboris cupidatat nostrud qui in amet non fugiat.';
const detailsMock = 'Reprehenderit id cupidatat eu aliqua dolor labore aliquip do sint.';

const defaultProps: AvatarListItemProps = {
  label: labelMock,
  details: detailsMock,
  'data-testid': baseDataTestId,
  avatarProps: {
    name: 'Lorem Ipsum',
  },
};

const renderComponent = (props?: Partial<ListItemProps>): RenderType =>
  render(
    <AvatarListItem
      {...defaultProps}
      {...props}
    />,
  );

describe('AvatarListItem - tests', () => {
  it('renders component correctly', () => {
    renderComponent();

    expect(screen.getByText(labelMock)).toBeInTheDocument();
    expect(screen.getByText(detailsMock)).toBeInTheDocument();
    expect(screen.getByText('LI')).toBeInTheDocument();
  });
});
