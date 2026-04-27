import type { ReactElement, ReactNode } from 'react';

import { useDataTableDisabledRow } from '@components/data-table/next/hooks/use-data-table-disabled-row';
import { Popover } from '@components/popover';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './table-action-button.styles';

import type { PopoverProps } from '@components/popover';
import type { WithTestId } from '@interfaces/common.interfaces';

type TableActionButtonProps = WithTestId & {
  ariaLabel?: string;
  children: ReactNode;
  popoverProps: Partial<PopoverProps>;
};

/**
 * This component is used to create a button that triggers a popover when clicked.
 * It allows you to specify the popover content, placement, margin, and other properties.
 */
export const TableActionButton = ({
  dataTestId = 'data-table__action-button',
  ariaLabel,
  children,
  popoverProps,
}: TableActionButtonProps): ReactElement => {
  const { isRowDisabled: isDisabled } = useDataTableDisabledRow();
  const { actionButtonStyles } = useCss(styles, { isDisabled });
  const { content = '', ...restPopoverProps } = popoverProps || {};

  return (
    <Popover
      showArrow
      ignoreBoundary
      content={content}
      {...restPopoverProps}
    >
      <button
        data-testid={dataTestId}
        type="button"
        className={actionButtonStyles}
        aria-label={ariaLabel}
        disabled={isDisabled}
      >
        {children}
      </button>
    </Popover>
  );
};
