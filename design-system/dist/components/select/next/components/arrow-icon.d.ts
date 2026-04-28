import { ReactElement } from 'react';
import { AppColors } from '../../../../themes/theme.interfaces';
export interface ArrowIconProps {
    isOpen: boolean;
    color?: keyof AppColors;
}
/**
 * The ArrowIcon will be used to show if the select is showing its content or not
 */
export declare const ArrowIcon: ({ isOpen, color }: ArrowIconProps) => ReactElement;
