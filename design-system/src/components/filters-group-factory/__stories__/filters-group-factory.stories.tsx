import { useCallback, useEffect, useMemo, useState } from 'react';

import { Flow, Music } from '@carbon/icons-react';
import { faker } from '@faker-js/faker';

import { getItemsTraversed } from '@components/list-factory/utils/list-factory.utils';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';
import { dateWithoutTimezoneOffset } from '@components/utils/strings/date.utils';

import { FiltersGroupFactory } from '..';
import { ContentTypes } from '../filter-group-factory.constants';
import { getFilterRawValuesArray } from '../utils/filters-group-factory.utils';

import type {
  FilterFactoryConfig,
  FilterFactoryRawValues,
  FiltersGroupFactoryProps,
  OnFilterChangeParams,
} from '..';
import type { Item } from '@components/list-factory/list-factory.interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Pickers/FiltersGroupFactory',
  component: FiltersGroupFactory,
} as Meta<typeof FiltersGroupFactory>;

// Common filter configurations
const createStringFilter = (): FilterFactoryConfig => ({
  id: faker.string.nanoid(),
  label: 'String filter',
  startEnhancer: (
    <img
      src={faker.image.avatarGitHub()}
      width="16"
      height="16"
      alt="String filter icon"
    />
  ),
  content: {
    type: ContentTypes.String,
    suggestions: [...new Set(faker.helpers.multiple(faker.animal.petName, { count: 10 }))],
    value: '',
  },
});

const createDateFilter = (): FilterFactoryConfig => ({
  id: faker.string.nanoid(),
  label: 'Date filter',
  startEnhancer: (
    <img
      src={faker.image.avatarGitHub()}
      width="16"
      height="16"
      alt="Date filter icon"
    />
  ),
  content: {
    type: ContentTypes.Datepicker,
    date: null,
    range: true,
    minDate: new Date('2024-01-10'),
    maxDate: new Date('2024-01-20'),
  },
});

const createNestedItems = (): Item => ({
  id: faker.string.nanoid(),
  label: faker.commerce.productName(),
  aiGenerated: faker.datatype.boolean(0.3),
  Icon: (
    <img
      src={faker.image.avatarGitHub()}
      width="16"
      height="16"
      alt="Nested item icon"
    />
  ),
  items: faker.helpers.multiple(
    () => ({
      id: faker.string.nanoid(),
      label: faker.music.songName(),
      Icon: <Music />,
      items: faker.helpers.multiple(
        () => ({
          id: faker.string.nanoid(),
          label: faker.location.city(),
          withCheckbox: true,
        }),
        { count: 10 },
      ),
    }),
    { count: 10 },
  ),
});

const createListFilters = (count: number): FilterFactoryConfig[] =>
  faker.helpers.multiple(
    (): FilterFactoryConfig => ({
      id: faker.string.nanoid(),
      startEnhancer: (
        <img
          src={faker.image.avatarGitHub()}
          width="16"
          height="16"
          alt="List filter icon"
        />
      ),
      label: faker.commerce.department(),
      multi: true,
      focusOnShow: false,
      content: {
        type: ContentTypes.List,
        typeVariant: 'text',
        pathIds: [],
        checkedIds: [],
        isFiltrable: [true, false, true],
        items: faker.helpers.multiple(createNestedItems, { count: 10 }),
      },
    }),
    { count },
  );

// Base template with common functionality
const BaseTemplate = ({
  initialFilters,
  onClearAllFiltersHandler,
  ...props
}: FiltersGroupFactoryProps & {
  initialFilters: FilterFactoryConfig[];
  onClearAllFiltersHandler(): FilterFactoryConfig[];
}) => {
  const [filtersConfig, setFiltersConfig] = useState<FilterFactoryConfig[]>(initialFilters);
  const [visibleFiltersIds, setVisibleFiltersIds] = useState(initialFilters.map(({ id }) => id));
  const { formatDate } = useDateUtilsWithLocale();

  // Calculate current raw values from the current filtersConfig state
  const currentRawValues: FilterFactoryRawValues[] = useMemo(
    () => getFilterRawValuesArray(filtersConfig, { defaultValues: false }),
    [filtersConfig],
  );

  useEffect(() => {
    setFiltersConfig(initialFilters);
  }, [initialFilters]);

  const handleClearFilters = useCallback(() => {
    setVisibleFiltersIds(initialFilters.map(({ id }) => id));
    setFiltersConfig(onClearAllFiltersHandler());
  }, [initialFilters, onClearAllFiltersHandler]);

  const showFilter = useCallback((id: string) => {
    setVisibleFiltersIds((oldValue) => [...oldValue, id]);
  }, []);

  /** hides a filter from the visible list and sends it to hidden filters (extra filters) */
  const hideVisibleFilter = useCallback((filterId: string) => {
    setVisibleFiltersIds((oldValue) => oldValue.filter((id) => id !== filterId));
  }, []);

  const handleFilterChange = useCallback(
    (args: OnFilterChangeParams) => {
      switch (args.type) {
        case ContentTypes.List: {
          const { filterId, pathIds, checkedIds } = args;

          setFiltersConfig((prev) =>
            prev.map((filter) => {
              if (filter.id !== filterId) return filter;

              const rootItems =
                filter.content.type === ContentTypes.List ? filter.content.items : [];

              const { items = [] } = getItemsTraversed(rootItems, pathIds).at(-1) || {};
              const checkedItems = items.filter(({ id }) => checkedIds.includes(id)) || [];

              return {
                ...filter,
                value: checkedItems,
                tooltipText: checkedItems.map(({ label }) => label).join(', '),
                content: { ...filter.content, pathIds, checkedIds },
              };
            }),
          );
          break;
        }

        case ContentTypes.String: {
          const { filterId, value } = args;

          setFiltersConfig((prev) =>
            prev.map((filter) =>
              filter.id === filterId
                ? {
                    ...filter,
                    value: value ? [{ id: filterId, label: value }] : [],
                    content: { ...filter.content, value },
                  }
                : filter,
            ),
          );
          break;
        }

        case ContentTypes.Datepicker: {
          const { filterId, date } = args;
          const getDateFormatted = (date: string) =>
            formatDate(dateWithoutTimezoneOffset(date).toISOString());

          const label = date
            ? Array.isArray(date)
              ? date.filter(Boolean).map(getDateFormatted).join(' - ')
              : getDateFormatted(date)
            : '';

          setFiltersConfig((prev) =>
            prev.map((filter) =>
              filter.id === filterId
                ? {
                    ...filter,
                    value: date ? [{ label, id: date.toString() }] : [],
                    content: { ...filter.content, date },
                  }
                : filter,
            ),
          );
          break;
        }
      }
    },
    [formatDate],
  );

  return (
    <FiltersGroupFactory
      {...props}
      defaultRawValues={currentRawValues}
      filtersConfig={filtersConfig}
      visibleFiltersId={visibleFiltersIds}
      addVisibleFilter={showFilter}
      onFilterChange={handleFilterChange}
      onClearAllFilters={handleClearFilters}
      hideVisibleFilter={hideVisibleFilter}
    />
  );
};

const templateInitialFilters = [createStringFilter(), createDateFilter(), ...createListFilters(3)];

// Stories implementations
const Template: StoryFn<typeof FiltersGroupFactory> = (props) => {
  return (
    <BaseTemplate
      {...props}
      initialFilters={templateInitialFilters}
      onClearAllFiltersHandler={() => [...templateInitialFilters]}
    />
  );
};

const AsyncListTemplate: StoryFn<typeof FiltersGroupFactory> = (props) => {
  const [, setSearchValue] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);

  const fetchNextPage = useCallback(() => {
    setIsFetchingNextPage(true);
    setTimeout(() => {
      const fetchedItems = faker.helpers.multiple(
        () => ({
          id: faker.string.nanoid(),
          label: faker.location.city(),
          withCheckbox: true,
        }),
        { count: 10 },
      );

      setItems((old) => [...old, ...fetchedItems]);
      setIsFetchingNextPage(false);
    }, 1000);
  }, []);

  const asyncListFilter: FilterFactoryConfig = useMemo(
    () => ({
      id: 'asyncList',
      label: 'Async list',
      startEnhancer: Flow,
      content: {
        type: ContentTypes.List,
        isFiltrable: true,
        items,
        pathIds: [],
        checkedIds: [],
        paginationProps: {
          isFetchingNextPage,
          onPageEnd: fetchNextPage,
        },
        onSearchValueChange: setSearchValue,
      },
    }),
    [isFetchingNextPage, items, fetchNextPage],
  );

  const initialFilters = useMemo(() => [asyncListFilter], [asyncListFilter]);

  return (
    <BaseTemplate
      {...props}
      initialFilters={initialFilters}
      onClearAllFiltersHandler={() => [asyncListFilter]}
    />
  );
};

export const Default = Template.bind({});

export const AsyncList = AsyncListTemplate.bind({});

export const WithMaxActiveFilters = Template.bind({});

WithMaxActiveFilters.args = {
  maxActiveFilters: 2,
};
