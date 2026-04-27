import { CheckmarkFilled, Edit, OverflowMenuHorizontal, Send } from '@carbon/icons-react';
import { faker } from '@faker-js/faker';
import { action } from 'storybook/actions';

import { Button } from '@components/button/next';

import { DisabledRowTooltip } from '../components/common/disabled-row-tooltip';
import { TableActionButton } from '../components/common/table-action-button';
import { PopoverMenu } from '../components/popover-menu';
import { DEFAULT_ITEMS_PER_PAGE } from '../data-table.constants';
import { useDataTableDisabledRow } from '../hooks/use-data-table-disabled-row';
import { getInfiniteTableData, getTableData } from '../utils/data-table.utils';

import { allColumnsConfig, defaultPaginationSettings } from './data-table-stories.constants';

import type { ActiveColumn } from '..';
import type {
  StoriesAllColumnIds,
  StoriesDataType,
  StoriesTableProps,
} from './data-table-stories.interfaces';

/**
 * Define a custom action button component
 */
const ActionButton = ({ id }: StoriesDataType): JSX.Element => (
  <TableActionButton
    dataTestId={`data-table__action-button--${id}`}
    popoverProps={{
      popoverMargin: 8,
      placement: 'left',
      content: () => (
        <PopoverMenu>
          <PopoverMenu.Item
            dataTestId={`${id}--hello-world`}
            $styles={{ justifyContent: 'flex-start' }}
            onClick={() => action('Hello World clicked')(id)}
          >
            <Edit /> Hello World
          </PopoverMenu.Item>
          <PopoverMenu.Item
            dataTestId={`${id}--lorem-ipsum`}
            $styles={{ justifyContent: 'flex-start' }}
            onClick={() => action('Hello World clicked')(id)}
          >
            <Send /> Lorem ipsum
          </PopoverMenu.Item>
        </PopoverMenu>
      ),
    }}
  >
    <OverflowMenuHorizontal />
  </TableActionButton>
);

/** Renders a custom action cell with a disabled row tooltip to show why the button is disabled when it applies */
const CustomActionCell = ({ id }: { id: string }): JSX.Element => {
  const { isRowDisabled } = useDataTableDisabledRow();

  return (
    <DisabledRowTooltip>
      <Button
        kind="neutral"
        appearance="outlined"
        endEnhancer={() => <CheckmarkFilled color="deepskyblue" />}
        onClick={() => action('clicked')(id)}
        disabled={isRowDisabled}
      >
        Click me
      </Button>
    </DisabledRowTooltip>
  );
};

/**
 * Get the active columns for the table
 */
export const getActiveColumns = (ids: StoriesAllColumnIds[]): ActiveColumn<StoriesAllColumnIds>[] =>
  allColumnsConfig.filter(({ id }) => ids.includes(id)).map(({ id }) => ({ id }));

/**
 * Generate sample data for the table
 */
export const getRawData = (totalItems = DEFAULT_ITEMS_PER_PAGE): StoriesDataType[] =>
  new Array(totalItems).fill(0).map((_, index) => ({
    id: faker.string.hexadecimal({ length: 7 }),
    name: faker.person.fullName(),
    collectedInsect: faker.animal.insect(),
    quantity: faker.number.int(),
    collectedDate: faker.date.anytime().toISOString(),
    updatedAt: faker.date.anytime().toISOString(),
    extraLargeColumnName: faker.string.alpha({ length: 50 }),
    rowNumber: index + 1,
    aiColumn: faker.animal.bird(),
  }));

/**
 * Define a function to fetch and format data for the table
 */
export const getData = ({
  rawData = getRawData(),
  activeColumns,
  allColumnsConfig,
}: Pick<StoriesTableProps, 'activeColumns' | 'allColumnsConfig'> & {
  rawData: StoriesDataType[];
}): React.ReactNode[][] =>
  getTableData({
    rawData,
    activeColumns,
    allColumnsConfig,
    customRenders: {
      'custom-action': ({ id }) => <CustomActionCell id={id} />,
    },
    actionCell: ActionButton,
  });

/**
 * Get the infinite data for the table
 */
export const getInfiniteData = ({
  rawData = getRawData(),
  activeColumns,
  allColumnsConfig,
  isLoading,
  paginationSettings = { ...defaultPaginationSettings, isEnabled: false },
}: Pick<
  StoriesTableProps,
  'activeColumns' | 'allColumnsConfig' | 'isLoading' | 'paginationSettings'
> & {
  rawData: StoriesDataType[];
}): React.ReactNode[][] =>
  getInfiniteTableData({
    isLoading,
    rawData,
    activeColumns,
    allColumnsConfig,
    paginationSettings,
    customRenders: {
      'custom-action': ({ id }) => <CustomActionCell id={id} />,
    },
    actionCell: ActionButton,
  });
