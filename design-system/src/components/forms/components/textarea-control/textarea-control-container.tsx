import { useFormContext } from '../../hooks';

import { TextareaControl } from './textarea-control';

import type { TextareaControlProps } from './textarea-control';

export type TextareaControlContainerProps = Omit<TextareaControlProps, 'control'>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const TextareaControlContainer = (props: TextareaControlContainerProps): JSX.Element => {
  const methods = useFormContext();

  return (
    <TextareaControl
      {...methods}
      {...props}
    />
  );
};
