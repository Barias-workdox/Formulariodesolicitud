import { forwardRef, useMemo, type CSSProperties } from 'react';

import { useVirtualizer } from '@tanstack/react-virtual';

import { MenuItem } from '@components/menu/components';
import { useSyncedRef } from '@hooks/use-synced-ref.hook';

import { StyledContainer } from './virtualized-list.styles';

import type { OverridesParams } from '../../virtualized-menu.overrides';

/**
 * Returns styles for a virtualized item based on its position and size.
 */
const getVirtualItemStyles = (virtualItem: { start: number; size: number }): CSSProperties => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: `${virtualItem.size}px`,
  transform: `translateY(${virtualItem.start}px)`,
});

/**
 * Renders a virtualized list of menu items using TanStack Virtual.
 * Uses dynamic measurement for accurate item sizing.
 */
export const VirtualizedList = forwardRef<HTMLDivElement, OverridesParams>(function MenuList(
  { dataTestId = 'menu', items = [], maxHeight, itemSize = 44, itemLabelTemplate, onItemSelect },
  ref,
) {
  const parentRef = useSyncedRef({ externalRef: ref });

  const arrayItems = useMemo(() => (Array.isArray(items) ? items : Object.values(items)), [items]);

  const rowVirtualizer = useVirtualizer({
    count: arrayItems.length,
    overscan: 1,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemSize,
    // Enable dynamic measurement for accurate sizing
    measureElement: (element) => element?.getBoundingClientRect().height ?? itemSize,
  });

  return (
    <StyledContainer
      ref={parentRef}
      data-testid={dataTestId}
      $maxHeight={maxHeight}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
          const item = arrayItems[virtualItem.index];
          if (!item) {
            return null;
          }

          // Build MenuItem props - getItemLabel is optional in practice but TypeScript requires it
          const menuItemProps = {
            item,
            optionListBorderBottom: true as const,
            role: 'option' as const,
            index: virtualItem.index,
            baseDataTestId: dataTestId,
            onClick: (): void => {
              onItemSelect?.({ item });
            },
            ...(itemLabelTemplate ? { getItemLabel: itemLabelTemplate } : {}),
          } as Parameters<typeof MenuItem>[0];

          return (
            <MenuItem
              key={virtualItem.key}
              ref={rowVirtualizer.measureElement}
              data-index={virtualItem.index}
              style={getVirtualItemStyles(virtualItem)}
              {...menuItemProps}
            />
          );
        })}
      </div>
    </StyledContainer>
  );
});
