import { Button } from '@components/button/next';

import { themedStyled } from '../../themes';

import type { WithTestId } from '@interfaces/common.interfaces';

type ScheduleOptions = {
  value: string;
  name: string;
};

type HourSelectionProps = WithTestId<{
  /**
   * Indicates the index of the time hourly interval to be selected, starting from 00:00 - 01:00 (0 index) to 23:00 - 00:00 (23 index).
   * Min: 0, max: 23
   */
  value: number[];
  /** Callback by parent indicating the clicked interval index (from 0 to 23) */
  updateLaboralSchedule(index: number): void;
}>;

/**
 * This function creates the options available for the working hours of the configuration.
 *
 * @example - \{ value: '0', name: '00:00 - 01:00' \}
 */
export const laboralScheduleOptions = (): ScheduleOptions[] => {
  return Array.from(Array(24).keys()).map((index: number) => {
    const hour = index.toString();

    return {
      value: hour,
      name:
        index === 23
          ? `${hour.padStart(2, '0')}:00 - 00:00`
          : `${hour.padStart(2, '0')}:00 - ${String(index + 1).padStart(2, '0')}:00`,
    };
  });
};

const StyledWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, auto)',
  gap: $theme.spacing.spacingXs,
}));

/**
 * This renders the component HourSelection that handles the laboral hours for the customer in the configuration.
 * The component has a fixed list as a matrix of time intervals of 60 minutes, from 00:00 to 00:00 (24 hours).
 */
export const HourPicker = ({
  dataTestId = 'hour-picker',
  value,
  updateLaboralSchedule,
}: HourSelectionProps): JSX.Element => {
  return (
    <StyledWrapper>
      {laboralScheduleOptions().map((hour: ScheduleOptions, index) => {
        const isSelected = value.includes(index);

        return (
          <Button
            dataTestId={`${dataTestId}__hour-${hour.value}`}
            size="44px"
            key={`hour-${hour.value}`}
            type="button"
            kind={isSelected ? 'brand' : 'neutral'}
            appearance={isSelected ? 'outlined' : 'tonal'}
            isSelected={isSelected}
            onClick={() => updateLaboralSchedule(index)}
          >
            {hour.name}
          </Button>
        );
      })}
    </StyledWrapper>
  );
};
