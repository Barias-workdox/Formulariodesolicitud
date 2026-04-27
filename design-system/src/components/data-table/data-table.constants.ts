/** The default height for the header. It will be applied as the height css style into the cell styles. */
export const DEFAULT_HEADER_HEIGHT = 48;

/** The default height for the rows. It will be applied as the height css style into the cell styles. */
export const DEFAULT_ROW_HEIGHT = 48;

export const ROW_SELECTION_COLUMN_WIDTH = '52px';

/** Default number ot skeleton rows to display when the table is loading. */
export const DEFAULT_SKELETON_ROW_COUNT = 10;

/** Default value for the items that would be fetched in a pagination process */
export const DEFAULT_ITEMS_PER_PAGE = 10;

/**
 * The minimum number of columns required to display the search filter in the table actions popover menu.
 * When the number of missing columns exceeds this value, the search container will be rendered to allow users to filter columns.
 */
export const TABLE_MENU_SEARCH_FILTER_THRESHOLD = 10;

/** Default value for the overscan in the virtualizer */
export const VIRTUALIZATION_OVERSCAN = 20;

/** Default value for the end of page node margin */
export const INFINITE_SCROLL_PAGINATION_MARGIN = '100px';

export const MIN_COLUMN_WIDTH = '100px';

export const DEFAULT_COLUMN_WIDTH = '500px';

/**
 * The z-index values for the data table.
 * This is used to ensure that the elements are displayed in the correct order.
 */
export const DATA_TABLE_Z_INDEX = {
  base: 0,
  draggingColumn: 1,
  sticky: 2,
  fixedColumn: 3,
  rowSelectionColumn: 4,
  popover: 5,
};
