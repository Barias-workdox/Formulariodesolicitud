import { ReactNode } from 'react';
import { CopyButtonTexts } from '../../../../../../brain-viewer-modal/interfaces';
import { ChatBotChatMessageType } from '../../../../../../../interfaces';
import { WithTestId } from '../../../../../../../../../interfaces/common.interfaces';
import { OverrideObject } from '../../../../../../../../../themes/theme.interfaces';
export interface MarkdownCustomTableProps extends WithTestId {
    children?: ReactNode;
    isMenuVisible?: boolean;
    questionValue: ChatBotChatMessageType['question']['value'];
    isFixed?: boolean;
    isViewerFullwidth?: boolean;
    copyText?: boolean;
    zIndex?: number;
    copyButtonTexts?: CopyButtonTexts;
    overrides?: {
        MarkdownElement?: OverrideObject<{
            children: ReactNode;
        }>;
        MarkdownElementViewer?: OverrideObject<{
            children: ReactNode;
        }>;
    };
    setIsMenuHovered?(isHovered: boolean): void;
}
/** A custom table to use within the brain companion markdown. */
export declare const MarkdownModal: ({ "data-testid": dataTestId, children, isMenuVisible, questionValue, zIndex, isFixed, isViewerFullwidth, copyText, overrides, copyButtonTexts, setIsMenuHovered, }: MarkdownCustomTableProps) => JSX.Element;
