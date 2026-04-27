import { forwardRef, useState } from 'react';

import { Star } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon/next';
import { NavigationMenu } from '@components/navigation-menu';
import { Text } from '@components/text';

import { Header, MenuItemWrapper, Root } from './sublink.styles';

import type { SublinkProps } from './sublink.interfaces';

export type { SublinkItem, SublinkPosition } from './sublink.interfaces';

/**
 * A component that renders a sublink with a title and a list of items.
 * Items use React Router Link for client-side navigation (no refresh).
 */
export const Sublink = forwardRef<HTMLDivElement, SublinkProps>(
  ({ title, items, position, startEnhancer = Star, onItemClick }, ref): JSX.Element => {
    const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

    return (
      <Root
        ref={ref}
        $top={position.top}
        $left={position.left}
        data-testid="sidebar-sublink"
      >
        <Header>
          <Text
            margin={0}
            fontWeight="700"
            variant="bodySmall"
            color="neutralStrong"
          >
            {title}
          </Text>
        </Header>

        <NavigationMenu>
          {items.map((item) => {
            const icon = item.icon ?? startEnhancer;
            const isHovered = hoveredItemId === item.id;

            return (
              <MenuItemWrapper
                key={item.id}
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                onFocusCapture={() => setHoveredItemId(item.id)}
                onBlurCapture={() => setHoveredItemId(null)}
              >
                <NavigationMenu.MenuItem
                  startEnhancer={
                    <BackgroundIcon
                      icon={icon}
                      kind={item.disabled ? 'neutral' : isHovered ? 'brand' : 'neutral'}
                      appearance="tonal"
                      size="24px"
                      shape="round"
                      disabled={item.disabled}
                    />
                  }
                  label={item.label}
                  counter={item.counter}
                  disabled={item.disabled}
                  href={item.href}
                  onClick={() => onItemClick?.(item)}
                />
              </MenuItemWrapper>
            );
          })}
        </NavigationMenu>
      </Root>
    );
  },
);

/**
 * Useful for components created with `forwardRef`, which otherwise appear as `ForwardRef`.
 */
Sublink.displayName = 'Sublink';
