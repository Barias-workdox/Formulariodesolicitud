import type { ReactNode } from 'react';

import { NotebookReference } from '@carbon/icons-react';

import { COMMON_ICON_SIZE_16 } from '@constants/common.constants';

import { SelectPlaceholder } from './components/select-placeholder';

import type { SelectOverrides } from 'baseui/select';

/** UserSelect overrides */
export const getUserSelectOverrides = ({
  placeholder,
}: {
  placeholder: ReactNode;
}): SelectOverrides => ({
  Placeholder: {
    component: ({ $disabled }) => (
      <SelectPlaceholder
        isDisabled={$disabled}
        placeholder={placeholder}
      />
    ),
  },
  DropdownListItem: {
    style: {
      padding: '0',
    },
  },
  SelectArrow: {
    component: (): JSX.Element => {
      return <NotebookReference size={COMMON_ICON_SIZE_16} />;
    },
  },
});
