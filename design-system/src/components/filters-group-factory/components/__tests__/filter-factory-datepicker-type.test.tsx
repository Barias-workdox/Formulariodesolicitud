import { userEvent } from '@testing-library/user-event';
import { formatISO, subDays, subMonths } from 'date-fns';

import { ContentTypes } from '@components/filters-group-factory/filter-group-factory.constants';
import { getIsoDateOnly } from '@components/utils/strings/date.utils';
import { renderUseDateUtilsWithLocale } from '@test/hooks/render-use-date-utils-with-locale';
import { render, renderUseTranslation, screen, waitFor } from '@test/test-utils';

import { FilterFactoryDatepickerType } from '../filter-factory-datepicker-type';

import type { FilterFactoryDatepickerTypeProps } from '../filter-factory-datepicker-type';

describe('FilterFactoryDatepickerType', () => {
  const todayISO = formatISO(new Date());
  const mockOnFilterChange = vi.fn();
  const id = 'date-filter';
  const label = 'Date Filter';

  const defaultProps: FilterFactoryDatepickerTypeProps = {
    id,
    label,
    content: { type: ContentTypes.Datepicker, range: false, date: null },
    onFilterChange: mockOnFilterChange,
  };

  const { t } = renderUseTranslation();
  const { formatDate, dateWithoutTimezoneOffset } = renderUseDateUtilsWithLocale();

  const renderComponent = (props: Partial<FilterFactoryDatepickerTypeProps> = {}) => {
    return render(
      <FilterFactoryDatepickerType
        {...defaultProps}
        {...props}
      />,
    );
  };

  beforeEach(() => {
    mockOnFilterChange.mockClear();
  });

  it('renders with initial value', () => {
    renderComponent();

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('updates filter value when date is selected', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(label));
    await userEvent.click(screen.getByText(t('calendar.today')));

    await waitFor(() => {
      expect(mockOnFilterChange).toHaveBeenCalledWith({
        filterId: id,
        type: ContentTypes.Datepicker,
        date: getIsoDateOnly(new Date()),
      });
    });
  });

  it('shows "Today" label when value is today', () => {
    renderComponent({ content: { ...defaultProps.content, date: todayISO } });

    const labelWithValue = `${label}: ${t('calendar.today')}`;

    expect(screen.getByText(labelWithValue)).toBeInTheDocument();
  });

  it('displays "Yesterday" label for yesterday date', async () => {
    const yesterdayISO = formatISO(subDays(new Date(), 1));

    renderComponent({ content: { ...defaultProps.content, date: yesterdayISO } });

    const labelWithValue = `${label}: ${t('calendar.yesterday')}`;

    expect(screen.getByText(labelWithValue)).toBeInTheDocument();
  });

  it('handles last 7 days selection', async () => {
    const last7DaysStartISO = formatISO(subDays(new Date(), 7));

    renderComponent({
      content: { ...defaultProps.content, range: true, date: [last7DaysStartISO, todayISO] },
    });

    const labelWithValue = `${label}: ${t('calendar.last7Days')}`;

    expect(screen.getByText(labelWithValue)).toBeInTheDocument();
  });

  it('handles last month selection', async () => {
    const lastMonthStartISO = formatISO(subMonths(new Date(), 1));

    renderComponent({
      content: { ...defaultProps.content, range: true, date: [lastMonthStartISO, todayISO] },
    });

    const labelWithValue = `${label}: ${t('calendar.lastMonth')}`;

    expect(screen.getByText(labelWithValue)).toBeInTheDocument();
  });

  it('displays formatted single date for non-special dates', async () => {
    const date = '2024-02-15';

    renderComponent({ content: { ...defaultProps.content, date } });

    const formattedDate = formatDate(dateWithoutTimezoneOffset(date).toISOString());

    const labelWithValue = `${label}: ${formattedDate}`;

    expect(screen.getByText(labelWithValue)).toBeInTheDocument();
  });

  it('handles custom date range selection', async () => {
    const dateRange = ['2024-01-01', '2024-01-05'];

    renderComponent({
      content: { ...defaultProps.content, range: true, date: dateRange },
    });

    const [from, to] = dateRange
      .map(dateWithoutTimezoneOffset)
      .map((date) => formatDate(date.toISOString()));

    const labelWithValue = `${label}: ${from} / ${to}`;

    expect(screen.getByText(labelWithValue)).toBeInTheDocument();
  });
});
