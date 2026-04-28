import { DynamicDialogProps } from '../../../dynamic-dialog/next';
import { WebdoxAIOptionType } from '../../interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export interface WebdoxAIDynamicDialogProps extends WithTestId, DynamicDialogProps {
    type: WebdoxAIOptionType;
    showSideViewButton?: boolean;
    onClose?(): void;
    onToggleExpand?(isFullViewport: boolean): void;
    onClickSideView?(): void;
}
/**
 * A dynamic dialog component for displaying Webdox AI options with a specific layout and design.
 *
 * This dialog includes:
 * - A header with a background icon and title based on the selected AI option.
 * - A close button to dismiss the dialog.
 * - Customizable content passed as children.
 */
export declare const WebdoxAIDynamicDialog: ({ dataTestId, children, fullViewport, showSideViewButton, type, zIndex, onClose, onToggleExpand, onClickSideView, ...rest }: WebdoxAIDynamicDialogProps) => JSX.Element;
