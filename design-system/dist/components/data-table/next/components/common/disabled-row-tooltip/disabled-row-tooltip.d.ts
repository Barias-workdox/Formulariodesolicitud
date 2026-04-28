import { ReactElement, ReactNode } from 'react';
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
export declare const DisabledRowTooltip: ({ children, placement, }: DisabledRowTooltipProps) => ReactElement;
export {};
