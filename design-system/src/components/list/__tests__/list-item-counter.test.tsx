import { render, screen } from '@test/test-utils';

import { ListItemCounter } from '../components/list-item-counter';

import type { ListItemCounterProps } from '../components/list-item-counter';
import type { RenderType } from '@test/test-utils';

const renderComponent = (props?: Partial<ListItemCounterProps>): RenderType =>
  render(<ListItemCounter quantity={props?.quantity ?? 0} />);

describe('ListItemCounter', () => {
  it('renders the quantity correctly', () => {
    const quantity = 5;

    renderComponent({
      quantity,
    });
    expect(screen.getByText(`(${quantity})`)).toBeInTheDocument();
  });

  it('renders 0 when quantity is not provided', () => {
    renderComponent({});
    expect(screen.getByText('(0)')).toBeInTheDocument();
  });
});
