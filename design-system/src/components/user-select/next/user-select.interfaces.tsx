import type { CommonOption } from '@components/select/next';
import type { SelectWithPaginationProps } from '@components/select-with-pagination/next';

export interface UserOption extends Readonly<CommonOption<number>> {
  email?: string;
}

export interface UserSelectProps extends Omit<SelectWithPaginationProps, 'options' | 'multi'> {
  options: UserOption[];
  value: UserOption[];
}
