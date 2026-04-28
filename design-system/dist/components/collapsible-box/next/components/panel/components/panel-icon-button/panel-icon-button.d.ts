import { IconButtonProps } from '../../../../../../button/variants/icon-button/icon-button.interfaces';
import { WithTestId } from '../../../../../../../interfaces/common.interfaces';
export interface PanelIconButtonProps extends WithTestId, Exclude<IconButtonProps, 'size'> {
}
/**
 * A React component that renders an icon button with a size determined by the current collapsible box context.
 */
export declare const PanelIconButton: ({ dataTestId, ...rest }: PanelIconButtonProps) => JSX.Element;
