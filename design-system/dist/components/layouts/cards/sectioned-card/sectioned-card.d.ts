import { ReactElement, ReactNode } from 'react';
import { StyleObject } from 'styletron-react';
interface SectionedCardOverrides {
    Root?: StyleObject;
    Header?: StyleObject;
    Body?: StyleObject;
    Footer?: StyleObject;
}
export interface SectionedCardProps {
    title?: ReactNode;
    footer?: ReactNode;
    /** Left side title component */
    headerEnhancer?: ReactElement;
    overrides?: SectionedCardOverrides;
    hasElevation?: boolean;
    children?: ReactNode;
}
/** Box for each section in the confirmation portal signature step */
export declare const SectionedCard: ({ title, headerEnhancer, footer, overrides, hasElevation, children, }: SectionedCardProps) => ReactElement;
export {};
