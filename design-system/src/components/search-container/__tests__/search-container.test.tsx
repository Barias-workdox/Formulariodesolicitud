import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen } from '@test/test-utils';

import { SearchContainer } from '../search-container';

import type { SearchContainerProps } from '../search-container';

const onSearchChange = vi.fn();

const renderComponent = (props: Partial<SearchContainerProps> = {}) => {
  return render(
    <SearchContainer
      {...props}
      searchValue=""
      onSearchChange={onSearchChange}
    >
      <div data-testid="children-content">Children content</div>
    </SearchContainer>,
  );
};

describe('SearchContainer', () => {
  const { t } = renderUseTranslation();

  it('renders the search input and children correctly', async () => {
    renderComponent();

    // The search input should be in the document
    const input = screen.getByPlaceholderText(t('general.search'));

    expect(input).toBeInTheDocument();

    // The children should be rendered
    const childContent = screen.getByTestId('children-content');

    expect(childContent).toBeInTheDocument();

    // Type into the search input
    await userEvent.type(input, 'Hello');
    expect(onSearchChange).toHaveBeenCalledTimes(5); // 'H', 'e', 'l', 'l', 'o'
  });

  it('allows customizing the placeholder', () => {
    const searchPlaceholder = 'Custom placeholder';

    renderComponent({ searchPlaceholder });

    expect(screen.getByPlaceholderText(searchPlaceholder)).toBeInTheDocument();
  });
});
