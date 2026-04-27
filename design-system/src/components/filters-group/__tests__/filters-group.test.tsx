import { Star } from '@carbon/icons-react';
import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

import { StatefulFiltersGroup } from '../stateful-filters-group';

import type { StatefulFiltersGroupProps } from '../stateful-filters-group';
import type { RenderType } from '@test/test-utils';

const onClearAllFiltersMock = testHelpers.fn();

const defaultValues: StatefulFiltersGroupProps = {
  isDirty: false,
  onClearAllFilters: onClearAllFiltersMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<StatefulFiltersGroupProps>): RenderType => {
  return render(
    <StatefulFiltersGroup
      {...defaultValues}
      {...props}
    >
      <StatefulFiltersGroup.Filter
        content="content"
        id="status-1"
        label="status-1"
        startEnhancer={Star}
      />
      <StatefulFiltersGroup.Filter
        content="content"
        id="status-2"
        label="status-2"
        startEnhancer={Star}
      />
      <StatefulFiltersGroup.Filter
        content="content"
        id="status-3"
        label="status-3"
        startEnhancer={Star}
      />
      <StatefulFiltersGroup.Filter
        content="content"
        id="status-4"
        label="status-4"
      />
    </StatefulFiltersGroup>,
  );
};

describe('FiltersGroup - tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  const { t } = renderUseTranslation();

  it('should render correctly', () => {
    renderComponent();

    // The first two filters area displayed by default
    expect(screen.getByText('status-1')).toBeInTheDocument();
    expect(screen.getByText('status-2')).toBeInTheDocument();
  });

  it('should render extra filters correctly', async () => {
    renderComponent();

    // The extra filters button is displayed when there are hidden filters
    const extraFiltersButton = screen.getByTestId('filters_group--extra-filters-button');

    await userEvent.click(extraFiltersButton);

    expect(await screen.findByText('status-3')).toBeInTheDocument();
    expect(screen.getByText('status-4')).toBeInTheDocument();
  });

  it('should display hidden filters correctly when are added using the extra filters button', async () => {
    renderComponent();

    const extraFiltersButton = screen.getByTestId('filters_group--extra-filters-button');

    expect(screen.getAllByTestId('filter').length).toBe(2);

    await userEvent.click(extraFiltersButton);

    const hiddenFilter = await screen.findByText('status-3');

    await userEvent.click(hiddenFilter);

    await waitFor(() => expect(screen.getAllByTestId('filter').length).toBe(3));
  });

  it('should clean all filters correctly', async () => {
    renderComponent();

    const extraFiltersButton = screen.getByTestId('filters_group--extra-filters-button');

    expect(screen.getAllByTestId('filter').length).toBe(2);

    await userEvent.click(extraFiltersButton);

    const hiddenFilter = await screen.findByText('status-3');

    await userEvent.click(hiddenFilter);

    await waitFor(() => expect(screen.getAllByTestId('filter').length).toBe(3));

    // Should clean filters correctly
    const cleanButton = screen.getByText(t('filtersGroup.cleanAllFilters'));

    userEvent.click(cleanButton);

    await waitFor(() => {
      expect(screen.getAllByTestId('filter').length).toBe(2);
      expect(onClearAllFiltersMock).toHaveBeenCalled();
    });
  });
});
