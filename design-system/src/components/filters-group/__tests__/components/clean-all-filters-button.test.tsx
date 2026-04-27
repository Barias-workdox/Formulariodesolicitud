import { userEvent } from '@testing-library/user-event';

import { CleanAllFiltersButton } from '@components/filters-group/components/clean-all-filters-button';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import type { RenderType } from '@test/test-utils';

const onClearAllFiltersMock = vi.fn();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType => {
  return render(<CleanAllFiltersButton onClearAllFilters={onClearAllFiltersMock} />);
};

describe('CleanAllFiltersButton - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByText(t('filtersGroup.cleanAllFilters'))).toBeInTheDocument();
  });

  it('should execute `onClick` correctly when button is clicked', async () => {
    renderComponent();

    const button = screen.getByText(t('filtersGroup.cleanAllFilters'));

    await userEvent.click(button);

    expect(onClearAllFiltersMock).toHaveBeenCalled();
  });
});
