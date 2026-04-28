import { ReactElement, ReactNode } from 'react';
import { PopoverProps } from '../../../../../popover';
import { WithTestId } from '../../../../../../interfaces/common.interfaces';
type TableActionButtonProps = WithTestId & {
    ariaLabel?: string;
    children: ReactNode;
    popoverProps: Partial<PopoverProps>;
};
/**
 * This component is used to create a button that triggers a popover when clicked.
 * It allows you to specify the popover content, placement, margin, and other properties.
 */
export declare const TableActionButton: ({ dataTestId, ariaLabel, children, popoverProps, }: TableActionButtonProps) => ReactElement;
export {};
