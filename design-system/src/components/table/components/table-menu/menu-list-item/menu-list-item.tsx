import { ListItem } from 'baseui/list';
import { ParagraphSmall } from 'baseui/typography';

import { ariaKeyDownHandler } from '@components/utils/accessibility.utils';

import { themedUseStyletron } from '../../../../../themes';

import { listItemCaptionStyles, listItemOverrides } from './menu-list-item.styles';

import type { WithTestId } from '@interfaces/common.interfaces';

/** Every menu option should have this attributes */
export interface TableMenuOption extends WithTestId {
  Icon: JSX.Element;
  label: string;
  /** Option will be rendered by default */
  disabled?: boolean;
  /** The click handler to be executed after the menu item is clicked. If a CustomOption is sent, this could be undefined */
  onClick?(): void;
}

/** Styled menu item, with a wrapper clickable div */
export const MenuListItem = ({
  dataTestId,
  Icon,
  label,
  onClick,
  disabled,
}: TableMenuOption): JSX.Element => {
  const [, theme] = themedUseStyletron();

  /**
   * Handles the click
   */
  const handleClick = (): void => {
    if (!disabled) {
      onClick?.();
    }
  };

  return (
    <div
      data-testid={dataTestId}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={ariaKeyDownHandler(handleClick)}
    >
      <ListItem
        artwork={(): JSX.Element => Icon}
        overrides={listItemOverrides(theme, disabled)}
      >
        <ParagraphSmall $style={listItemCaptionStyles(theme, disabled)}>{label}</ParagraphSmall>
      </ListItem>
    </div>
  );
};
