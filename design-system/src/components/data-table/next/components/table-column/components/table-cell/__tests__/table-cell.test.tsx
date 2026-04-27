import { render, screen, testHelpers } from '@test/test-utils';

import { TableCell } from '../table-cell';

describe('TableCell', () => {
  const renderComponent = (props = {}) => {
    return render(
      <TableCell
        isHeaderHovered={false}
        align="left"
        isRowHovered={false}
        isDragging={false}
        isRowClickable={false}
        height="40px"
        rowIndex={0}
        isRowChecked={false}
        {...props}
      >
        Cell Content
      </TableCell>,
    );
  };

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders children correctly', () => {
    renderComponent();
    expect(screen.getByText('Cell Content')).toBeInTheDocument();
  });
});
