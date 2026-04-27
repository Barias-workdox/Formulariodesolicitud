import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import { Close } from '@carbon/icons-react';

import { DEFAULT_INPUT_WIDTH } from '@components/input/next';

import { SelectControlContainer } from './components/select-control-container';
import { SelectDropdownContainer } from './components/select-dropdown-container';
import { SelectIconsContainer } from './components/select-icons-container';
import {
  SelectOptgroupHeader,
  type SelectOptgroupHeaderProps,
} from './components/select-optgroup-header';
import {
  dropdownListItemStyles,
  dropdownStyles,
  inputStyles,
  placeholderStyles,
  popoverBodyStyles,
  singleValueStyles,
  tagRootStyles,
  valueContainerStyles,
  optionContentStyle,
} from './select.styles';

import type { GetOverridesParams } from './select.interfaces';
import type { SelectOverrides } from 'baseui/select';
import type { TagOverrides } from 'baseui/tag';

/**
 * Get the select overrides customized by the Design System theme and kind
 */
export const getSelectOverrides = ({
  kind,
  zIndex,
  dataTestId,
  isHovered,
  size,
  options,
  isInputDirty,
  leading,
  width = DEFAULT_INPUT_WIDTH,
  name,
  onClear,
}: GetOverridesParams): SelectOverrides => ({
  Root: {
    style: {
      width,
    },
  },
  IconsContainer: {
    component: SelectIconsContainer,
    props: {
      'data-testid': dataTestId,
      isInputDirty,
      onClear,
      zIndex,
    },
  },
  // This search icon is hidden because the search icon is rendered in the SelectControlContainer
  SearchIconContainer: {
    style: {
      display: 'none',
    },
  },
  DropdownContainer: {
    component:
      SelectDropdownContainer as unknown as SelectOverrides['DropdownContainer']['component'],
  },
  Dropdown: {
    style: dropdownStyles,
  },
  DropdownListItem: {
    props: {
      $size: size,
    },
    style: dropdownListItemStyles,
  },
  ControlContainer: {
    component: SelectControlContainer,
    props: {
      'data-testid': dataTestId,
      kind,
      size,
      isHovered,
      leading,
    },
  },
  OptionContent: {
    style: optionContentStyle,
  },
  ValueContainer: {
    props: {
      ...(dataTestId && { 'data-testid': `${dataTestId}-value-container` }),
      $size: size,
      $kind: kind,
    },
    style: valueContainerStyles,
  },
  SingleValue: {
    ...(dataTestId && { 'data-testid': `${dataTestId}-value` }),
    style: singleValueStyles,
  },
  Tag: {
    props: {
      overrides: {
        Action: {
          style: {
            margin: 0,
          },
        },
        Root: {
          props: {
            $size: size,
          },
          style: tagRootStyles,
        },
        ActionIcon: () => <Close size={12} />,
      } as TagOverrides,
    },
  },
  Popover: {
    props: {
      overrides: {
        Body: {
          style: (props) => ({
            ...popoverBodyStyles(props),
            zIndex,
          }),
        },
      },
    },
  },
  Input: {
    props: {
      'data-testid': dataTestId,
      $size: size,
      ...(name && { name }),
    },
    style: inputStyles,
  },
  Placeholder: {
    style: placeholderStyles,
  },
  StatefulMenu: {
    props: {
      overrides: {
        EmptyState: {
          style: ({ $theme }) => ({
            color: $theme.colors.neutralSubdued,
          }),
        },
        OptgroupHeader: {
          component: forwardRef<HTMLLIElement, PropsWithChildren<SelectOptgroupHeaderProps>>(
            function _OptgroupHeader({ children: label, ...headerProps }, ref) {
              return (
                <SelectOptgroupHeader
                  innerRef={ref}
                  count={options[label as string].length}
                  label={label}
                  {...headerProps}
                />
              );
            },
          ),
        },
      },
    },
  },
});

/** @deprecated use instead getSelectOverrides */
export const getOverrides = getSelectOverrides;
