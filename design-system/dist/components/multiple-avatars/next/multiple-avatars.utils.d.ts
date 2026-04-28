import { MultipleAvatarItem, MultipleAvatarsAppearance, MultipleAvatarsKind, MultipleAvatarsSizes } from './multiple-avatars.interfaces';
/**
 * Returns +N counter text.
 *
 * Rules:
 * - Up to 999 → full number
 * - 1,000 to 999,999 → K
 * - 1,000,000+ → M
 */
export declare const getCounterText: (overflow: number) => string;
/** Returns overlap in px based on avatar size (style consumes it as a positive number). */
export declare const getOverlapPxFromSize: (size: MultipleAvatarsSizes) => number;
type TranslateFn = (key: string, options?: Record<string, unknown>) => string;
/**
 * Builds tooltip content for the +N counter.
 *
 * Rules:
 * - Show the first 10 names
 * - If there are more than 10, append: "+N additional"
 */
export declare const getCounterTooltipContent: (avatars: MultipleAvatarItem[], t: TranslateFn) => string;
/** Determines if an item should show an image according to kind/appearance. */
export declare const shouldRenderImage: ({ item, appearance, kind, }: {
    item: MultipleAvatarItem;
    appearance: MultipleAvatarsAppearance;
    kind: MultipleAvatarsKind;
}) => boolean;
export {};
