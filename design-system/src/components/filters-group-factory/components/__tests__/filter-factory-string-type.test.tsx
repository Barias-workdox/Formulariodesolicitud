import { userEvent } from '@testing-library/user-event';

import { ContentTypes } from '@components/filters-group-factory/filter-group-factory.constants';
import { render, renderUseTranslation, screen, waitFor, within } from '@test/test-utils';

import { FilterFactoryStringType } from '../filter-factory-string-type';

import type { FilterFactoryStringTypeProps } from '../filter-factory-string-type';

describe('FilterFactoryStringType', () => {
  const mockOnFilterChange = vi.fn();
  const id = 'my-filter-id';
  const label = 'Text Filter';
  const suggestions = ['apple', 'banana', 'cherry', 'date'];
  const baseTestId = 'filter-test-id';

  const defaultProps: FilterFactoryStringTypeProps = {
    'data-testid': baseTestId,
    id,
    label,
    value: [],
    content: {
      type: ContentTypes.String,
      value: '',
      suggestions,
      typeVariant: 'text',
    },
    onFilterChange: mockOnFilterChange,
  };

  const { t } = renderUseTranslation();

  const renderComponent = (props: Partial<FilterFactoryStringTypeProps> = {}) => {
    return render(
      <FilterFactoryStringType
        {...defaultProps}
        {...props}
      />,
    );
  };

  beforeEach(() => {
    mockOnFilterChange.mockClear();
  });

  it('renders with initial label and value', () => {
    renderComponent({ content: { ...defaultProps.content, value: 'initial' } });

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('updates input value when user types', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(label));

    const input = screen.getByPlaceholderText(t('general.search'));

    await userEvent.click(input);

    await userEvent.type(input, 'test');

    expect(input).toHaveValue('test');
  });

  it('shows filtered suggestions based on input', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(label));

    const input = screen.getByPlaceholderText(t('general.search'));

    await userEvent.click(input);

    await userEvent.type(input, 'a');

    const suggestionList = screen.getByRole('list');
    const items = within(suggestionList).getAllByRole('button');

    expect(items).toHaveLength(3); // apple, banana, date
    expect(items[0]).toHaveTextContent('apple');
  });

  it('selects suggestion and updates value', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(label));

    const input = screen.getByPlaceholderText(t('general.search'));

    await userEvent.click(input);

    // Select first suggestion
    const suggestion = screen.getByText('apple');

    await userEvent.click(suggestion);

    await waitFor(() => {
      expect(input).toHaveValue('apple');
      expect(mockOnFilterChange).toHaveBeenCalledWith({
        filterId: id,
        type: ContentTypes.String,
        value: 'apple',
      });
    });
  });

  it('clears input when clear button is clicked', async () => {
    renderComponent({ value: [{ id, label: 'initial' }] });

    const clearButton = screen.getByTestId(
      'filters-group__text-filter--my-filter-id__end-enhancer-clear',
    );

    await userEvent.click(clearButton);

    expect(mockOnFilterChange).toHaveBeenCalledWith({
      filterId: id,
      type: ContentTypes.String,
      value: '',
    });
  });

  it('handles keyboard navigation through suggestions', async () => {
    HTMLElement.prototype.scrollIntoView = vi.fn();

    renderComponent();

    await userEvent.click(screen.getByText(label));

    const input = screen.getByPlaceholderText(t('general.search'));

    await userEvent.click(input);

    await userEvent.type(input, 'a');

    // Navigate down
    await userEvent.keyboard('{ArrowDown}');
    const firstSuggestion = screen.getByText('apple').closest('button');

    expect(firstSuggestion).toHaveAttribute('aria-selected', 'true');

    // Select with Enter
    await userEvent.keyboard('{Enter}');

    expect(mockOnFilterChange).toHaveBeenCalledWith({
      filterId: id,
      type: ContentTypes.String,
      value: 'apple',
    });

    expect(input).toHaveValue('apple');

    vi.restoreAllMocks();
  });

  it('shows recent searches header when suggestions exist', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(label));
    expect(screen.getByText(t('suggestionsInput.latestSearches'))).toBeInTheDocument();
  });

  it('handles special characters in input', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(label));

    const input = screen.getByPlaceholderText(t('general.search'));

    await userEvent.click(input);
    await userEvent.type(input, 'café123');

    expect(input).toHaveValue('café123');

    await userEvent.keyboard('{Enter}');

    expect(mockOnFilterChange).toHaveBeenCalledWith({
      filterId: id,
      type: ContentTypes.String,
      value: 'café123',
    });
  });
});
