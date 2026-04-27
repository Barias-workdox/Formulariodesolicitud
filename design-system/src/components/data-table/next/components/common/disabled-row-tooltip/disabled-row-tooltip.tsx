import type { ReactElement, ReactNode } from 'react';

import { StatefulTooltipNext } from '@components/tooltip-next/stateful-tooltip-next';

import { useDataTableContext } from '../../../hooks/use-data-table-context';
import { useDataTableDisabledRow } from '../../../hooks/use-data-table-disabled-row';

type DisabledRowTooltipProps = {
  children: ReactNode;
  /** Override the default placement */
  placement?: 'top' | 'bottom' | 'left' | 'right';
};

/**
 * A wrapper component that displays a tooltip when the row is disabled.
 * Uses the translation function from the DataTable context to translate the reason.
 *
 * @example
 * ```
 * const MyCustomCell = () => {
 *   const { isRowDisabled } = useDataTableDisabledRow();
 *
 *   return (
 *     <DisabledRowTooltip>
 *       <Button disabled={isRowDisabled}>Click me</Button>
 *     </DisabledRowTooltip>
 *   );
 * };
 * ```
 */
export const DisabledRowTooltip = ({
  children,
  placement = 'top',
}: DisabledRowTooltipProps): ReactElement => {
  const { isRowDisabled, disableReason } = useDataTableDisabledRow();
  const { translateDisableReason } = useDataTableContext();

  const shouldShowTooltip = isRowDisabled && disableReason && translateDisableReason;

  if (!shouldShowTooltip) {
    return <>{children}</>;
  }

  const translatedMessage = translateDisableReason(disableReason);

  if (!translatedMessage) {
    return <>{children}</>;
  }

  return (
    <StatefulTooltipNext
      content={translatedMessage}
      showArrow
      placement={placement}
    >
      <span>{children}</span>
    </StatefulTooltipNext>
  );
};
