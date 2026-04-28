import { BorderKey, SpacingKey } from '../../../../../themes/v3/tokens';
export interface SectionedCardWrapperProps {
    $hasElevation?: boolean;
    $borderRadius?: Exclude<BorderKey, 'borderCircle'>;
}
export declare const SectionedCardWrapper: import('styletron-react').StyletronComponent<"div", SectionedCardWrapperProps>;
export interface BodyWrapperProps {
    $paddingSpacing: SpacingKey;
    $hasBorderTop?: boolean;
    $borderRadius?: Exclude<BorderKey, 'borderCircle'>;
}
export declare const BodyWrapper: import('styletron-react').StyletronComponent<"div", BodyWrapperProps>;
export declare const FooterWrapper: import('styletron-react').StyletronComponent<"div", {}>;
