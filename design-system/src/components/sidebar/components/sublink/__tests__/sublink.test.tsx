import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { Sublink } from '../sublink';

import type { SublinkItem } from '../sublink';

describe('Sublink - tests', () => {
  const position = { top: 10, left: 20 };

  const items: SublinkItem[] = [
    { id: 'item-1', label: 'Item 1', href: '/item-1', disabled: false, counter: 3 },
    { id: 'item-2', label: 'Item 2', href: '/item-2', disabled: true },
  ];

  it('renders title and items', () => {
    render(
      <Sublink
        title="My title"
        items={items}
        position={position}
      />,
    );

    expect(screen.getByTestId('sidebar-sublink')).toBeInTheDocument();
    expect(screen.getByText('My title')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('passes href to menu items for client-side navigation', () => {
    render(
      <Sublink
        title="My title"
        items={items}
        position={position}
      />,
    );

    const roots = screen.getAllByTestId('menu-item--root');

    expect(roots[0]).toHaveAttribute('href', '/item-1');
    expect(roots[1]).toHaveAttribute('href', '/item-2');
  });

  it('calls onItemClick when clicking an enabled item and ignores disabled ones', async () => {
    const onItemClick = testHelpers.fn();

    render(
      <Sublink
        title="My title"
        items={items}
        position={position}
        onItemClick={onItemClick}
      />,
    );

    const roots = screen.getAllByTestId('menu-item--root');

    await userEvent.click(roots[0]);
    expect(onItemClick).toHaveBeenCalledWith(items[0]);

    await userEvent.click(roots[1]);
    expect(onItemClick).toHaveBeenCalledTimes(1);
  });
});
