import { ActionButtonStyleParams } from '../../webdox-ai-document-viewer-wrapper.interfaces';
import { WithTestId } from '../../../../../../interfaces/common.interfaces';
export interface CopyActionProps extends WithTestId, ActionButtonStyleParams {
    selectedText: string;
    zIndex?: number;
    /** Callback to execute when copy action is executed. */
    onCopy(): void;
}
/** Component that displays a custom copy to clipboard button. */
export declare const CopyAction: ({ "data-testid": dataTestId, selectedText, zIndex, $isFirstChild, $isLastChild, onCopy, }: CopyActionProps) => JSX.Element;
