import type {
  MultipleAvatarItem,
  MultipleAvatarsKind,
  MultipleAvatarsSizes,
} from './multiple-avatars.interfaces';
import type { AvatarKind } from '@components/avatar/next';

export const DEFAULT_MAX_COUNT = 3;

export const DEFAULT_SIZES: MultipleAvatarsSizes = '32px';

export const DEFAULT_KIND: MultipleAvatarsKind = 'users';

export const DEFAULT_APPEARANCE = 'mixed';

export const multipleAvatarsKindMap: Record<MultipleAvatarsKind, AvatarKind> = {
  users: 'users',
  companies: 'companies',
  people: 'people',
  groups: 'group',
};

export const EMPTY_AVATARS: MultipleAvatarItem[] = [];
