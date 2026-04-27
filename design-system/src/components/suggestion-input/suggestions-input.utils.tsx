import type { ReactElement } from 'react';

import { Search } from '@carbon/icons-react';

import { cleanCHLNic } from '@components/forms';
import { ListItem } from '@components/list';

import type { InputType, MapItemToNodeProps } from './suggestion-input.interfaces';

/** Default function to map an item to a node. */
export function defaultMapItemToNode<T>({
  dataTestId,
  item,
  $isActive,
  handleClick,
}: MapItemToNodeProps<T>): ReactElement {
  return (
    <ListItem
      data-testid={dataTestId}
      label={String(item)}
      startEnhancer={<Search />}
      isActive={$isActive}
      onClick={handleClick}
    />
  );
}

/** Default function to map an item to a string. */
export function defaultMapItemToString<T>(item: T): string {
  return String(item);
}

/**
 * Normalizes a given string value according to the specified input type.
 *
 * - If `type` is `'number'`, all non-digit characters are removed.
 * - If `type` is `'chile-rut'`, the value is cleaned to adhere to Chilean RUT format.
 * - Otherwise, the original value is returned unchanged.
 */
export const normalizeValue = (value: string, type: InputType): string => {
  switch (type) {
    case 'number': {
      return value.replace(/\D/g, '');
    }

    case 'chile-rut': {
      return cleanCHLNic({ rawNic: value });
    }

    default: {
      return value;
    }
  }
};
