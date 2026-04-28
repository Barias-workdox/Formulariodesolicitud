import { ReactElement } from 'react';
import { styledLinkTextColors } from './link.styles';
import { LinkProps } from './link.interfaces';
export { styledLinkTextColors };
export type { LinkProps, LinkKind, LinkSize, StyledLinkTextColorsProps } from './link.interfaces';
/**
 * Link Component
 *
 * A versatile link component that supports various states and use cases:
 * - Inline links within text or paragraphs
 * - Links in footers, tooltips, cards, popovers, toast, etc.
 * - States: default, hover, visited, focus, disabled
 * - Opens in new tab by default (_blank)
 * - Supports both external and internal URLs
 */
export declare const Link: ({ dataTestId, underlined, children, href, disabled, kind, size, target, onClick, fontWeight, ...rest }: LinkProps) => ReactElement;
