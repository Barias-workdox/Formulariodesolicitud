import { forwardRef } from 'react';

import { Avatar } from '@components/avatar';

import { ListItem } from '../list-item';
import { StyledListItemIconInner } from '../list-item/list-item.styles';

import type { ListItemProps } from '../list-item/list-item.interfaces';
import type { AvatarProps } from '@components/avatar';

export type AvatarListItemProps = ListItemProps & {
  avatarProps: Pick<AvatarProps, 'name'> &
    Partial<
      Pick<AvatarProps, 'backgroundColor' | 'initials' | 'showTooltip' | 'disabled' | 'overrides'>
    >;
} & { zIndex?: number };

/**
 * Component that integrates an `Avatar` component with the `ListItem` component.
 * It provides a way to display an avatar alongside a label, enhancing the list item with a visual representation
 * of the avatar.
 */
export const AvatarListItem = forwardRef<HTMLButtonElement, AvatarListItemProps>(
  function _AvatarListItem(
    {
      'data-testid': dataTestId = 'avatar-list-item',
      avatarProps,
      disabled,
      zIndex,
      startEnhancer,
      endEnhancer,
      ...rest
    },
    ref,
  ): JSX.Element {
    return (
      <ListItem
        ref={ref}
        data-testid={dataTestId}
        disabled={disabled}
        {...rest}
        startEnhancer={
          <StyledListItemIconInner>
            {startEnhancer}

            <Avatar
              data-testid={`${dataTestId}--avatar`}
              {...avatarProps}
              size="24px"
              disabled={disabled}
              zIndex={zIndex}
            />
          </StyledListItemIconInner>
        }
        endEnhancer={endEnhancer}
      />
    );
  },
);
