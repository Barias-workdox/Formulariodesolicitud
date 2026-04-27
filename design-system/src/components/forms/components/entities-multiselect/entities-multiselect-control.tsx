import type { ReactElement } from 'react';

import { Controller } from 'react-hook-form';

import { EntitiesMultiSelect } from '@components/entities-multiselect';

import { FormControl } from '../../../form-control';

import type { FormControlProps } from '../../../form-control';
import type { EntitiesMultiSelectProps } from '@components/entities-multiselect/entities-multiselect.types';
import type { ControllerProps } from 'react-hook-form';

export type EntitiesMultiselectControlProps = Pick<
  FormControlProps,
  'label' | 'caption' | 'disabled' | 'noExternalMargins' | 'infoTooltip'
> &
  Omit<EntitiesMultiSelectProps, 'containerRef'> &
  Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
  };

/**
 * Component that implement a form control user multi select wrapped on controller provided by react hook form
 */
export const EntitiesMultiSelectControl = ({
  name,
  label,
  disabled,
  options,
  values,
  infoTooltip,
  placeholder,
  leading,
  isLoading,
  searchPlaceholder,
  peopleTotalElements,
  companyTotalElements,
  onChange: parentOnChange,
  onSearch,
  onLoadMore,
  noExternalMargins,
  caption,
  control,
  formControlOverrides,
  ...rest
}: EntitiesMultiselectControlProps): ReactElement => (
  <Controller
    name={name}
    control={control}
    defaultValue={values}
    render={({
      field: { value, onChange, ref, ...field },
      fieldState: { error },
    }): ReactElement => (
      <FormControl
        label={label}
        disabled={disabled}
        caption={caption}
        error={error?.message}
        htmlFor={name}
        overrides={formControlOverrides}
        noExternalMargins={noExternalMargins}
        infoTooltip={infoTooltip}
      >
        <EntitiesMultiSelect
          {...field}
          options={options}
          values={value ?? []}
          placeholder={placeholder}
          searchPlaceholder={searchPlaceholder}
          isLoading={isLoading}
          disabled={disabled}
          peopleTotalElements={peopleTotalElements}
          companyTotalElements={companyTotalElements}
          onChange={(value) => {
            onChange(value);

            parentOnChange?.(value);
          }}
          onSearch={onSearch}
          onLoadMore={onLoadMore}
          leading={leading}
          containerRef={ref}
          {...rest}
        />
      </FormControl>
    )}
  />
);
