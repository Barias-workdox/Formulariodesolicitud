import type { ReactElement } from 'react';

import { styled, withStyle } from 'baseui';
import {
  StyledBody as BaseStyledBody,
  StyledCell as BaseStyledCell,
  StyledHead as BaseStyledHead,
  StyledHeadCell as BaseStyledHeadCell,
  StyledRow as BaseStyledRow,
  StyledTable as BaseStyledTable,
} from 'baseui/table';

import { fontSizeMap } from '@components/button/button.styles';
import { useCss } from '@components/utils/hooks/use-css';
import { themedWithStyle } from '@themes/utilities';

import { Button } from '../button';

import type { ButtonProps } from '@components/button/button.interfaces';

const noBorder = {
  borderTopWidth: '0px',
  borderBottomWidth: '0px',
  borderLeftWidth: '0px',
  borderRightWidth: '0px',
};

const noBorderRadius = {
  borderTopLeftRadius: '0',
  borderTopRightRadius: '0',
  borderBottomRightRadius: '0',
  borderBottomLeftRadius: '0',
};

export const StyledTable = withStyle(BaseStyledTable, () => ({
  ...noBorder,
  ...noBorderRadius,
}));

export const StyledHead = withStyle(BaseStyledHead, ({ $theme }) => ({
  borderBottom: 'solid 1px #E5E5E5',
  boxShadow: 'none',
  color: '#515B60',
  paddingLeft: $theme.sizing.scale100,
  paddingRight: $theme.sizing.scale100,
  height: $theme.sizing.scale1200,
  display: 'flex',
  alignItems: 'center',
}));

export const StyledHeadCell = withStyle(BaseStyledHeadCell, ({ $theme }) => ({
  fontFamily: $theme.typography.LabelXSmall.fontFamily,
  fontSize: $theme.sizing.scale400,
  lineHeight: $theme.sizing.scale500,
  textTransform: 'uppercase',
  color: '#515B60',
}));

export const StyledBody = BaseStyledBody;

export const StyledRow = themedWithStyle(BaseStyledRow, ({ $theme }) => ({
  borderBottom: `solid 1px ${$theme.colors.neutralWashed}`,
  minHeight: $theme.sizing.scale1200,
  paddingLeft: $theme.sizing.scale100,
  paddingRight: $theme.sizing.scale100,
}));

export const StyledCell = withStyle(BaseStyledCell, ({ $theme }) => ({
  ...$theme.typography.ParagraphSmall,
  paddingTop: '12px',
  paddingBottom: '12px',
  color: '#515B60',
}));

export const TableToolbar = styled('header', ({ $theme }) => ({
  backgroundColor: '#0F62FE',
  height: $theme.sizing.scale1200,
}));

type TableToolbarActionKind = 'primary' | 'control';

type TableToolbarActionProps = ButtonProps & { kind?: TableToolbarActionKind };

export const TableToolbarTextBlock = styled('div', () => ({
  paddingLeft: '16px',
  paddingRight: '16px',
  display: 'inline-flex',
  alignItems: 'center',
  height: '100%',
  color: 'white',
}));

/** Styled table toolbar action */
export function TableToolbarAction({
  'data-testid': dataTestId = 'table-toolbar-action',
  kind = 'primary',
  ...props
}: TableToolbarActionProps): ReactElement {
  const { theme } = useCss();

  const backgroundColor = kind === 'control' ? 'transparent' : theme.colors.brand;

  return (
    <Button
      data-testid={dataTestId}
      kind="primary"
      overrides={{
        BaseButton: {
          style: ({ $theme, $size }) => ({
            fontSize: fontSizeMap[$size],
            backgroundColor,
            fontWeight: 'normal',
            paddingLeft: $theme.sizing.scale600,
            paddingRight: $theme.sizing.scale600,
            height: '100%',
            ':active': {
              backgroundColor,
            },
          }),
        },
        EndEnhancer: {
          style: ({ $theme }) => ({ marginLeft: $theme.sizing.scale300 }),
        },
      }}
      {...props}
    />
  );
}
