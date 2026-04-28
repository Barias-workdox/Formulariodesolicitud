import { ActionButtonStyleParams } from '../../webdox-ai-document-viewer-wrapper.interfaces';
import { WithTestId } from '../../../../../../interfaces/common.interfaces';
export interface ExplainActionProps extends WithTestId, ActionButtonStyleParams {
    disabled?: boolean;
    /** Callback to execute when explain action is executed. */
    onExplain(): void;
}
/**
 * Component that provides a button to explain the content.
 */
export declare const ExplainAction: ({ "data-testid": dataTestId, $isFirstChild, $isLastChild, disabled, onExplain, }: ExplainActionProps) => JSX.Element;
