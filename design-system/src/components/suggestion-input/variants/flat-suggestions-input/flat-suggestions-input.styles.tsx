import { inputOverrides as searchContainerInputOverrides } from '@components/search-container/components/search-input/search-input.styles';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { themedStyled } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

export const StyledWrapper = themedStyled<'div', { $width: StyleObject['width'] }>(
  'div',
  ({ $width }) => ({ width: $width }),
);

export const inputOverrides = mergeOverridesDeep(searchContainerInputOverrides, {
  Input: { style: { fontSize: '16px' } },
});
