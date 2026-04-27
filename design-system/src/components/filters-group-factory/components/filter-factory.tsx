import type { ReactElement } from 'react';

import { ContentTypes } from '../filter-group-factory.constants';

import { FilterFactoryDatepickerType } from './filter-factory-datepicker-type';
import { FilterFactoryListType } from './filter-factory-list-type';
import { FilterFactoryStringType } from './filter-factory-string-type';

import type {
  FilterFactoryConfig,
  OnFilterChangeParams,
} from '../filters-group-factory.interfaces';
import type { FilterProps } from '@components/filter/filter.interfaces';

export type FilterFactoryProps = Omit<FilterProps, 'content'> &
  Pick<FilterFactoryConfig, 'id' | 'content'> & {
    focusOnShow?: boolean;
    onFilterChange(changes: OnFilterChangeParams): void;
    onSearchValueChange?(value: string): void;
    hideVisibleFilter?(filterId: string): void;
  };

/**
 * Factory component that renders the appropriate filter type based on content configuration.
 * Acts as a dispatcher to route different filter types to their specific implementations.
 *
 * @remarks
 * Supported filter types:
 * - 'ContentTypes.List': Hierarchical item selection with drilldown navigation
 * - 'ContentTypes.String': Text input with search/autocomplete capabilities
 * - 'ContentTypes.Datepicker': Date range selection with calendar interface
 */
export const FilterFactory = (props: FilterFactoryProps): ReactElement => {
  const { id, content } = props;

  switch (content.type) {
    case ContentTypes.List: {
      return (
        <FilterFactoryListType
          {...props}
          key={id}
          content={content}
        />
      );
    }

    case ContentTypes.String: {
      return (
        <FilterFactoryStringType
          {...props}
          key={id}
          content={content}
        />
      );
    }

    case ContentTypes.Datepicker: {
      return (
        <FilterFactoryDatepickerType
          {...props}
          key={id}
          content={content}
        />
      );
    }
  }
};
