import { ParagraphXSmall } from 'baseui/typography';

import { themedUseStyletron } from '../../../themes';

import type { DesignSystemTheme } from '../../../themes';
import type { ListItemProps } from '../dropdown.interfaces';
import type { StyleObject } from 'styletron-standard';

/**
 * Generates the styles for a dropdown list item.
 */
const itemStyles = (theme: DesignSystemTheme): StyleObject => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minWidth: '135px',
  cursor: 'pointer',
  gap: theme.spacing.spacingXs,
});

/**
 * Dropdown list item with a label icon and on click props
 */
export const DropdownListItem = ({
  item: { label, Icon, 'data-testid': dataTestId },
}: ListItemProps): React.ReactElement => {
  const [css, theme] = themedUseStyletron();

  return (
    <div
      data-testid={dataTestId}
      className={css(itemStyles(theme))}
    >
      {Icon && (
        <Icon
          color={theme.colors.neutralSubdued}
          className={css({ flexShrink: 0 })}
          width={14}
          height={14}
        />
      )}
      <ParagraphXSmall
        color={theme.colors.neutralSubdued}
        margin="0"
      >
        {label}
      </ParagraphXSmall>
    </div>
  );
};
