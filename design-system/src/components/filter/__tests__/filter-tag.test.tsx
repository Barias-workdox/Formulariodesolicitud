import { userEvent } from '@testing-library/user-event';

import { render, screen } from '@test/test-utils';

import { FilterTag } from '../components/filter-tag';

import type { FilterTagProps } from '../components/filter-tag';

describe('FilterTag', () => {
  const testId = 'test-id';
  const tooltipText = 'Selected Filters';
  const selectedItems = [{ id: 1 }, { id: 2 }];

  const renderComponent = (props: Partial<FilterTagProps> = {}) =>
    render(
      <FilterTag
        data-testid={testId}
        tooltipText={tooltipText}
        {...props}
      >
        {selectedItems.length}
      </FilterTag>,
    );

  it('should render the tag', () => {
    renderComponent();

    const tagElement = screen.getByTestId(testId);

    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveTextContent(selectedItems.length.toString());
  });

  it('should show the tooltip with the give text', async () => {
    renderComponent();

    await userEvent.hover(screen.getByTestId(testId));

    expect(await screen.findByText(tooltipText)).toBeInTheDocument();
  });
});
