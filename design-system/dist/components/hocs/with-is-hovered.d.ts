import { ComponentType, ReactElement } from 'react';
export interface WithIsHoveredProps {
    isHovered?: boolean;
}
interface HoverOptions {
    disabled?: boolean;
    onHoverStart?(): void;
    onHoverEnd?(): void;
}
/**
 * A function that takes a component and optional hover options, and
 * returns a new component with the `isHovered` prop injected.
 */
export declare function withIsHovered<P extends object>(WrappedComponent: ComponentType<P & WithIsHoveredProps>, options?: HoverOptions): (props: P) => ReactElement;
export {};
