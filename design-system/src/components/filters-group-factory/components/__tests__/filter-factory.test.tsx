import { ContentTypes } from '@components/filters-group-factory/filter-group-factory.constants';
import { render, screen } from '@test/test-utils';

import { FilterFactory } from '../filter-factory';

import type { FilterFactoryProps } from '../filter-factory';
import type { FilterFactoryConfigContentMap } from '@components/filters-group-factory/filters-group-factory.interfaces';

describe('FilterFactory', () => {
  const baseProps: Omit<FilterFactoryProps, 'content'> = {
    id: 'test-filter',
    label: 'Test Filter',
    value: [],
    tooltipText: 'Test tooltip',
    focusOnShow: true,
    onFilterChange: vi.fn(),
    onSearchValueChange: vi.fn(),
  };

  const listContent: FilterFactoryConfigContentMap[ContentTypes.List] = {
    type: ContentTypes.List,
    items: [],
    pathIds: [],
    checkedIds: [],
    isFiltrable: true,
  };

  const stringContent: FilterFactoryConfigContentMap[ContentTypes.String] = {
    type: ContentTypes.String,
    value: '',
    suggestions: [],
    typeVariant: 'text',
  };

  const dateContent: FilterFactoryConfigContentMap[ContentTypes.Datepicker] = {
    type: ContentTypes.Datepicker,
    date: null,
    range: false,
  };

  beforeAll(() => {
    HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders List filter type correctly', () => {
    render(
      <FilterFactory
        {...baseProps}
        content={listContent}
      />,
    );

    expect(screen.getByText(baseProps.label)).toBeInTheDocument();
  });

  it('renders String filter type correctly', () => {
    render(
      <FilterFactory
        {...baseProps}
        content={stringContent}
      />,
    );

    expect(screen.getByText(baseProps.label)).toBeInTheDocument();
  });

  it('renders Datepicker filter type correctly', () => {
    render(
      <FilterFactory
        {...baseProps}
        content={dateContent}
      />,
    );

    expect(screen.getByText(baseProps.label)).toBeInTheDocument();
  });
});
