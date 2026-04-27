import { render, screen } from '@test/test-utils';

import { PopoverMenuTitle } from '../popover-menu-title';

describe('PopoverMenuTitle', () => {
  it('renders children correctly', () => {
    render(
      <PopoverMenuTitle>
        <span>Title Content</span>
      </PopoverMenuTitle>,
    );

    const titleContent = screen.getByText('Title Content');

    expect(titleContent).toBeInTheDocument();
  });
});
