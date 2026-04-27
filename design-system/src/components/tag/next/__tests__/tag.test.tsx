import { Close } from '@carbon/icons-react';
import { userEvent } from '@testing-library/user-event';

import { render, screen } from '@test/test-utils';

import { Tag } from '../tag';

import type { TagProps } from '../tag.interfaces';

const mockText = 'Test Tag';

const defaultProps: TagProps = {
  kind: 'neutral',
  variant: 'light',
  shape: 'rounded',
  disabled: false,
  size: 'md',
  icon: undefined,
  showAction: false,
  actionIcon: Close,
  children: mockText,
};

const renderComponent = (props?: Partial<TagProps>) => {
  return render(
    <Tag
      {...defaultProps}
      {...props}
    />,
  );
};

describe('Tag component', () => {
  it('renders correctly with default props', () => {
    renderComponent();

    const tagElement = screen.getByTestId('design-system-tag');

    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveTextContent('Test Tag');
  });

  it('renders with an action button when showAction is true and onClick is provided', () => {
    renderComponent({ showAction: true, onClick: vi.fn() });

    const actionButton = screen.getByRole('button');

    expect(actionButton).toBeInTheDocument();
  });

  it('calls onClick when the action button is clicked', async () => {
    const handleClick = vi.fn();

    renderComponent({ showAction: true, onClick: handleClick });

    const actionButton = screen.getByRole('button');

    await userEvent.click(actionButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
