import { ReactElement, ReactNode } from 'react';
import { RadioProps } from 'baseui/radio';
export type DetailedRadioProps = Omit<RadioProps, 'description'> & {
    /**
     * The test ID for the radio button.
     */
    'data-testid': string;
    /**
     * The description of the radio button
     */
    description: ReactNode;
    /**
     * The icon component to display alongside the radio button.
     */
    icon?: ReactNode;
};
/**
 * Simple Styled Radio with reusable styles, it will be used in the same way as a normal radio
 */
export declare const DetailedRadio: ({ "data-testid": dataTestId, children, description, icon, overrides, value, ...rest }: DetailedRadioProps) => ReactElement;
