import { ReactElement, ReactNode } from 'react';
import { RadioProps } from 'baseui/radio';
export interface BorderedRadioProps extends Omit<RadioProps, 'labelPlacement' | 'align'> {
    'data-testid'?: string;
    title?: string;
    /** ReactNode displayed above the description.*/
    icon: ReactNode;
}
/**
 * Radio button with squared borders
 */
export declare const BorderedRadio: ({ "data-testid": dataTestId, icon, title, description, overrides, value, ...rest }: BorderedRadioProps) => ReactElement;
