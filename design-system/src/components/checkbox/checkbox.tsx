import { forwardRef } from 'react';

import { Checkbox as BaseWebCheckbox, LABEL_PLACEMENT } from 'baseui/checkbox';

import { useSyncedRef } from '@hooks/use-synced-ref.hook';

import { checkboxOverridesStyles } from './checkbox.styles';

import type { CheckboxProps as BaseWebCheckboxProps } from 'baseui/checkbox';

export type CheckboxProps = BaseWebCheckboxProps & {
  'data-testid'?: string;
  id?: string;
  /** Custom styles for the checkbox container */
  className?: string;
  /** If true the text label gets the form-control styles */
  labelAsFormControl?: boolean;
};

/**
 * Styled checkbox component
 *
 * if labelAsFormControl is true the child text gets the label styles of the form control
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function CheckboxComponent(
  {
    'data-testid': dataTestId = 'design-system__checkbox--component',
    id,
    labelPlacement = LABEL_PLACEMENT.right,
    children,
    className,
    labelAsFormControl = false,
    overrides = {},
    ...rest
  },
  ref,
): JSX.Element {
  const inputRef = useSyncedRef<HTMLInputElement>({ externalRef: ref });

  return (
    <div className={className}>
      <BaseWebCheckbox
        {...rest}
        {...overrides}
        id={id}
        labelPlacement={labelPlacement}
        ariaLabel="checkbox"
        inputRef={inputRef}
        overrides={checkboxOverridesStyles({ dataTestId, labelAsFormControl, overrides })}
      >
        {children}
      </BaseWebCheckbox>
    </div>
  );
});
