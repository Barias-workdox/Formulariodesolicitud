import type { ButtonProps, SizeType } from '../button';
import type { PopoverPlacementType } from '../popover';

export interface DropdownOption {
  'data-testid'?: string;
  label: string;
  Icon: React.ElementType;
  isActive: boolean;
  onClick(): void;
}

export interface DropdownProps {
  dataTestId?: string;
  options: DropdownOption[];
  size: SizeType;
  textForTooltip?: string;
  placement?: PopoverPlacementType;
  buttonKind?: ButtonProps['kind'];
}

export interface ListItemProps {
  item: Omit<DropdownOption, 'onClick'>;
}
