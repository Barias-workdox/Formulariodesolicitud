import { ReactNode } from 'react';
import { CopyButtonTexts } from './interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export interface BrainViewerModalProps extends WithTestId {
    isOpen: boolean;
    children: ReactNode;
    title: string;
    clipboardItem?: ClipboardItem | string;
    copyButtonTexts?: CopyButtonTexts;
    zIndex?: number;
    onClose(): void;
}
/** Stateless Modal to display the table viewer received as children. */
export declare const BrainViewerModal: ({ "data-testid": dataTestId, title, isOpen, children, clipboardItem, copyButtonTexts, zIndex, onClose, }: BrainViewerModalProps) => JSX.Element;
