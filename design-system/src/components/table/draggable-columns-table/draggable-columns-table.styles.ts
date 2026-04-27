import { styled } from 'baseui';

import { themedStyled } from '../../../themes';

import type { StatefulMenuOverridesParams } from './draggable-columns-table.interfaces';
import type { StyleOverrideProps } from '../../../themes/theme.interfaces';
import type { StatefulMenuProps } from 'baseui/menu';
import type { StyleObject } from 'styletron-standard';

/**
 * Style overrides for the stateful menu.
 */
export const statefulMenuOverrides = ({
  labelTemplate,
  'data-testid': dataTestId,
}: StatefulMenuOverridesParams = {}): StatefulMenuProps['overrides'] => ({
  List: {
    props: {
      ...(dataTestId && { 'data-testid': `${dataTestId}-options-list` }),
    },
    style: {
      boxShadow: 'none',
    },
  },
  Option: {
    props: {
      getItemLabel: (item: unknown): React.ReactNode =>
        labelTemplate ? labelTemplate(item) : item['label'],
      ...(dataTestId && { 'data-testid': `${dataTestId}-option` }),
      overrides: {
        ListItem: {
          style: ({ $theme }: StyleOverrideProps): StyleObject => ({
            ...$theme.typography.ParagraphXSmall,
            color: $theme.colors.neutralSubdued,
            whiteSpace: 'nowrap',
          }),
        },
      },
    },
  },
});

/** Text overflow overlay */
const textOverflowOverlay = (distance: string | number): StyleObject => ({
  '::before': {
    content: '""',
    position: 'absolute',
    width: '.5rem',
    top: 0,
    bottom: 0,
    right: String(distance),
    background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 100%)',
  },
});

export const TruncatedText = styled<'div', { $fullwidth?: boolean }>('div', ({ $fullwidth }) => {
  const overlay = $fullwidth ? textOverflowOverlay(0) : {};

  return {
    width: $fullwidth ? '100%' : 'auto',
    position: 'relative',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    ...overlay,
  };
});

export const ColumnMenu = styled('div', {
  position: 'relative',
  ...textOverflowOverlay('18px'),
});

export const DragIcon = themedStyled<'div', { $isOver: boolean }>('div', ({ $isOver, $theme }) => ({
  color: $theme.colors.neutralSubdued,
  opacity: $isOver ? 1 : 0,
  transition: '.25s opacity linear',
  marginRight: $theme.spacing.spacing2xs,
  display: 'flex',
  alignItems: 'center',
}));
