import '@test/__mocks__/use-virtualizer.mock';

import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { VirtualizedMenu } from './virtualized-menu';

import type { VirtualizedMenuProps } from './virtualized-menu';

const items = new Array(100).fill(0).map((_, index) => ({ id: index, label: `Item ${index}` }));

const renderComponent = (props: Partial<VirtualizedMenuProps> = {}) =>
  render(
    <VirtualizedMenu
      maxHeight="200px"
      itemSize={40}
      items={items}
      {...props}
    />,
  );

describe('VirtualizedMenu', () => {
  it('renders VirtualizedMenu with provided items', () => {
    renderComponent();

    const item = screen.getByText('Item 1');

    // Verify that menu items are rendered
    expect(item).toBeInTheDocument();
  });

  it('triggers the option click event with option data', async () => {
    const onItemSelect = testHelpers.fn();

    renderComponent({ onItemSelect });

    const item = screen.getByText('Item 1');

    await userEvent.click(item);

    // Verify that onItemSelect is called with the correct item data
    expect(onItemSelect).toBeCalledWith({ item: { id: 1, label: 'Item 1' } });
  });
});
