import type { ReactNode } from 'react';

import type { FilterTagProps } from './components/filter-tag';
import type { FilterValueTextProps } from './components/filter-value-text';
import type { ButtonProps } from '@components/button';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { OverrideObject } from '@themes/theme.interfaces';
import type { PopoverProps, StatefulContentRenderProp } from 'baseui/popover';

export type FilterContent = ReactNode | StatefulContentRenderProp;

export type FilterKind = 'stroked' | 'filled';

export type FilterSize = ButtonProps['size'];

export type FilterOverrides = {
  Button?: OverrideObject<ButtonProps>;
  Popover?: OverrideObject<PopoverProps>;
  ValueText?: OverrideObject<FilterValueTextProps>;
  Tag?: OverrideObject<FilterTagProps>;
};

export type FilterValue = { id: string | number | undefined; label: string };

type FilterPopoverProps = {
  minWidth?: string;
};

export type FilterProps = WithTestId<{
  /** Used to uniquely identify each filter within the `FiltersGroup` component. */
  id?: string;
  content: FilterContent;
  tooltipText?: ReactNode;
  label: string;
  value?: FilterValue[];
  kind?: FilterKind;
  size?: FilterSize;
  disabled?: boolean;
  /** Renders a tooltip with the reason when the filter is disabled */
  disabledReason?: string;
  multi?: boolean;
  minWidth?: string;
  maxWidth?: string;
  hasInteractions?: boolean;
  overrides?: FilterOverrides;
  initialIsOpen?: boolean;
  startEnhancer?: ButtonProps['startEnhancer'];
  popoverProps?: FilterPopoverProps;
  onClear?(): void;
}>;

/**
 * Parameters passed to the content render function of a filter.
 * These parameters provide access to the popover's close function.
 */
export type FilterContentParams = Parameters<StatefulContentRenderProp>[0];
