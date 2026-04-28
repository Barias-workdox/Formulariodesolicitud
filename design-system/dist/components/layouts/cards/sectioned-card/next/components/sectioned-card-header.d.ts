import { HeaderProps } from '../../../../../header/header.interfaces';
export type SectionedCardHeaderProps = Omit<HeaderProps, 'size' | 'isDraggable' | 'isDisabled'>;
/**
 * Sectioned Card Header component that wraps Header component.
 */
export declare const SectionedCardHeader: (props: SectionedCardHeaderProps) => JSX.Element;
