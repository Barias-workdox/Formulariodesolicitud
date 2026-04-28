import { PropsWithChildren } from 'react';
import { BorderKey } from '../../../../../../themes/v3/tokens/borders';
import { SpacingKey } from '../../../../../../themes/v3/tokens/spacing';
export type SectionedCardBodyProps = PropsWithChildren<{
    id?: string | null;
}>;
interface BodyWrapperProps {
    $paddingSpacing: SpacingKey;
    $hasBorderTop?: boolean;
    $borderRadius?: Exclude<BorderKey, 'borderCircle'>;
}
export declare const BodyWrapper: import('styletron-react').StyletronComponent<"div", BodyWrapperProps>;
/**
 * Sectioned Card Footer component that wraps Footer component.
 */
export declare const SectionedCardBody: ({ children, id }: SectionedCardBodyProps) => JSX.Element;
export {};
