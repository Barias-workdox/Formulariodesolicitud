import type {
  MultipleAvatarItem,
  MultipleAvatarsAppearance,
  MultipleAvatarsKind,
  MultipleAvatarsSizes,
} from './multiple-avatars.interfaces';

const THOUSAND = 1_000;
const MILLION = 1_000_000;

/** Floors a number to one decimal place (e.g. 12.39 to 12.3). */
const floorToOneDecimal = (value: number): number => Math.floor(value * 10) / 10;

/** Formats a number with at most one decimal place, removing trailing ".0". */
const formatOneDecimalMax = (value: number): string => {
  const floored = floorToOneDecimal(value);

  return floored.toFixed(1).replace(/\.0$/, '');
};

/**
 * Returns +N counter text.
 *
 * Rules:
 * - Up to 999 → full number
 * - 1,000 to 999,999 → K
 * - 1,000,000+ → M
 */
export const getCounterText = (overflow: number): string => {
  const safeOverflow = Math.max(0, overflow);

  if (safeOverflow < THOUSAND) {
    return `+${safeOverflow}`;
  }

  if (safeOverflow < MILLION) {
    const inK = safeOverflow / THOUSAND;
    // Avoid rounding up to 1000K at the upper bound (e.g. 999,999 -> 999.9K)
    const safeInK = Math.min(inK, 999.9);

    return `+${formatOneDecimalMax(safeInK)}K`;
  }

  const inM = safeOverflow / MILLION;

  return `+${formatOneDecimalMax(inM)}M`;
};

/** Returns overlap in px based on avatar size (style consumes it as a positive number). */
export const getOverlapPxFromSize = (size: MultipleAvatarsSizes): number =>
  size === '24px' ? 4 : 8;

type TranslateFn = (key: string, options?: Record<string, unknown>) => string;

/**
 * Builds tooltip content for the +N counter.
 *
 * Rules:
 * - Show the first 10 names
 * - If there are more than 10, append: "+N additional"
 */
export const getCounterTooltipContent = (avatars: MultipleAvatarItem[], t: TranslateFn): string => {
  const safeAvatars = avatars ?? [];
  const names = safeAvatars.map((a) => a.name).filter(Boolean);

  const firstTen = names.slice(0, 10);
  const remaining = Math.max(0, names.length - firstTen.length);

  if (firstTen.length === 0) return '';

  const base = firstTen.join(', ');

  if (remaining <= 0) return base;

  const additionalText = t('multipleAvatars.additional', { count: remaining });

  return `${base}, ${additionalText}`;
};

/** Determines if an item should show an image according to kind/appearance. */
export const shouldRenderImage = ({
  item,
  appearance,
  kind,
}: {
  item: MultipleAvatarItem;
  appearance: MultipleAvatarsAppearance;
  kind: MultipleAvatarsKind;
}): boolean => {
  if (kind === 'groups') return false;
  if (appearance === 'initials') return false;
  if (appearance === 'image') return Boolean(item.src);

  return Boolean(item.src);
};
