import { getToasterContainerContext } from '../../src/components/notification';

/**
 * Shared toaster container context used across all theme decorator panes.
 * Defined here (instead of preview.tsx) so the dual-theme decorator can import
 * it without creating a circular dependency.
 */
export const ToasterContainerContext = getToasterContainerContext();
