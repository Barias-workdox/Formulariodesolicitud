import { InlineEditInputMode, InlineEditInputOverrides } from '../../../../../../../inline-edit-input';
interface UseInlineEditInputOverridesReturn {
    getInlineEditInputOverrides(params?: {
        dataTestId?: string;
        mode?: InlineEditInputMode;
    }): InlineEditInputOverrides;
}
/** Custom hook for generating overrides for InlineEditInput component. */
export declare const useInlineEditInputOverrides: () => UseInlineEditInputOverridesReturn;
export {};
