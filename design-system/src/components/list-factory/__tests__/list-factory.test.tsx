import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen } from '@test/test-utils';

import { ListFactory } from '../list-factory';

import type { Item, ListFactoryProps } from '../list-factory.interfaces';

import '@test/__mocks__/use-virtualizer.mock';

describe('ListFactory', () => {
  const testId = 'list-factory-test-id';
  const listTestId = `${testId}__list`;

  const emptyTitle = 'empty title';
  const mockOnItemClick = vi.fn();
  const mockOnSearchValueChange = vi.fn();

  const defaultProps: ListFactoryProps = {
    'data-testid': testId,
    items: [],
    isFiltrable: false,
    emptyStateProps: { title: emptyTitle },
    onItemClick: mockOnItemClick,
  };

  const { t } = renderUseTranslation();

  const renderComponent = (props: Partial<ListFactoryProps> = {}) => {
    render(
      <ListFactory
        {...defaultProps}
        {...(props as ListFactoryProps)}
      />,
    );
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders EmptyState when items is empty', () => {
    renderComponent();

    // Should render the EmptyState if no items
    expect(screen.getByText(emptyTitle)).toBeInTheDocument();
    // Should not render the list
    expect(screen.queryByTestId(listTestId)).not.toBeInTheDocument();
  });

  it('renders the list and its items when items is not empty', () => {
    const items: Item[] = [
      { id: '1', label: 'Item 1' },
      { id: '2', label: 'Item 2' },
    ];

    renderComponent({ items });

    // EmptyState should not be rendered
    expect(screen.queryByText(emptyTitle)).not.toBeInTheDocument();
    // We should have a list and 2 items
    expect(screen.getByTestId(listTestId)).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders the SearchContainer when isFiltrable is true', () => {
    renderComponent({
      isFiltrable: true,
      searchValue: '',
      onSearchValueChange: mockOnSearchValueChange,
    });

    // Should render an input for search
    expect(screen.getByPlaceholderText(t('general.search'))).toBeInTheDocument();
  });

  it('does not render the SearchContainer when isFiltrable is false', () => {
    renderComponent({ isFiltrable: false, onItemClick: mockOnItemClick });

    // Should not render an input for search
    expect(screen.queryByPlaceholderText(t('general.search'))).not.toBeInTheDocument();
  });

  it('calls onSearchValueChange when typing in the search input', async () => {
    renderComponent({
      isFiltrable: true,
      searchValue: '',
      onSearchValueChange: mockOnSearchValueChange,
    });

    const input = screen.getByPlaceholderText(t('general.search')) as HTMLInputElement;

    await userEvent.type(input, 'Hello');

    expect(mockOnSearchValueChange).toHaveBeenCalledTimes(5); // 'H' 'e' 'l' 'l' 'o'
  });

  it('clicking on a basic item calls onItemClick with correct item', async () => {
    const items: Item[] = [
      { id: '1', label: 'Item 1', kind: 'basic' },
      { id: '2', label: 'Item 2', kind: 'basic' },
    ];

    renderComponent({
      items,
    });

    const item2 = screen.getByText('Item 2');

    await userEvent.click(item2);
    // Should call the mock with item #2
    expect(mockOnItemClick).toHaveBeenCalledTimes(1);
    expect(mockOnItemClick).toHaveBeenCalledWith({ item: items[1], multi: false });
  });

  it("clicking on an item with sub-items triggers onSearchValueChange('')", async () => {
    const items: Item[] = [
      {
        id: '1',
        label: 'Parent',
        items: [{ id: 'child', label: 'Child Item' }],
      },
    ];

    renderComponent({
      items,
      isFiltrable: true,
      searchValue: '',
      onSearchValueChange: mockOnSearchValueChange,
    });

    const listItem = screen.getByText('Parent');

    await userEvent.click(listItem);

    // onItemClick should be called once
    expect(mockOnItemClick).toHaveBeenCalledWith({ item: items[0], multi: false });
    // If item has sub-items, also reset the search input
    expect(mockOnSearchValueChange).toHaveBeenCalledWith('');
  });

  it('renders avatar kind items with the correct data-kind attribute', () => {
    const items: Item[] = [{ id: '1', label: 'Avatar Item', kind: 'avatar' }];

    renderComponent({
      items,
      isFiltrable: false,
    });

    const listItem = screen.getByText('Avatar Item');

    expect(listItem).toBeInTheDocument();

    const initials = screen.getByText('AI');

    expect(initials).toBeInTheDocument();
  });

  it('renders group item with the correct data-kind attribute when it has sub-items', () => {
    const itemsWithSubItems: Item[] = [
      { id: '1', label: 'Group 1', kind: 'group', items: [{ id: '2', label: 'sub item' }] },
    ];

    renderComponent({
      items: itemsWithSubItems,
      isFiltrable: false,
    });

    const listItem = screen.getByText(itemsWithSubItems[0].label.toUpperCase());

    expect(listItem).toBeInTheDocument();
  });

  it('does not render group item if it does not have sub-items', () => {
    const itemsWithoutSubItems: Item[] = [{ id: '1', label: 'Group 1', kind: 'group' }];

    renderComponent({
      items: itemsWithoutSubItems,
      isFiltrable: false,
    });

    expect(screen.queryByText(itemsWithoutSubItems[0].label.toUpperCase())).not.toBeInTheDocument();
  });

  it('renders items with aiGenerated property and displays AI tag', () => {
    const items: Item[] = [
      { id: '1', label: 'Regular Item', kind: 'basic' },
      { id: '2', label: 'AI Generated Item', kind: 'basic', aiGenerated: true },
    ];

    renderComponent({ items });

    const regularItem = screen.getByText('Regular Item');
    const aiGeneratedItem = screen.getByText('AI Generated Item');

    expect(regularItem).toBeInTheDocument();
    expect(aiGeneratedItem).toBeInTheDocument();

    // Check that the aiGenerated item has an AI tag
    const aiTag = screen.queryByTestId('design-system-tag');

    expect(aiTag).toBeInTheDocument();

    // Verify that only one AI tag is present (for the aiGenerated item)
    const allAiTags = screen.queryAllByTestId('design-system-tag');

    expect(allAiTags).toHaveLength(1);
  });

  it('preserves aiGenerated property in nested items', async () => {
    const items: Item[] = [
      {
        id: 'parent',
        label: 'Parent Item',
        items: [
          { id: 'child1', label: 'Regular Child' },
          { id: 'child2', label: 'AI Generated Child', aiGenerated: true },
        ],
      },
    ];

    renderComponent({
      items,
      isFiltrable: true,
      searchValue: '',
      onSearchValueChange: mockOnSearchValueChange,
    });

    const parentItem = screen.getByText('Parent Item');

    // Click parent to navigate to children
    await userEvent.click(parentItem);

    // Verify the parent item and its nested items are passed correctly
    expect(mockOnItemClick).toHaveBeenCalledWith({
      item: items[0],
      multi: false,
    });

    // Verify the nested items structure is preserved
    const calledItem = mockOnItemClick.mock.calls[0][0].item;

    expect(calledItem.items).toEqual([
      { id: 'child1', label: 'Regular Child' },
      { id: 'child2', label: 'AI Generated Child', aiGenerated: true },
    ]);
  });
});
