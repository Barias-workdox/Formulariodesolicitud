import { type ReactElement, forwardRef } from 'react';

import { CheckboxCheckmark } from '@components/checkbox/components/checkbox-checkmark';
import { AvatarListItem } from '@components/list/components/avatar-list-item';
import { ListItem } from '@components/list/components/list-item';
import { StyledListItemIconInner } from '@components/list/components/list-item/list-item.styles';
import { ListItemCounter } from '@components/list/components/list-item-counter';
import { COMMON_FONT_SIZE_12 } from '@constants/common.constants';

import type { ListItemFactoryProps } from './list-factory.interfaces';

/**
 * A factory that renders either a "basic" ListItem or an "avatar" ListItem,
 * depending on the `kind` prop.
 */
export const ListItemFactory = forwardRef<HTMLButtonElement, ListItemFactoryProps>(
  function _ListItemFactory(
    {
      dataTestId,
      label,
      checked = false,
      disabled,
      withCheckbox,
      Icon,
      kind,
      avatarProps = {},
      overrides = {},
      quantity,
      aiGenerated,
      onClick,
    },
    ref,
  ): ReactElement {
    const commonProps = {
      'data-testid': dataTestId,
      ref,
      label,
      isActive: checked,
      disabled,
      size: 'sm',
      overrides,
      aiGenerated,
      onClick,
    } as const;

    switch (kind) {
      case 'group': {
        return (
          <ListItem
            {...commonProps}
            size="sm"
            aiGenerated={aiGenerated}
            textProps={{
              label: { $style: { fontSize: COMMON_FONT_SIZE_12 }, variant: 'upperDetails' },
            }}
            endEnhancer={<ListItemCounter quantity={quantity} />}
          />
        );
      }

      case 'avatar': {
        return (
          <AvatarListItem
            {...commonProps}
            Icon={Icon}
            avatarProps={avatarProps}
            startEnhancer={
              withCheckbox && (
                <StyledListItemIconInner>
                  <CheckboxCheckmark
                    dataTestId={`${dataTestId}__checkbox`}
                    checked={checked}
                    disabled={disabled}
                  />
                </StyledListItemIconInner>
              )
            }
          />
        );
      }

      case 'basic':
      default: {
        const renderStartEnhancer = withCheckbox || Icon;

        return (
          <ListItem
            {...commonProps}
            size="sm"
            tooltipProps={{ placement: 'top', hasPointerEventsEnabled: false }}
            startEnhancer={
              renderStartEnhancer && (
                <StyledListItemIconInner>
                  {withCheckbox && (
                    <CheckboxCheckmark
                      dataTestId={`${dataTestId}__checkbox`}
                      checked={checked}
                      disabled={disabled}
                    />
                  )}
                  {Icon}
                </StyledListItemIconInner>
              )
            }
          />
        );
      }
    }
  },
);
