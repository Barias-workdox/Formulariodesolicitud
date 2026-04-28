import { ReactElement } from 'react';
import { UserOption } from '../user-select.interfaces';
import { Size } from '../../../input/next';
export interface SelectOptionProps {
    option: UserOption;
    size: Size;
}
/** Render a custom Label and option for a select */
export declare const SelectOption: ({ option, size }: SelectOptionProps) => ReactElement;
