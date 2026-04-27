import { useMemo } from 'react';

import { StatefulMenu } from '@components/menu';
import { Popover } from '@components/popover';
import { Tag } from '@components/tag';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { noop } from '@utils/noop';

import { dropdownTagOverrides, menuOverrides } from './dropdown-tag.styles';

import type { DropdownTagProps } from './dropdown-tag.interfaces';
import type { TagOverrides } from 'baseui/tag';

/** Tag component wrapped in a Popover */
export const DropdownTag = ({
  'data-testid': dataTestId = 'dropdown-tag',
  kind,
  children,
  items = [],
  onItemSelect = noop,
  overrides,
  disabled,
  placement = 'auto',
  ...rest
}: DropdownTagProps): JSX.Element => {
  const mergedOverrides: TagOverrides = useMemo(() => {
    const baseOverrides: TagOverrides = dropdownTagOverrides({
      kind,
      dataTestId,
      disabled,
    });

    return mergeOverridesDeep(baseOverrides, overrides);
  }, [kind, dataTestId, overrides, disabled]);

  const popoverContent = useMemo((): JSX.Element | null => {
    if (disabled) {
      return null;
    }

    return (
      <StatefulMenu
        items={items}
        onItemSelect={onItemSelect}
        overrides={menuOverrides}
      />
    );
  }, [disabled, items, onItemSelect]);

  return (
    <Popover
      placement={placement}
      content={popoverContent}
      showArrow
      ignoreBoundary
    >
      <Tag
        data-testid={`${dataTestId}__tag`}
        overrides={mergedOverrides}
        disabled={disabled}
        closeable={true}
        {...rest}
      >
        {children}
      </Tag>
    </Popover>
  );
};
