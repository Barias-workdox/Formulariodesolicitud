import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactElement } from 'react';

import { CheckmarkOutline, Clean } from '@carbon/icons-react';
import { Calendar as BaseCalendar } from 'baseui/datepicker';
import { subDays, subMonths } from 'date-fns';

import { Button } from '@components/button';
import { getDatepickerOverrides } from '@components/datepicker/next/datepicker.overrides';
import { useTranslation } from '@components/utils';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useCss } from '@components/utils/hooks/use-css';
import { isSameDay, isWithinBounds } from '@components/utils/strings/date.utils';
import { useDateFnsLocale } from '@hooks/use-date-fns-locale';

import { StyledButtonsContainer, StyledContainer, StyledWrapper } from './calendar.styles';
import { getRangeValue, isDifferentDateIgnoringTime } from './calendar.utils';

import type { DateValue } from './calendar.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { DatepickerProps } from 'baseui/datepicker';

type CalendarProps = WithTestId &
  Pick<DatepickerProps, 'value' | 'range' | 'minDate' | 'maxDate' | 'onChange'> & {
    withBorder?: boolean;
  };

/**
 * Renders a calendar component with quick-select buttons for today, last 7 days, and last month.
 * Users can also clear the selection or submit their choice.
 */
export const Calendar = ({
  dataTestId = 'calendar',
  value,
  range,
  minDate,
  maxDate,
  withBorder,
  onChange,
}: CalendarProps): ReactElement => {
  const [localValue, setLocalValue] = useState<DateValue>(value);
  const { theme } = useCss();
  const { t } = useTranslation();
  const { dateFnsLocale } = useDateFnsLocale();

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const mergedOverrides = useMemo(
    () => mergeOverridesDeep(getDatepickerOverrides({ dataTestId })),
    [dataTestId],
  );

  // Check if current localValue is different from incoming value
  const canSubmit = isDifferentDateIgnoringTime(localValue, value);

  /**
   * Updates the local date value when the user changes the date on the calendar.
   * If the component is in range mode and the user selects the same start and end date,
   * it stores only a single date (rather than an array with a repeated value).
   */
  const handleChange = useCallback(
    ({ date }): void => {
      if (range) {
        const valueUpdated = getRangeValue(date);

        const isRangeSameDay =
          valueUpdated.filter(Boolean).length === 2 && isSameDay(valueUpdated[0], valueUpdated[1]);

        if (isRangeSameDay) {
          setLocalValue(valueUpdated[0]);
        } else {
          setLocalValue(valueUpdated);
        }
      } else {
        setLocalValue(Array.isArray(date) ? date[0] : date);
      }
    },
    [range],
  );

  /**
   * Sets the calendar date to 'today'.
   */
  const handleToday = useCallback((): void => {
    const date = new Date();

    onChange({ date });
    setLocalValue(date);
  }, [onChange]);

  /**
   * Sets the calendar date as a range since the last 7 days from today.
   */
  const handleLast7Days = useCallback((): void => {
    const to = new Date();
    const from = subDays(to, 7);

    onChange({ date: [from, to] });
    setLocalValue([from, to]);
  }, [onChange]);

  /**
   * Sets the calendar date as a range since exactly one month ago.
   */
  const handleLastMonth = useCallback((): void => {
    const to = new Date();
    const from = subMonths(to, 1);

    onChange({ date: [from, to] });
    setLocalValue([from, to]);
  }, [onChange]);

  /**
   * Clears the currently selected date.
   */
  const handleClear = useCallback((): void => {
    onChange({ date: null });
    setLocalValue(null);
  }, [onChange]);

  /**
   * Submits the locally selected date(s) to the parent `onChange` callback.
   *
   * - If there's only one non-null date in the `localValue` array, it submits just that single date.
   * - Otherwise, it submits the entire `localValue` (which may be a date, `null`, or an array of dates).
   */
  const handleSubmit = useCallback((): void => {
    if (Array.isArray(localValue)) {
      const filtered = localValue.filter(Boolean);
      if (filtered.length === 1) {
        onChange({ date: filtered[0] });

        return;
      }
    }

    onChange({ date: localValue });
  }, [localValue, onChange]);

  /**
   * Determines whether each quick-select button should be disabled based on minDate and maxDate.
   */
  const today = new Date();
  const last7DaysFrom = subDays(today, 7);
  const lastMonthFrom = subMonths(today, 1);

  // Determine if 'Today' button should be disabled
  const isTodayDisabled = !isWithinBounds(today, minDate, maxDate);

  // Determine if 'Last 7 Days' button should be disabled
  const isLast7DaysDisabled = !isWithinBounds([last7DaysFrom, today], minDate, maxDate);

  // Determine if 'Last Month' button should be disabled
  const isLastMonthDisabled = !isWithinBounds([lastMonthFrom, today], minDate, maxDate);

  return (
    <StyledContainer $withBorder={withBorder}>
      <StyledButtonsContainer>
        <Button
          data-testid={`${dataTestId}__today-button`}
          kind="control"
          size="32px"
          paddingLeft={theme.spacing.spacingXs}
          paddingRight={theme.spacing.spacingXs}
          fullWidth
          onClick={handleToday}
          disabled={isTodayDisabled}
        >
          {t('calendar.today')}
        </Button>
        <Button
          data-testid={`${dataTestId}__last7days-button`}
          kind="control"
          size="32px"
          paddingLeft={theme.spacing.spacingXs}
          paddingRight={theme.spacing.spacingXs}
          fullWidth
          onClick={handleLast7Days}
          disabled={isLast7DaysDisabled}
        >
          {t('calendar.last7Days')}
        </Button>
        <Button
          data-testid={`${dataTestId}__lastmonth-button`}
          kind="control"
          size="32px"
          paddingLeft={theme.spacing.spacingXs}
          paddingRight={theme.spacing.spacingXs}
          fullWidth
          onClick={handleLastMonth}
          disabled={isLastMonthDisabled}
        >
          {t('calendar.lastMonth')}
        </Button>
      </StyledButtonsContainer>

      <StyledWrapper>
        <BaseCalendar
          locale={dateFnsLocale}
          value={localValue}
          range={range || Array.isArray(localValue)}
          minDate={minDate}
          maxDate={maxDate}
          overrides={mergedOverrides}
          onChange={handleChange}
        />

        <StyledButtonsContainer>
          <Button
            data-testid={`${dataTestId}__clear-button`}
            kind="secondary"
            size="32px"
            startEnhancer={Clean}
            fullWidth
            onClick={handleClear}
            disabled={!localValue}
          >
            {t('calendar.clear')}
          </Button>

          <Button
            data-testid={`${dataTestId}__submit-button`}
            kind="primary"
            size="32px"
            startEnhancer={CheckmarkOutline}
            fullWidth
            onClick={handleSubmit}
            disabled={!canSubmit}
          >
            {t('calendar.submit')}
          </Button>
        </StyledButtonsContainer>
      </StyledWrapper>
    </StyledContainer>
  );
};
