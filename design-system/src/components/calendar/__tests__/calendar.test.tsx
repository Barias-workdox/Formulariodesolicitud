import { userEvent } from '@testing-library/user-event';
import { subMonths } from 'date-fns';

import { render, renderUseTranslation, screen } from '@test/test-utils';

import { Calendar } from '../calendar';

describe('Calendar', () => {
  const onChangeMock = vi.fn();

  const defaultProps = {
    value: null,
    range: false,
    onChange: onChangeMock,
  };

  /**
   * Extracts [year, month, day] from a Date object.
   * Useful for ignoring time/timezone differences.
   */
  function getDateParts(date: Date) {
    return [date.getFullYear(), date.getMonth(), date.getDate()];
  }

  const renderComponent = (props = {}) =>
    render(
      <Calendar
        {...defaultProps}
        {...props}
      />,
    );

  const { t } = renderUseTranslation();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders quick-select buttons', () => {
    renderComponent();

    expect(screen.getByText(t('calendar.today'))).toBeInTheDocument();
    expect(screen.getByText(t('calendar.last7Days'))).toBeInTheDocument();
    expect(screen.getByText(t('calendar.lastMonth'))).toBeInTheDocument();
  });

  it('handles today button click (compares year/month/day)', async () => {
    renderComponent();

    const now = new Date();
    const expectedParts = getDateParts(now);

    await userEvent.click(screen.getByText(t('calendar.today')));

    const actualDate = onChangeMock.mock.calls[0][0].date as Date;

    expect(getDateParts(actualDate)).toEqual(expectedParts);
  });

  it('handles last 7 days button click (compares year/month/day)', async () => {
    renderComponent();

    const now = new Date();
    const from = new Date();

    from.setDate(now.getDate() - 7);

    await userEvent.click(screen.getByText(t('calendar.last7Days')));

    const [actualFrom, actualTo] = onChangeMock.mock.calls[0][0].date as Date[];

    expect(getDateParts(actualFrom)).toEqual(getDateParts(from));
    expect(getDateParts(actualTo)).toEqual(getDateParts(now));
  });

  it('handles last month button click (compares year/month/day)', async () => {
    renderComponent();

    const now = new Date();
    const from = subMonths(now, 1);

    await userEvent.click(screen.getByText(t('calendar.lastMonth')));

    const [actualFrom, actualTo] = onChangeMock.mock.calls[0][0].date as Date[];

    expect(getDateParts(actualFrom)).toEqual(getDateParts(from));
    expect(getDateParts(actualTo)).toEqual(getDateParts(now));
  });

  it('handles clear button click', async () => {
    renderComponent({ value: new Date() });

    await userEvent.click(screen.getByText(t('calendar.clear')));

    expect(onChangeMock).toHaveBeenCalledWith({
      date: null,
    });
  });

  it('disables submit button when no changes are made', () => {
    renderComponent();

    expect(screen.getByText(t('calendar.submit'))).toBeDisabled();
  });

  it('enables submit button when changes are made', async () => {
    const initialDate = new Date('2024-01-01');

    renderComponent({ value: initialDate });

    // Simulate selecting a different date in the calendar
    const targetDayText = '15';
    const dateCell = screen.getByRole('gridcell', {
      name: (_accessibleName, element) => element.textContent === targetDayText,
    });

    await userEvent.click(dateCell);

    expect(screen.getByText(t('calendar.submit'))).toBeEnabled();
  });

  it('handles single date selection in non-range mode (compares year/month/day)', async () => {
    renderComponent({ range: false, value: null });

    const targetDayText = '10';
    const dateCell = screen.getByRole('gridcell', {
      name: (_accessibleName, element) => element.textContent === targetDayText,
    });

    await userEvent.click(dateCell);

    await userEvent.click(screen.getByText(t('calendar.submit')));

    const submittedDate = onChangeMock.mock.calls[0][0].date as Date;

    expect(Array.isArray(submittedDate)).toBe(false);

    const now = new Date();
    const [year, month] = getDateParts(now);

    expect(getDateParts(submittedDate)).toEqual([year, month, 10]);
  });

  it('handles range selection correctly with different start/end (compares year/month/day)', async () => {
    renderComponent({ range: true });

    const startDateCell = screen.getByRole('gridcell', {
      name: (_accessibleName, element) => element.textContent === '10',
    });
    const endDateCell = screen.getByRole('gridcell', {
      name: (_accessibleName, element) => element.textContent === '20',
    });

    await userEvent.click(startDateCell);
    await userEvent.click(endDateCell);

    await userEvent.click(screen.getByText(t('calendar.submit')));

    const submittedArray = onChangeMock.mock.calls[0][0].date as Date[];

    expect(Array.isArray(submittedArray)).toBe(true);

    const now = new Date();
    const [year, month] = getDateParts(now);

    // Compare the parts
    expect(getDateParts(submittedArray[0])).toEqual([year, month, 10]);
    expect(getDateParts(submittedArray[1])).toEqual([year, month, 20]);
  });

  it('handles range selection with the same start and end date (collapses to single date)', async () => {
    renderComponent({ range: true });

    const dateCell = screen.getByRole('gridcell', {
      name: (_accessibleName, element) => element.textContent === '15',
    });

    await userEvent.click(dateCell);
    await userEvent.click(dateCell);

    await userEvent.click(screen.getByText(t('calendar.submit')));

    // The same start/end date collapses to a single date
    const submittedValue = onChangeMock.mock.calls[0][0].date;

    expect(Array.isArray(submittedValue)).toBe(false);

    const now = new Date();
    const [year, month] = getDateParts(now);

    expect(getDateParts(submittedValue as Date)).toEqual([year, month, 15]);
  });

  it('updates local value when prop value changes', async () => {
    const { rerender } = renderComponent({ value: new Date('2024-01-01') });

    const newDate = new Date('2024-02-27');

    rerender(
      <Calendar
        {...defaultProps}
        value={newDate}
      />,
    );

    const selectedDate = screen.getByRole('gridcell', {
      name: (_accessibleName, element) => element.textContent === '27',
    });

    // We expect the new date to be highlighted
    expect(selectedDate).toHaveAttribute('aria-label', expect.stringContaining('Selected'));
  });
});
