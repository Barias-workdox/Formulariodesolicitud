import { CommonOption } from '../../select/next';
import { SelectWithPaginationProps } from '../../select-with-pagination/next';
export interface UserOption extends Readonly<CommonOption<number>> {
    email?: string;
}
export interface UserSelectProps extends Omit<SelectWithPaginationProps, 'options' | 'multi'> {
    options: UserOption[];
    value: UserOption[];
}
