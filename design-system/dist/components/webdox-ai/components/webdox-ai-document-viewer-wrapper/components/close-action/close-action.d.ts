import { ActionButtonStyleParams } from '../../webdox-ai-document-viewer-wrapper.interfaces';
import { WithTestId } from '../../../../../../interfaces/common.interfaces';
export interface CloseActionProps extends WithTestId, ActionButtonStyleParams {
    zIndex?: number;
    onClose(): void;
}
/** Component that displays a close icon button. */
export declare const CloseAction: ({ "data-testid": dataTestId, onClose, zIndex, $isFirstChild, $isLastChild, }: CloseActionProps) => JSX.Element;
