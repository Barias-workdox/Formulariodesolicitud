import { render, screen } from '@test/test-utils';

import { PopoverMenuOptionsWrapper } from '../popover-menu-options-wrapper';

describe('PopoverMenuOptionsWrapper', () => {
  it('renders children correctly', () => {
    render(
      <PopoverMenuOptionsWrapper>
        <li>Option 1</li>
        <li>Option 2</li>
      </PopoverMenuOptionsWrapper>,
    );

    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  });
});
