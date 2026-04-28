import { FooterProps } from '../../../../../footer/footer.interfaces';
export type SectionedCardFooterProps = Omit<FooterProps, 'size' | 'borderRadius' | 'isDisabled'>;
/**
 * Sectioned Card Footer component that wraps Footer component.
 */
export declare const SectionedCardFooter: (props: SectionedCardFooterProps) => JSX.Element;
