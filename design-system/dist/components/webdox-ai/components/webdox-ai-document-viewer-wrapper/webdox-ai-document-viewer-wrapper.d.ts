import { ReactNode } from 'react';
import { ActionButtonConfig } from './webdox-ai-document-viewer-wrapper.interfaces';
import { LocaleOption } from '../../../utils';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export interface WebdoxAIDocumentViewerWrapperProps extends WithTestId {
    children: ReactNode;
    zIndex?: number;
    actions: ActionButtonConfig[];
    /** Callback to execute when copy action is executed. */
    onCopy(): void;
    /** Callback to execute when translate action is executed. */
    onTranslate(selectedText: string, language: LocaleOption): void;
    /** Callback to execute when explain action is executed. */
    onExplain(selectedText: string): void;
}
/**
 * Wrapper component that enhances the document viewer with additional
 * functionalities specific to WebdoxAI.
 *
 * This component provides:
 * - Text selection capabilities with custom popover actions.
 */
export declare const WebdoxAIDocumentViewerWrapper: ({ "data-testid": dataTestId, actions, children, zIndex, onCopy, onExplain, onTranslate, }: WebdoxAIDocumentViewerWrapperProps) => JSX.Element;
