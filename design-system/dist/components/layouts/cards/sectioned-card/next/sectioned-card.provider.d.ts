import { ReactNode, default as React } from 'react';
import { SectionedCardProps } from './sectioned-card.interfaces';
type SectionedCardContextType = SectionedCardProps & {
    activeKey?: React.Key | null;
    setActiveKey?(key?: React.Key | null): void;
};
export interface SectionedCardProviderProps {
    children: ReactNode;
    defaultProps?: SectionedCardProps;
}
/**
 * Sectioned Card Provider component to supply sectioned card context to its children.
 */
export declare const SectionedCardProvider: React.FC<SectionedCardProviderProps>;
/**
 * Custom hook to access Sectioned Card context.
 */
export declare const useSectionedCard: () => SectionedCardContextType;
export {};
