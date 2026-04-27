import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { OrderByButton } from '../order-by-button';

import type { OrderByButtonProps } from '../order-by-button';

const { t } = renderUseTranslation();

const label = 'name';

describe('OrderByButton', () => {
  const handleOnChange = testHelpers.fn();

  const renderComponent = (props: Partial<OrderByButtonProps> = {}) => {
    render(
      <OrderByButton
        id="columnId"
        label={label}
        isOrderedByThis={false}
        isSortable={true}
        isRemovable={true}
        orderDirection="asc"
        dataType="string"
        handleOnChange={handleOnChange}
        {...props}
      />,
    );
  };

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders correctly', () => {
    renderComponent();

    const button = screen.getByLabelText(`${label} ${t('dataTable.ariaLabels.sortingButton')}`);

    expect(button).toBeInTheDocument();
  });

  it('renders the ascending order icon when ordered by this', () => {
    renderComponent({ isOrderedByThis: true, orderDirection: 'asc' });

    expect(screen.queryByLabelText(t('dataTable.ariaLabels.sortingDesc'))).not.toBeInTheDocument();

    expect(
      screen.getByLabelText(`${label} ${t('dataTable.ariaLabels.sortingAsc')}`),
    ).toBeInTheDocument();
  });

  it('renders the descending order icon when ordered by this', () => {
    renderComponent({ isOrderedByThis: true, orderDirection: 'desc' });

    expect(screen.queryByLabelText(t('dataTable.ariaLabels.sortingAsc'))).not.toBeInTheDocument();

    expect(
      screen.getByLabelText(`${label} ${t('dataTable.ariaLabels.sortingDesc')}`),
    ).toBeInTheDocument();
  });

  it('renders the sortable icon when not ordered by this', () => {
    renderComponent({ isOrderedByThis: false });

    expect(screen.queryByLabelText(t('dataTable.ariaLabels.sortingDesc'))).not.toBeInTheDocument();
    expect(screen.queryByLabelText(t('dataTable.ariaLabels.sortingAsc'))).not.toBeInTheDocument();
    expect(
      screen.getByLabelText(`${label} ${t('dataTable.ariaLabels.sortingButton')}`),
    ).toBeInTheDocument();
  });

  it('handles the popover menu correctly', async () => {
    renderComponent();

    const button = screen.getByLabelText(`${label} ${t('dataTable.ariaLabels.sortingButton')}`);

    expect(button).toBeInTheDocument();

    // Simulate a click to open the popover
    await userEvent.click(button);

    const popoverContent = screen.getByText(t('dataTable.sortBy.title'));

    expect(popoverContent).toBeInTheDocument();

    // Simulate a click on a menu item
    const menuItem = screen.getByText(t('dataTable.sortBy.dataType.string.asc'));

    await userEvent.click(menuItem);

    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});
