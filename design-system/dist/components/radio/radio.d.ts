import { ReactElement } from 'react';
import { WithTestId } from '../../interfaces/common.interfaces';
import { RadioProps as BaseRadioProps } from 'baseui/radio';
type RadioProps = WithTestId<BaseRadioProps>;
/**
 * A custom Radio component that extends the functionality of the BaseUI Radio component.
 * It allows for deep merging of style overrides and supports a test ID prop for testing purposes.
 */
export declare const Radio: ({ "data-testid": testId, overrides, ...rest }: RadioProps) => ReactElement;
export {};
