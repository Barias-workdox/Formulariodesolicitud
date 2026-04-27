import { userEvent } from '@testing-library/user-event';

import { filtersConfigMock } from '@components/filters-group/__mocks__/filters.mock';
import { ExtraFiltersIconButton } from '@components/filters-group/components/extra-filters-icon-button';
import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import type { ExtraFiltersIconButtonProps } from '@components/filters-group/components/extra-filters-icon-button';
import type { RenderType } from '@test/test-utils';

const addVisibleFilterMock = vi.fn();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props: Partial<ExtraFiltersIconButtonProps> = {}): RenderType => {
  return render(
    <ExtraFiltersIconButton
      hiddenFilters={filtersConfigMock}
      addVisibleFilter={addVisibleFilterMock}
      {...props}
    />,
  );
};

describe('ExtraFiltersIconButton - tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly', async () => {
    renderComponent();

    const button = screen.getByTestId('filters_group--extra-filters-button');

    await userEvent.click(button);

    await waitFor(() => {
      for (const { label } of filtersConfigMock) {
        expect(screen.getByText(label)).toBeInTheDocument();
      }
    });
  });

  it('should not render when `hiddenFilters` is empty', async () => {
    renderComponent({ hiddenFilters: [] });

    expect(screen.queryByTestId('filters_group--extra-filters-button')).not.toBeInTheDocument();
  });
});
