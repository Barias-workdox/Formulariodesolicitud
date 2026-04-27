import { useRef, useState, type MutableRefObject, type ReactElement } from 'react';

import { MIN_COLUMN_WIDTH } from '@components/data-table/data-table.constants';
import { convertCssUnitToPx } from '@utils/styles.utils';

import { useTranslation } from '../../../../../utils';

import { StyledResizeColumnLine } from './resize-column-line.styles';

import type { ColumnConfig } from '@components/data-table/data-table.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

type ResizeColumnLineProps = WithTestId &
  Pick<ColumnConfig, 'width' | 'minWidth' | 'maxWidth'> & {
    /** Reference to the HTML element representing the table column. */
    columnRef: MutableRefObject<HTMLDivElement | null>;
    /** Function to update the width of the table column, useful to store the user configuration in the localStorage. */
    updateWidth(width: string): void;
    /** Function to set the resize hovered state. */
    setIsResizeHovered(isResizeHovered: boolean): void;
  };

/**
 * Represents a draggable line for resizing a table column.
 *
 * This component is used to create a draggable line that allows users to resize a table column
 * by clicking and dragging the line horizontally. It provides interactive behavior for resizing
 * columns and updates the column's width based on the user's interaction.
 */
export const ResizeColumnLine = ({
  dataTestId,
  columnRef,
  minWidth,
  maxWidth,
  width,
  setIsResizeHovered,
  updateWidth,
}: ResizeColumnLineProps): ReactElement => {
  const [isResizing, setIsResizing] = useState(false);

  // Refs to track resizing state and initial values
  const resizeRef = useRef(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(0);
  const minWidthPxRef = useRef(0);
  const maxWidthPxRef = useRef(0);
  const { t } = useTranslation();

  /**
   * Handles the update of the column width during dragging.
   */
  const update = (e: MouseEvent): void => {
    if (!resizeRef.current || !columnRef.current) {
      return;
    }
    const deltaX = e.clientX - startXRef.current;
    const newWidth = startWidthRef.current + deltaX;

    // Clamp the new width between the min and max values.
    const clampedWidth = Math.max(minWidthPxRef.current, Math.min(newWidth, maxWidthPxRef.current));

    columnRef.current.style.width = `${clampedWidth}px`;
  };

  /**
   * Handles the end of the column resizing.
   */
  const end = (): void => {
    setIsResizing(false);
    setIsResizeHovered(false);

    resizeRef.current = false;
    document.body.style.cursor = 'unset';

    document.body.style.userSelect = 'unset';
    document.removeEventListener('mousemove', update);
    document.removeEventListener('mouseup', end);
    if (columnRef.current) {
      // Notify the parent component about the updated column width.
      updateWidth(columnRef.current.style.width);
    }
  };

  /**
   * Handles the start of the column resizing.
   */
  const start = (e: React.MouseEvent): void => {
    setIsResizing(true);

    e.stopPropagation();
    resizeRef.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    // Record initial mouse X and column width
    startXRef.current = e.clientX;
    startWidthRef.current = convertCssUnitToPx(width, columnRef.current?.offsetWidth || 0);

    // Pre-calculate min/max widths in pixels to avoid expensive calculations during mouse move.
    minWidthPxRef.current = convertCssUnitToPx(minWidth, parseInt(MIN_COLUMN_WIDTH, 10));
    maxWidthPxRef.current = convertCssUnitToPx(maxWidth, 10_000);

    document.addEventListener('mousemove', update);
    document.addEventListener('mouseup', end);
  };

  /**
   * Handles the mouse leave event.
   */
  const handleMouseLeave = (): void => {
    if (!isResizing) {
      setIsResizeHovered(false);
    }
  };

  return (
    <StyledResizeColumnLine
      data-testid={dataTestId}
      aria-label={t('dataTable.ariaLabels.resizeColumnLine')}
      onMouseEnter={(): void => setIsResizeHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={start}
    />
  );
};
