import { ReactNode } from 'react';
export interface SvgIconProps {
    svg: string | ReactNode;
    width?: string;
    height?: string;
}
/**
 * Get an SVG as string and return an adaptable image to parent
 *
 * @deprecated This component is deprecated inside the Design System because SVGs can now be directly used as React components.
 * Consider replacing instances of SvgIcon with inline SVG usage or importing SVGs as React components instead.
 *
 * @example
 * ```
 * import { ReactComponent as SvgIcon } from "./svg-icon.svg";
 *
 * <SvgIcon width="24px" height="24px" />
 * ```
 */
export declare const SvgIcon: ({ svg, width, height }: SvgIconProps) => JSX.Element;
