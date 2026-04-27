import { useMemo, useState } from 'react';

import { SettingsAdjust } from '@carbon/icons-react';
import { isValidElementType } from 'react-is';

import { IconButton } from '@components/button';
import { StatefulMenu } from '@components/menu';
import { StatelessPopover } from '@components/popover/stateless-popover';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { COMMON_HEIGHT_32 } from '@constants/common.constants';
import { sortAlphabetically } from '@utils/array.utils';

import type { FiltersGroupProps } from '@components/filters-group/filters-group';
import type { FilterConfig } from '@components/filters-group/filters-group.interfaces';
import type { StatefulMenuProps } from '@components/menu';

export type ExtraFiltersIconButtonProps = Pick<FiltersGroupProps, 'addVisibleFilter'> & {
  tooltipText?: string;
  hiddenFilters: FilterConfig[];
  disabled?: boolean;
};

/**
 * Component that renders an icon button which shows a popover menu of hidden filters when clicked.
 *
 * It uses hidden filters and to add them back to the visible state. The popover contains
 * a menu generated from the hidden filters, allowing users to select and reveal them.
 *
 * The button and popover are only displayed if there are hidden filters available.
 */
export const ExtraFiltersIconButton = ({
  hiddenFilters,
  disabled,
  tooltipText,
  addVisibleFilter,
}: ExtraFiltersIconButtonProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOptions: StatefulMenuProps['items'] = useMemo(
    () =>
      hiddenFilters
        .map(({ id, label, startEnhancer: StartEnhancer, focusOnShow }) => ({
          id,
          label,
          startEnhancer: isValidElementType(StartEnhancer) ? <StartEnhancer /> : undefined,
          focusOnShow,
        }))
        .sort(sortAlphabetically('label')),
    [hiddenFilters],
  );

  /**
   * Handles the event when a filter is selected from the menu.
   *
   * This function adds the selected filter to the visible filters list using `addVisibleFilter`.
   * If the filter should be focused on show (`focusOnShow` is true), it also closes the popover to
   * allow the UI to shift focus to the newly visible filter.
   */
  const handleShowFilter = ({ item }: { item: FilterConfig }): void => {
    const { id, focusOnShow } = item;

    addVisibleFilter(id);

    // Close this popover to focus the new filter
    if (focusOnShow) {
      setIsOpen(false);
    }
  };

  return hiddenFilters.length !== 0 ? (
    <StatelessPopover
      isOpen={isOpen}
      showArrow
      placement="bottomLeft"
      onEsc={() => setIsOpen(false)}
      onClickOutside={() => setIsOpen(false)}
      content={() => (
        <StatefulMenu
          items={menuOptions}
          onItemSelect={handleShowFilter}
        />
      )}
    >
      <StatefulTooltipNext
        content={tooltipText}
        placement="bottom"
        showArrow
      >
        <div>
          <IconButton
            size={COMMON_HEIGHT_32}
            kind="tertiary"
            onClick={() => setIsOpen(true)}
            data-testid="filters_group--extra-filters-button"
            disabled={disabled}
          >
            <SettingsAdjust />
          </IconButton>
        </div>
      </StatefulTooltipNext>
    </StatelessPopover>
  ) : (
    <></>
  );
};
