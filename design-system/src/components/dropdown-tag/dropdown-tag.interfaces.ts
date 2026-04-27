import type { StatefulMenuProps } from '@components/menu';
import type { PopoverProps } from '@components/popover';
import type { TagProps } from '@components/tag';
import type { DesignSystemColorType } from '@themes/theme.interfaces';

export type SupportedKind = 'success' | 'error' | 'default';

export type DropdownTagProps = Omit<TagProps, 'kind' | 'variant'> &
  Pick<StatefulMenuProps, 'items' | 'onItemSelect'> &
  Pick<PopoverProps, 'placement'> & {
    kind: SupportedKind;
    items: StatefulMenuProps['items'];
  };

export interface ColorGroup {
  borderColor: DesignSystemColorType;
}

export type DropdownTagOverridesParams = {
  kind: SupportedKind;
  dataTestId: string;
  disabled: boolean;
};

export type TagColorsByKind = Record<SupportedKind, ColorGroup>;
