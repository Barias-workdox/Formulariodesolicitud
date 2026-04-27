import type { TagKind } from '@components/tag/next/tag.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export type MultipleAvatarsSizes = '24px' | '32px';

export type MultipleAvatarsKind = 'users' | 'companies' | 'groups' | 'people';

export type MultipleAvatarsAppearance = 'image' | 'initials' | 'mixed';

/**
 * Maps MultipleAvatars `kind` to Tag `kind` for the overflow counter (+N).
 *
 * - users: brand
 * - companies: power
 * - people: peace
 * - groups: neutral
 */
export const multipleAvatarsTagKindMap: Record<MultipleAvatarsKind, TagKind> = {
  users: 'brand',
  companies: 'power',
  people: 'peace',
  groups: 'neutral',
};

export interface MultipleAvatarItem {
  /** Stable identifier used by onAvatarClick */
  id: string;
  /** Display name, also used for tooltip */
  name: string;
  /** Optional avatar image URL */
  src?: string;
  /** Optional initials fallback */
  initials?: string;
}

export interface MultipleAvatarsProps extends WithTestId {
  /** Items to render as avatars */
  avatars: MultipleAvatarItem[];

  /** Define avatar size to use on ≥1280px (on smaller widths it will be forced to 24px). */
  sizes?: MultipleAvatarsSizes;

  /** Entity kind represented */
  kind?: MultipleAvatarsKind;

  /** Image/initials/mixed rendering */
  appearance?: MultipleAvatarsAppearance;

  /** Maximum number of visible avatars before showing +N */
  maxCount?: number;

  /** Disables interactions and applies disabled visual style */
  disabled?: boolean;

  /** Click callback for a specific avatar */
  onAvatarClick?(id: string): void;

  /** Click callback for the +N counter */
  onCounterClick?(): void;
}
