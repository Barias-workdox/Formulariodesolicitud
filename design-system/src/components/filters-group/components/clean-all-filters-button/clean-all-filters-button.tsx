import { Button } from '@components/button';
import { useTranslation } from '@components/utils';

import type { FiltersGroupProps } from '@components/filters-group/filters-group';
import type { WithTestId } from '@interfaces/common.interfaces';

type CleanAllFiltersButtonProps = WithTestId & Pick<FiltersGroupProps, 'onClearAllFilters'>;

/**
 * Component that renders a button to clear all filters in a filtering context.
 * This button is displayed conditionally based on the `showClearAllFiltersButton` value
 * from the filters group context.
 */
export const CleanAllFiltersButton = ({
  dataTestId = 'filters-group__clean-all-filters-button',
  onClearAllFilters,
}: CleanAllFiltersButtonProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Button
      data-testid={dataTestId}
      size="32px"
      kind="link-tertiary"
      onClick={onClearAllFilters}
      overrides={{
        BaseButton: {
          style: {
            whiteSpace: 'nowrap',
          },
        },
      }}
    >
      {t('filtersGroup.cleanAllFilters')}
    </Button>
  );
};
