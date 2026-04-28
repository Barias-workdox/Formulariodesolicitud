import { WebdoxAIChatControllerProps } from '../../../../../../../../../controllers/webdox-ai-chat.controller';
import { CopyButtonTexts } from '../../../../../../../../brain-viewer-modal/interfaces';
export interface ActionMenuProps extends Pick<WebdoxAIChatControllerProps, 'zIndex'> {
    'data-testid': string;
    clipboardItem?: ClipboardItem | string;
    copyButtonTexts?: CopyButtonTexts;
    onOpenTableViewer(): void;
}
/**
 * Component that display table actions.
 */
export declare const ActionMenu: ({ "data-testid": dataTestId, clipboardItem, zIndex, copyButtonTexts, onOpenTableViewer, }: ActionMenuProps) => JSX.Element;
