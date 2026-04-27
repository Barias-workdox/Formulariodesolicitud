import { ChevronDown, OverflowMenuVertical } from '@carbon/icons-react';
import { StatefulMenu } from 'baseui/menu';
import { StatefulPopover } from 'baseui/popover';
import { ParagraphSmall, ParagraphXSmall } from 'baseui/typography';

import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { Block } from '../../block';
import { Button, IconButton } from '../../button';
import { PLACEMENT } from '../../popover';
import { spacing } from '../../utils/spacing';

import { statefulMenuOverrides } from './draggable-columns-table.styles';

import type {
  AddColumnsButtonProps,
  AddColumnsMenuProps,
  ColumnMenuOptionsProps,
  ColumnMenuPopoverProps,
  ColumnProps,
} from './draggable-columns-table.interfaces';
import type { TranslationType } from '@components/utils/i18n/i18n.interface';
import type { Items } from 'baseui/menu';
import type { StyleObject } from 'styletron-standard';

/** Options to sorting menu */
const sortingOptions = (t: TranslationType): Items => [
  {
    order: 'asc',
    label: t('table.columnOrderAsc'),
  },
  {
    order: 'desc',
    label: t('table.columnOrderDesc'),
  },
];

/**
 * Menu of options of columns to add in the table.
 * This is the menu that is shown by AddColumnsButton as the popover content.
 */
const AddColumnsMenu = ({
  columns,
  toggleActiveColumn,
  'data-testid': dataTestId,
}: AddColumnsMenuProps): React.ReactElement => {
  const { t } = useTranslation();
  const { theme } = useCss();

  return (
    <Block
      top="100%"
      position="absolute"
      bg="#fff"
      $style={{ boxShadow: theme.lighting.shadowDefault, transform: 'translate(calc(-100%),0)' }}
    >
      <ParagraphSmall
        margin="0"
        padding={`${spacing(4)} ${spacing(8)}`}
        $style={{
          borderBottom: `1px solid ${theme.colors.neutralSubtle}`,
          whiteSpace: 'nowrap',
        }}
      >
        {t('table.add', { name: t('table.column') })}
      </ParagraphSmall>
      <Block
        maxHeight="300px"
        $style={{ overflowY: 'auto' }}
      >
        <StatefulMenu
          items={columns}
          onItemSelect={({ item }: { item: ColumnProps }): void => toggleActiveColumn(item)}
          overrides={statefulMenuOverrides({
            labelTemplate: (item: ColumnProps) => item.label,
            'data-testid': dataTestId,
          })}
        />
      </Block>
    </Block>
  );
};

/**
 * Button to add columns to the table. Will show the available columns as options.
 */
export const AddColumnsButton = ({
  columns,
  toggleActiveColumn,
  'data-testid': dataTestId,
}: AddColumnsButtonProps): React.ReactElement => (
  <StatefulPopover
    content={(): React.ReactNode => (
      <AddColumnsMenu
        data-testid={`${dataTestId}--add-columns-menu`}
        columns={columns}
        toggleActiveColumn={toggleActiveColumn}
      />
    )}
    returnFocus
    autoFocus
    placement={PLACEMENT.bottomRight}
  >
    <IconButton
      data-testid={`${dataTestId}--add-columns-button`}
      size="auto"
      overrides={{
        BaseButton: {
          style: ({ $theme }): StyleObject => ({
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            width: $theme.spacing.spacing3xl,
          }),
        },
      }}
    >
      <OverflowMenuVertical size={24} />
    </IconButton>
  </StatefulPopover>
);

/**
 * Menu of options of a table header column.
 * The possible options will be: "remove the column", "order ascending" and "order descending".
 */
const ColumnMenuOptions = ({
  column,
  toggleActiveColumn,
  updateSortingColumn,
  close,
}: ColumnMenuOptionsProps): React.ReactElement => {
  const { t } = useTranslation();
  const { theme } = useCss();

  return (
    <Block
      top="100%"
      position="absolute"
      bg="#fff"
      $style={{ boxShadow: theme.lighting.shadowDefault, transform: 'translate(calc(-100%),0)' }}
    >
      {column.sortable && (
        <>
          <Block
            $style={{ borderBottom: `1px solid ${theme.colors.neutralSubtle}` }}
            px={8}
            py={4}
          >
            <ParagraphXSmall
              margin="0"
              $style={{
                whiteSpace: 'nowrap',
                marginRight: spacing(2),
              }}
            >
              {t('table.order')}
            </ParagraphXSmall>
          </Block>
          <Block overflow="hidden">
            <StatefulMenu
              items={sortingOptions(t)}
              onItemSelect={({ item }): void => {
                updateSortingColumn(column.id, item.order);
                close();
              }}
              overrides={statefulMenuOverrides()}
            />
          </Block>
        </>
      )}
      {column.removable && (
        <Block
          $style={{
            borderTop: column.sortable ? `1px solid ${theme.colors.neutralSubtle}` : 'none',
          }}
        >
          <Button
            data-testid="draggable-columns-table__remove-column-button"
            kind="control"
            paddingLeft={theme.spacing.spacingMd}
            paddingRight={theme.spacing.spacingMd}
            overrides={{ BaseButton: { style: { backgroundColor: 'transparent' } } }}
            onClick={(): void => {
              toggleActiveColumn(column);
              close();
            }}
          >
            <ParagraphXSmall
              margin="0"
              $style={{ whiteSpace: 'nowrap' }}
            >
              {t('table.removeColumn')}
            </ParagraphXSmall>
          </Button>
        </Block>
      )}
    </Block>
  );
};

/**
 * This is the menu as a popover for the table column header.
 * It will show the options to: "remove the column", "order ascending" and "order descending".
 */
export const ColumnMenuPopover = ({
  dataTestId = 'table__header-menu',
  column,
  setIsOverMenu,
  toggleActiveColumn,
  updateSortingColumn,
}: ColumnMenuPopoverProps): React.ReactElement => (
  <StatefulPopover
    content={({ close }): React.ReactElement => (
      <ColumnMenuOptions
        column={column}
        toggleActiveColumn={toggleActiveColumn}
        updateSortingColumn={updateSortingColumn}
        close={close}
      />
    )}
    returnFocus
    autoFocus
  >
    <ChevronDown
      data-testid={`${dataTestId}--${column.id}`}
      size={16}
      style={{ zIndex: 0, cursor: 'pointer' }}
      onMouseOver={(): void => setIsOverMenu(true)}
      onMouseLeave={(): void => setIsOverMenu(false)}
      role="img"
    />
  </StatefulPopover>
);
