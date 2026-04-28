import { SublinkItem, SublinkPosition } from '../../sublink/sublink.interfaces';
import { SidebarLinkProps } from '../sidebar-link.interfaces';
export interface UseSidebarLinkSublinkParams {
    subLinks?: SidebarLinkProps[];
    isDisabled?: boolean;
}
export interface UseSidebarLinkSublinkResult {
    hasSubLinks: boolean;
    isHovered: boolean;
    linkRef: React.RefObject<HTMLAnchorElement>;
    shouldShowSublink: boolean;
    sublinkItems: SublinkItem[];
    sublinkPosition: SublinkPosition | null;
    sublinkRef: React.RefObject<HTMLDivElement>;
    handleMouseEnter(): void;
    handleMouseOut(event: React.MouseEvent<HTMLDivElement>): void;
    handleBlur(event: React.FocusEvent<HTMLDivElement>): void;
}
/**
 * Extracts all the sublink overlay logic from `SidebarLink`:
 * - hover/focus state
 * - mapping `subLinks` → `SublinkItem[]`
 * - overlay positioning and viewport listeners
 */
export declare const useSidebarLinkSublink: ({ subLinks, isDisabled, }: UseSidebarLinkSublinkParams) => UseSidebarLinkSublinkResult;
