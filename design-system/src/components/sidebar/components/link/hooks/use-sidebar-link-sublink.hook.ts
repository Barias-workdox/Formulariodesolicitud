import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { sanitizeUrl } from '../../../../../utils/url.utils';

import type { SublinkItem, SublinkPosition } from '../../sublink/sublink.interfaces';
import type { SidebarLinkProps } from '../sidebar-link.interfaces';

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
export const useSidebarLinkSublink = ({
  subLinks = [],
  isDisabled,
}: UseSidebarLinkSublinkParams): UseSidebarLinkSublinkResult => {
  const hasSubLinks = subLinks.length > 0;
  const disabled = isDisabled ?? false;

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const sublinkRef = useRef<HTMLDivElement>(null);
  const [sublinkPosition, setSublinkPosition] = useState<SublinkPosition | null>(null);

  const shouldShowSublink = hasSubLinks && isHovered && !disabled;

  const sublinkItems: SublinkItem[] = useMemo(
    () =>
      subLinks
        .filter((subLink) => Boolean(subLink.text) && Boolean(subLink.href))
        .map((subLink, index) => ({
          id: `${sanitizeUrl(subLink.href)}__${index}`,
          label: subLink.text ?? '',
          href: subLink.href,
          counter: subLink.counter,
          disabled: subLink.isDisabled ?? false,
          icon: subLink.Icon,
        })),
    [subLinks],
  );

  /**
   * Computes and stores the `Sublink` overlay coordinates relative to the viewport.
   */
  const updateSublinkPosition = useCallback((): void => {
    const rect = linkRef.current?.getBoundingClientRect();
    if (!rect) return;

    const overlayHeight = sublinkRef.current?.getBoundingClientRect().height;
    const centeredTop =
      overlayHeight != null ? rect.top + rect.height / 2 - overlayHeight / 2 : rect.top;
    const maxTop =
      overlayHeight != null
        ? Math.max(0, window.innerHeight - overlayHeight)
        : Number.POSITIVE_INFINITY;

    // `Sublink` is `position: fixed`, so viewport-relative coords are correct.
    setSublinkPosition({
      top: Math.min(Math.max(0, centeredTop), maxTop),
      left: rect.right,
    });
  }, []);

  /** Handles hover/focus enter event to set hover state */
  const handleMouseEnter = useCallback((): void => {
    setIsHovered(true);
    if (hasSubLinks) updateSublinkPosition();
  }, [hasSubLinks, updateSublinkPosition]);

  /** Handles hover leave event to clear hover state */
  const handleMouseLeave = useCallback((): void => {
    setIsHovered(false);
  }, []);

  /**
   * Uses bubbling mouse events so hovering descendants still toggles hover state.
   * Avoids closing when moving between children by checking `relatedTarget`.
   */
  const handleMouseOut = useCallback(
    (event: React.MouseEvent<HTMLDivElement>): void => {
      const nextHovered = event.relatedTarget as Node | null;
      if (nextHovered && event.currentTarget.contains(nextHovered)) return;

      handleMouseLeave();
    },
    [handleMouseLeave],
  );

  /** Keeps the sublink open when focus moves within the container (keyboard users) */
  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLDivElement>): void => {
      const nextFocused = event.relatedTarget as Node | null;
      if (nextFocused && event.currentTarget.contains(nextFocused)) return;

      handleMouseLeave();
    },
    [handleMouseLeave],
  );

  /**
   * Keeps the `Sublink` overlay positioned correctly while it is open.
   *
   * When `shouldShowSublink` becomes true, it:
   * - Computes the initial viewport-relative position for the overlay.
   * - Subscribes to `resize` and (capturing) `scroll` events to recompute the position as the viewport changes.
   *
   * When the overlay closes, it cleans up the event listeners.
   */
  useEffect(() => {
    if (!shouldShowSublink) return;

    updateSublinkPosition();

    /** Recompute on scroll/resize while the overlay is open. */
    const handleViewportChange = (): void => updateSublinkPosition();

    window.addEventListener('resize', handleViewportChange);
    window.addEventListener('scroll', handleViewportChange, true);

    return (): void => {
      window.removeEventListener('resize', handleViewportChange);
      window.removeEventListener('scroll', handleViewportChange, true);
    };
  }, [shouldShowSublink, updateSublinkPosition]);

  // After the overlay mounts (ref becomes available), re-position it so it's centered.
  useLayoutEffect(() => {
    if (!shouldShowSublink) return;
    if (!sublinkRef.current) return;

    updateSublinkPosition();
  }, [shouldShowSublink, updateSublinkPosition]);

  return {
    hasSubLinks,
    isHovered,
    linkRef,
    shouldShowSublink,
    sublinkItems,
    sublinkPosition,
    sublinkRef,
    handleMouseEnter,
    handleMouseOut,
    handleBlur,
  };
};
