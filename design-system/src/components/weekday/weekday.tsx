import { Button } from '@components/button/next';
import { useTranslation } from '@components/utils/i18n';
import { themedStyled } from '@themes/utilities';

import type { WithTestId } from '@interfaces/common.interfaces';
import type { ButtonGroupProps } from 'baseui/button-group';

type DaySelectionProps = WithTestId & {
  /** Indexes selected in the array of weekdays, from 0 to 6 */
  value: number[];
  /** Overrides for the ButtonGroup and Button components */
  overrides?: {
    ButtonGroup?: ButtonGroupProps['overrides'];
  };
  /** Callback that executes with the weekday index (0 to 6) clicked */
  updateNoLaboralDays(index: number): void;
};

const StyledWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'grid',
  gridAutoFlow: 'column',
  gap: $theme.spacing.spacingXs,
}));

/**
 * Renders a i18n day selection in a row, adding special styles to the selected values in the `value` property
 */
export const Weekday = ({
  dataTestId = 'weekday',
  value,
  updateNoLaboralDays,
}: DaySelectionProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledWrapper data-testid={dataTestId}>
      {/** This function creates the options available for selecting the working days */}
      {Array.from(Array(7).keys()).map((day: number, index) => {
        const isSelected = value.includes(index);

        return (
          <Button
            dataTestId={`${dataTestId}__day-${day}`}
            key={`day-${day}`}
            type="button"
            kind={isSelected ? 'brand' : 'neutral'}
            appearance={isSelected ? 'outlined' : 'tonal'}
            size="44px"
            isSelected={isSelected}
            onClick={() => updateNoLaboralDays(index)}
          >
            {t(`week_days.${day}`)}
          </Button>
        );
      })}
    </StyledWrapper>
  );
};
