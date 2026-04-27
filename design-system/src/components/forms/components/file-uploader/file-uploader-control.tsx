import type { ReactElement } from 'react';

import { Controller } from 'react-hook-form';

import { FileUploader, type FileUploaderProps } from '@components/file-uploader';
import { FormControl, type FormControlProps } from '@components/form-control';

import type { ControllerProps } from 'react-hook-form';

export type FileUploaderControlProps = Omit<FormControlProps, 'children'> &
  Omit<FileUploaderProps, 'inputRef'> &
  Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
  };

/**
 * Component that implement a form control file uploader wrapped on controller provided by react hook form
 */
export const FileUploaderControl = ({
  'data-testid': dataTestId,
  name,
  label,
  disabled,
  caption,
  defaultValue = [],
  control,
  formControlOverrides,
  noExternalMargins,
  infoTooltip,
  ...rest
}: FileUploaderControlProps): ReactElement => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({
      field: { onChange, ref, value, ...field },
      fieldState: { error },
    }): ReactElement => {
      return (
        <FormControl
          label={label}
          disabled={disabled}
          caption={caption}
          error={error?.message}
          htmlFor={name}
          labelWithHorizontalPadding
          overrides={formControlOverrides}
          noExternalMargins={noExternalMargins}
          infoTooltip={infoTooltip}
        >
          <FileUploader
            data-testid={dataTestId}
            inputRef={ref}
            onDrop={onChange}
            selectedFiles={value}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - it is correct
            value={value}
            {...field}
            {...rest}
          />
        </FormControl>
      );
    }}
  />
);
