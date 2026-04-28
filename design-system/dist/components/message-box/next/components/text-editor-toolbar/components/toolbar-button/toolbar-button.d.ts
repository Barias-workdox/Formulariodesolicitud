import { IconButtonProps } from '../../../../../../button/variants/icon-button/icon-button.interfaces';
export type ToolbarButtonProps = Pick<IconButtonProps, 'children' | 'onClick' | 'disabled' | 'dataTestId'> & {
    ariaLabel: string;
    isActive?: boolean;
};
/**
 * Component that renders a button for the toolbar.
 */
export declare const ToolbarButton: ({ ariaLabel, children, dataTestId, onClick, disabled, isActive, }: ToolbarButtonProps) => JSX.Element;
