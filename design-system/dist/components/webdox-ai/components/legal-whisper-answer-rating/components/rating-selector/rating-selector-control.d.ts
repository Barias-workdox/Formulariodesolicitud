import { ControllerProps } from 'react-hook-form';
import { RatingSelectorProps } from './rating-selector';
import { FormControlProps } from '../../../../../form-control';
export type RatingSelectorControlProps = Omit<FormControlProps, 'children'> & RatingSelectorProps & Omit<ControllerProps, 'render'>;
/**
 * RatingSelector control component that requires a controller from the form context
 * and implements RatingSelector form control from DS.
 */
export declare const RatingSelectorControl: ({ "data-testid": dataTestId, name, defaultValue, }: RatingSelectorControlProps) => JSX.Element;
