import { render, screen } from '@test/test-utils';

import { PopoverMenu } from '../popover-menu';

describe('PopoverMenu', () => {
  it('renders children correctly', () => {
    render(
      <PopoverMenu>
        <li>Item 1</li>
        <li>Item 2</li>
      </PopoverMenu>,
    );

    const item1 = screen.getByText('Item 1');
    const item2 = screen.getByText('Item 2');

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });
});
