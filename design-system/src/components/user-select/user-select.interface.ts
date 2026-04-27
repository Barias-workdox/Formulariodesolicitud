import type { SizeType } from '@components/button';
import type { AvatarListItemProps } from '@components/list';
import type { SelectWithPaginationProps } from '@components/select-with-pagination';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { Option } from 'baseui/select';

export interface UserOption extends Option {
  email?: string;
}

export interface UserSelectProps extends Omit<
  SelectWithPaginationProps,
  'options' | 'multi' | 'size' | 'getOptionLabel' | 'getValueLabel' | 'labelKey'
> {
  avatarBackGroundColor?: AvatarListItemProps['avatarProps']['backgroundColor'];
  options: UserOption[];
  size?: Extract<SizeType, '32px' | '44px'>;
}

export interface UserSelectOverridesProps {
  theme: DesignSystemTheme;
  placeholder: SelectWithPaginationProps['placeholder'];
  dataTestId?: SelectWithPaginationProps['data-testid'];
}
