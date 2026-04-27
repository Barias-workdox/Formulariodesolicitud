import type { ReactNode } from 'react';

import { Draggable } from '@carbon/icons-react';

import { TableCell } from '@components/table/components';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './draggable-cell-table.styles';

import type { StyleObject } from 'styletron-react';

export interface DraggableCellTableProps {
  'data-testid'?: string;
  isDisabled?: boolean;
  $style?: StyleObject;
  children?: ReactNode;
}

/** A Styled cell that renders a static styled icon used to drag the table row */
export const DraggableCellTable = ({
  'data-testid': dataTestId,
  isDisabled = false,
  $style,
  children,
}: DraggableCellTableProps): JSX.Element => {
  const { theme, innerStyles, draggableCellTableStyles, wrapperStyles } = useCss(styles);

  return (
    <TableCell
      data-testid={dataTestId}
      $style={{ ...styles.rootStyles, ...($style ?? {}) }}
    >
      <div className={wrapperStyles}>
        {!isDisabled && (
          <span
            data-testid={dataTestId ? `${dataTestId}--draggable-icon` : undefined}
            className={draggableCellTableStyles}
          >
            <Draggable
              size={16}
              fill={theme.colors.brandSubdued}
              height={32}
            />
          </span>
        )}
        <div className={innerStyles}>{children}</div>
      </div>
    </TableCell>
  );
};
