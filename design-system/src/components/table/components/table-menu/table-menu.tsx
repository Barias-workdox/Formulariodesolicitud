import { OverflowMenuVertical } from '@carbon/icons-react';

import { IconButton } from '../../../button';
import { Popover } from '../../../popover';
import { Spinner } from '../../../spinner';
import { useCss } from '../../../utils/hooks/use-css';

import { MenuListItem } from './menu-list-item';
import { tableMenuContainerStyles } from './table-menu.styles';

import type { TableMenuOption } from './menu-list-item';
import type { PopoverPlacementType } from '../../../popover';

export interface TableMenuCustomOptionProps {
  disabled: boolean;
  /** Required for some cases complex cases (ie: for upload files)  */
  CustomOption?: JSX.Element;
}

export interface TableMenuProps {
  'data-testid'?: string;
  options: (TableMenuOption | TableMenuCustomOptionProps)[];
  isLoading: boolean;
  disabled: boolean;
  /** If false, will hide the cell. It is used only to reduce repetitive logic */
  show?: boolean;
  placement?: PopoverPlacementType;
  /** Trigger that would execute when the component is open */
  onOpen?(): void;
}

/**
 * This component is a three dot menu, with the clickable icon and a popover with a list of items.
 * Options are created declaratively or a Custom Component can be received
 * When an element is clicked, the popover will be closed and then the click handler will be executed.
 * If isLoading is true, it will display a loading spinner instead of the menu.
 */
export const TableMenu = ({
  'data-testid': dataTestId = 'design-system__table-menu',
  isLoading,
  options,
  disabled,
  show = true,
  placement = 'bottom',
  onOpen,
}: TableMenuProps): JSX.Element => {
  const { css } = useCss();

  /** Handle item click and close the popover in the process */
  const handleClick = (close: () => void, onClick: () => void): void => {
    close();
    onClick();
  };

  return (
    <div className={css(tableMenuContainerStyles)}>
      {show &&
        (!isLoading ? (
          <Popover
            placement={placement}
            onOpen={onOpen}
            content={({ close }): JSX.Element =>
              !disabled && (
                <div>
                  {options.map((option, index) => {
                    if ('CustomOption' in option) {
                      return option.CustomOption;
                    } else if ('Icon' in option) {
                      const { onClick, ...rest } = option;

                      return (
                        <MenuListItem
                          dataTestId={`${dataTestId}__item--${index}`}
                          key={`menu-list-item-${index}`}
                          onClick={(): void => onClick && handleClick(close, onClick)}
                          {...rest}
                        />
                      );
                    }
                  })}
                </div>
              )
            }
            returnFocus
            autoFocus
          >
            <IconButton
              data-testid={`${dataTestId}--button`}
              size="32px"
              kind="link-tertiary"
              disabled={disabled || isLoading}
            >
              <OverflowMenuVertical size={20} />
            </IconButton>
          </Popover>
        ) : (
          <Spinner size="sm" />
        ))}
    </div>
  );
};
