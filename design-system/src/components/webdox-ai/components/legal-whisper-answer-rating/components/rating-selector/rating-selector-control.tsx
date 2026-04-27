import { Controller, type ControllerProps } from 'react-hook-form';

import { RatingSelector, type RatingSelectorProps } from './rating-selector';

import type { FormControlProps } from '@components/form-control';

export type RatingSelectorControlProps = Omit<FormControlProps, 'children'> &
  RatingSelectorProps &
  Omit<ControllerProps, 'render'>;

/**
 * RatingSelector control component that requires a controller from the form context
 * and implements RatingSelector form control from DS.
 */
export const RatingSelectorControl = ({
  'data-testid': dataTestId,
  name,
  defaultValue,
}: RatingSelectorControlProps): JSX.Element => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      render={({ field: { ref, ...field } }): JSX.Element => (
        <RatingSelector
          ref={ref}
          data-testid={dataTestId}
          {...field}
        />
      )}
    />
  );
};
