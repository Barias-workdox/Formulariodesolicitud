import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { OrderByPopoverContent } from '../order-by-popover-content';

import type { ColumnDataType } from '../../../../../../../../../data-table.interfaces';
import type { OrderByPopoverContentProps } from '../order-by-popover-content';

const { t } = renderUseTranslation();

describe('OrderByPopoverContent', () => {
  const handleOnChange = testHelpers.fn();

  const renderComponent = (props: Partial<OrderByPopoverContentProps> = {}) => {
    return render(
      <OrderByPopoverContent
        id="columnId"
        isOrderedByThis={false}
        isSortable={true}
        isRemovable={true}
        dataType="string"
        orderDirection="asc"
        handleOnChange={handleOnChange}
        {...props}
      />,
    );
  };

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders correctly the sorting title when the column is sortable', () => {
    renderComponent({ isSortable: true });

    const sortByTitle = screen.getByText(t('dataTable.sortBy.title'));

    expect(sortByTitle).toBeInTheDocument();
  });

  it('doesnt render the sorting title when the column is not sortable', () => {
    renderComponent({ isSortable: false });

    const sortByTitle = screen.queryByText(t('dataTable.sortBy.title'));

    expect(sortByTitle).not.toBeInTheDocument();
  });

  it('renders correctly the hide column button if the column is removable', () => {
    renderComponent({ isRemovable: true });

    const hideColumnOption = screen.getByText(t('dataTable.sortBy.hideColumn'));

    expect(hideColumnOption).toBeInTheDocument();
  });

  it('doesnt render the hide column button if the column is not removable', () => {
    renderComponent({ isRemovable: false });

    const hideColumnOption = screen.queryByText(t('dataTable.sortBy.hideColumn'));

    expect(hideColumnOption).not.toBeInTheDocument();
  });

  it('handles hiding a column correctly', async () => {
    renderComponent();

    const hideColumnOption = screen.getByText(t('dataTable.sortBy.hideColumn'));

    await userEvent.click(hideColumnOption);

    expect(handleOnChange).toHaveBeenCalledWith({
      payload: { id: 'columnId' },
      event: 'hide-column',
    });
  });

  it('doesnt render the sorting options if the dataType="action"', () => {
    renderComponent({ dataType: 'action' });

    const sortingMenuTitle = screen.queryByText(t('dataTable.sortBy.title'));

    expect(sortingMenuTitle).not.toBeInTheDocument();
  });

  it('renders the checkmark correctly when the order direction is ascending and is ordered by this', () => {
    renderComponent({ orderDirection: 'asc', isOrderedByThis: true });

    const descCheckmark = screen.queryByLabelText(t('dataTable.ariaLabels.descChecked'));

    expect(descCheckmark).not.toBeInTheDocument();

    const ascCheckmark = screen.getByLabelText(t('dataTable.ariaLabels.ascChecked'));

    expect(ascCheckmark).toBeInTheDocument();
  });

  it('renders the checkmark correctly when the order direction is descending and is ordered by this', () => {
    renderComponent({ orderDirection: 'desc', isOrderedByThis: true });

    const ascCheckmark = screen.queryByLabelText(t('dataTable.ariaLabels.ascChecked'));

    expect(ascCheckmark).not.toBeInTheDocument();

    const descCheckmark = screen.getByLabelText(t('dataTable.ariaLabels.descChecked'));

    expect(descCheckmark).toBeInTheDocument();
  });

  const dataTypes: Partial<ColumnDataType>[] = ['string', 'number', 'date'];

  dataTypes.forEach((dataType) =>
    it(`renders correctly the sorting options for "${dataType}" datatype`, () => {
      renderComponent({ dataType });

      const ascOption = screen.getByText(t(`dataTable.sortBy.dataType.${dataType}.asc`));

      expect(ascOption).toBeInTheDocument();

      const descOption = screen.getByText(t(`dataTable.sortBy.dataType.${dataType}.desc`));

      expect(descOption).toBeInTheDocument();
    }),
  );

  it('handles sorting options click correctly', async () => {
    renderComponent({ dataType: 'string' });

    const ascOption = screen.getByText(t('dataTable.sortBy.dataType.string.asc'));

    await userEvent.click(ascOption);
    expect(handleOnChange).toHaveBeenCalledWith({
      payload: { orderBy: 'columnId', orderDirection: 'asc' },
      event: 'sort',
    });

    const descOption = screen.getByText(t('dataTable.sortBy.dataType.string.desc'));

    await userEvent.click(descOption);
    expect(handleOnChange).toHaveBeenCalledWith({
      payload: { orderBy: 'columnId', orderDirection: 'desc' },
      event: 'sort',
    });
  });
});
