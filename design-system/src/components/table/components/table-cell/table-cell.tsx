import type { ReactNode } from 'react';

import { Block } from 'baseui/block';

import { tableCellStyles } from './table-cell.styles';

import type { BlockProps } from 'baseui/block';
import type { StyleObject } from 'styletron-react';

export interface TableCellProps {
  children: ReactNode;
  'data-testid'?: string;
  /** Use only to override the default `td` container role */
  as?: BlockProps['as'];
  $style?: StyleObject;
}

/** Styled Common Table Cell with some basic props */
export const TableCell = ({
  children,
  'data-testid': dataTestId,
  as = 'td',
  $style = {},
}: TableCellProps): JSX.Element => {
  return (
    <Block
      as={as}
      data-testid={dataTestId}
      overrides={{
        Block: {
          style: ({ $theme }): StyleObject => {
            return {
              ...tableCellStyles($theme),
              ...$style,
            };
          },
        },
      }}
    >
      {children}
    </Block>
  );
};
