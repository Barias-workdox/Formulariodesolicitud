import type { ReactElement } from 'react';

import { AvatarListItem } from '@components/list';
import { useCss } from '@components/utils/hooks/use-css';

import type { UserOption } from '../user-select.interfaces';
import type { Size } from '@components/input/next';
import type { ListItemSize } from '@components/list/components/list-item';

export interface SelectOptionProps {
  option: UserOption;
  size: Size;
}

/** Render a custom Label and option for a select */
export const SelectOption = ({ option, size }: SelectOptionProps): ReactElement => {
  const { theme } = useCss();

  const horizontalPaddings: Record<Size, string> = {
    '32px': theme.spacing.spacingXs,
    compact: theme.spacing.spacingXs,
    '44px': theme.spacing.spacingMd,
    default: theme.spacing.spacingMd,
  };

  const verticalPaddings: Record<Size, string> = {
    '32px': theme.spacing.spacing2xs,
    compact: theme.spacing.spacing2xs,
    '44px': theme.spacing.spacingXs,
    default: theme.spacing.spacingXs,
  };

  const sizes: Record<Size, ListItemSize> = {
    '32px': 'sm',
    compact: 'sm',
    '44px': 'md',
    default: 'md',
  };

  return (
    <AvatarListItem
      size={sizes[size] ?? 'md'}
      avatarProps={{
        backgroundColor: 'peaceSubtle',
        name: option.label as string,
      }}
      label={option.label}
      details={option.email}
      overrides={{
        Root: {
          style: {
            paddingTop: verticalPaddings[size] ?? theme.spacing.spacingMd,
            paddingBottom: verticalPaddings[size] ?? theme.spacing.spacingMd,
            paddingLeft: horizontalPaddings[size] ?? theme.spacing.spacingMd,
            paddingRight: horizontalPaddings[size] ?? theme.spacing.spacingMd,
          },
        },
      }}
    />
  );
};
