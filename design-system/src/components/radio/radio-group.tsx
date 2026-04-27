import { forwardRef, useMemo } from 'react';

import { ALIGN, RadioGroup as BaseWebRadioGroup } from 'baseui/radio';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { Radio } from './radio';
import { getRadioGroupOverrides } from './radio-group.styles';

import type { RadioGroupProps } from './radio-group.interfaces';

export { ALIGN };

/**
 * A group of radio buttons with customizable options and labels.
 */
export const RadioGroup = forwardRef<HTMLElement, RadioGroupProps>(function RadioGroupComponent(
  {
    'data-testid': dataTestId = 'design-system__radio-group--component',
    options,
    valueKey = 'id',
    labelKey = 'label',
    align = ALIGN.vertical,
    className,
    children,
    rowGap,
    columnGap,
    overrides: { Radio: RadioOverrides, ...overrides } = {},
    ...rest
  },
  ref,
): JSX.Element {
  const mergedOverrides = useMemo(
    () =>
      mergeOverridesDeep(getRadioGroupOverrides({ rowGap, columnGap, dataTestId, ref }), overrides),
    [rowGap, columnGap, dataTestId, ref, overrides],
  );

  return (
    <div className={className}>
      <BaseWebRadioGroup
        overrides={mergedOverrides}
        align={align}
        {...rest}
      >
        {options !== undefined
          ? options.map((option) => (
              <Radio
                data-testid={`${dataTestId}__radio-${option[valueKey]}`}
                key={option[valueKey]}
                value={option[valueKey]}
                overrides={RadioOverrides}
              >
                <div data-testid={`${dataTestId}-radio-item-${option[valueKey]}`}>
                  {option[labelKey]}
                </div>
              </Radio>
            ))
          : children}
      </BaseWebRadioGroup>
    </div>
  );
});
