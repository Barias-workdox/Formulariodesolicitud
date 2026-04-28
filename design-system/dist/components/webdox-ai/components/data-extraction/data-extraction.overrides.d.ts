import { SectionedCardProps } from '../../../layouts';
import { SelectOverrides } from 'baseui/select';
interface UseSectionedCardOverridesReturn {
    getSectionedCardOverrides(params?: {
        maxHeight?: string;
        fullHeight?: boolean;
    }): SectionedCardProps['overrides'];
}
/** Custom hook for generating overrides for SectionedCard component. */
export declare const useSectionedCardOverrides: () => UseSectionedCardOverridesReturn;
export declare const selectOverrides: SelectOverrides;
export {};
