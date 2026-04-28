import { StatefulMenuProps } from '../menu';
import { PopoverProps } from '../popover';
import { TagProps } from '../tag';
import { DesignSystemColorType } from '../../themes/theme.interfaces';
export type SupportedKind = 'success' | 'error' | 'default';
export type DropdownTagProps = Omit<TagProps, 'kind' | 'variant'> & Pick<StatefulMenuProps, 'items' | 'onItemSelect'> & Pick<PopoverProps, 'placement'> & {
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
