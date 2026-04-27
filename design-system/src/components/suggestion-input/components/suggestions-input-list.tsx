import { Children } from 'react';
import type { ReactElement } from 'react';

import { StyledContentWrapper, StyledList } from '../styled-components';
import { defaultMapItemToNode, defaultMapItemToString } from '../suggestions-input.utils';

import type { MapItemToNodeProps } from '../suggestion-input.interfaces';

interface SuggestionsInputListProps<Item> {
  dataTestId?: string;
  /** The width to apply to the content wrapper (often derived from anchor width). */
  width?: string;
  /** A node to render above the list, often used for headers or additional context. */
  topEnhancer?: React.ReactNode;
  /** A ref for the list container element. */
  listRef: React.RefObject<HTMLUListElement>;
  /** An array of items to display as suggestions. */
  items: Item[];
  /** The index of the currently highlighted (active) item. */
  highlightedIndex: number;
  /** Maps each item to its visual ReactNode in the suggestion list. */
  mapItemToNode?(props: MapItemToNodeProps<Item>): ReactElement;
  /** Maps each item to its string representation (for selection). */
  mapItemToString?(item: Item): string;
  /** Handler for selecting or changing the current item. */
  handleChange(newValue: string): void;
}

/**
 * Renders the list of suggestions within a styled content wrapper.
 */
export function SuggestionsInputList<Item>({
  dataTestId = 'suggestion-input-list',
  listRef,
  items,
  width,
  topEnhancer,
  highlightedIndex,
  mapItemToNode = defaultMapItemToNode,
  mapItemToString = defaultMapItemToString,
  handleChange,
}: SuggestionsInputListProps<Item>): ReactElement {
  return (
    <StyledContentWrapper $width={width}>
      {topEnhancer}
      <StyledList
        data-testid={`${dataTestId}__list`}
        ref={listRef}
        role="list"
      >
        {Children.toArray(
          items.map((item, index) =>
            mapItemToNode({
              dataTestId: `${dataTestId}-${index}`,
              item,
              $isActive: highlightedIndex === index,
              handleClick: () => handleChange(mapItemToString(item)),
            }),
          ),
        )}
      </StyledList>
    </StyledContentWrapper>
  );
}
