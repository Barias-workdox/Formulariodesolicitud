import { ActionButtonStyleParams } from '../../webdox-ai-document-viewer-wrapper.interfaces';
import { LocaleOption } from '../../../../../utils';
import { WithTestId } from '../../../../../../interfaces/common.interfaces';
export interface TranslateActionProps extends WithTestId, ActionButtonStyleParams {
    zIndex?: number;
    disabled?: boolean;
    /** Callback to execute when translate action is executed. */
    onTranslate(selectedLanguage: LocaleOption): void;
}
/**
 * Component that provides a button for translating content.
 * It displays a popover menu with available languages
 * and triggers a translation action when a language is selected.
 */
export declare const TranslateAction: ({ "data-testid": dataTestId, $isFirstChild, $isLastChild, disabled, onTranslate, zIndex, }: TranslateActionProps) => JSX.Element;
