import { ReactElement } from 'react';
import { UserOption } from '../user-select.interfaces';
import { Size } from '../../../input/next';
export interface SelectValueProps {
    option: UserOption;
    size: Size;
    disabled: boolean;
}
/** Render a custom Label and option for a select */
export declare const SelectValue: ({ option, size, disabled }: SelectValueProps) => ReactElement;
