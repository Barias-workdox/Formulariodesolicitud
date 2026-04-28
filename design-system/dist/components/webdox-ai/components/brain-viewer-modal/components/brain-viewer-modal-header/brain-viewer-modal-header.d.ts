import { CopyButtonTexts } from '../../interfaces';
import { WithTestId } from '../../../../../../interfaces/common.interfaces';
export interface BrainViewerModalHeaderProps extends WithTestId {
    title: string;
    clipboardItem?: ClipboardItem | string;
    zIndex?: number;
    copyButtonTexts?: CopyButtonTexts;
    onClose(): void;
}
/** Modal header to use within the TableViewerModal. */
export declare const BrainViewerModalHeader: ({ "data-testid": dataTestId, title, clipboardItem, zIndex, copyButtonTexts, onClose, }: BrainViewerModalHeaderProps) => JSX.Element;
