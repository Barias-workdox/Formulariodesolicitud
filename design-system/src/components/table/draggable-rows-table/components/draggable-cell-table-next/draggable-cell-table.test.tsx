import { render, screen } from '@test/test-utils';

import { DraggableCellTable } from './draggable-cell-table';

import type { DraggableCellTableProps } from './draggable-cell-table';
import type { RenderType } from '@test/test-utils';

const defaultProps: DraggableCellTableProps = {
  'data-testid': 'draggable-table-cell',
  children: 'Cell text',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DraggableCellTableProps>): RenderType => {
  return render(
    <DraggableCellTable
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DraggableCellTable - test', () => {
  it('renders with default props', () => {
    renderComponent();
    const text = screen.getByText(defaultProps.children as string);

    expect(text).toBeInTheDocument();
  });

  it('renders correctly as disabled', () => {
    renderComponent({ isDisabled: true });
    const icon = screen.queryByTestId(`${defaultProps['data-testid']}--draggable-icon`);

    expect(icon).not.toBeInTheDocument();
  });
});
