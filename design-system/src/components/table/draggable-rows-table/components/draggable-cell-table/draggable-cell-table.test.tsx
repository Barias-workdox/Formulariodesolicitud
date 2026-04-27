import { render } from '@test/test-utils';

import { DraggableCellTable } from './draggable-cell-table';

import type { RenderType } from '@test/test-utils';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType => {
  return render(<DraggableCellTable />);
};

describe('DraggableCellTable', () => {
  it('renders with default props', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });
});
