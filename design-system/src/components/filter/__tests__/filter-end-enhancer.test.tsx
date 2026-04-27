import { userEvent } from '@testing-library/user-event';

import { render, screen } from '@test/test-utils';

import { FilterEndEnhancer } from '../components/filter-end-enhancer';

import type { FilterEndEnhancerProps } from '../components/filter-end-enhancer';

describe('FilterEndEnhancer', () => {
  const testId = 'test-id';
  const chevronTestId = `${testId}-chevron`;
  const clearTestId = `${testId}-clear`;
  const onClearMock = vi.fn();

  const renderComponent = (props: Partial<FilterEndEnhancerProps> = {}) =>
    render(
      <FilterEndEnhancer
        data-testid={testId}
        isActive={false}
        onClear={onClearMock}
        {...props}
      />,
    );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders ChevronDown icon when isActive is false', () => {
    renderComponent({ isActive: false });

    expect(screen.queryByTestId(clearTestId)).not.toBeInTheDocument();

    const chevronDownIcon = screen.getByTestId(chevronTestId);

    expect(chevronDownIcon).toBeInTheDocument();
  });

  it('renders ClearButtonContainer when isActive is true', () => {
    renderComponent({ isActive: true });

    expect(screen.queryByTestId(chevronTestId)).not.toBeInTheDocument();

    const clearButtonContainer = screen.getByTestId(clearTestId);

    expect(clearButtonContainer).toBeInTheDocument();
  });

  it("doesnt't call onClear callback when chevron icon is clicked", async () => {
    renderComponent({ isActive: false });

    const chevronDownIcon = screen.getByTestId(chevronTestId);

    await userEvent.click(chevronDownIcon);

    expect(onClearMock).not.toHaveBeenCalled();
  });

  it('calls onClear callback when clear button is clicked', async () => {
    renderComponent({ isActive: true });

    const clearButtonContainer = screen.getByTestId(clearTestId);

    await userEvent.click(clearButtonContainer);

    expect(onClearMock).toHaveBeenCalled();
  });
});
