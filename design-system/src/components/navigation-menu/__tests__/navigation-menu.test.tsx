import { render, screen } from '@test/test-utils';

import { NavigationMenu } from '../navigation-menu';

import type { RenderType } from '@test/test-utils';

const childrenMock = 'children mock';

const renderComponent = (): RenderType => render(<NavigationMenu>{childrenMock}</NavigationMenu>);

describe('NavigationMenu - tests', () => {
  it('renders the component correctly', () => {
    renderComponent();

    expect(screen.getByText(childrenMock)).toBeInTheDocument();
  });
});
