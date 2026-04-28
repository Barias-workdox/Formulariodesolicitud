import { ReactElement } from 'react';
import { FileUploaderProps } from '../../../file-uploader';
import { FormControlProps } from '../../../form-control';
import { ControllerProps } from 'react-hook-form';
export type FileUploaderControlProps = Omit<FormControlProps, 'children'> & Omit<FileUploaderProps, 'inputRef'> & Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
};
/**
 * Component that implement a form control file uploader wrapped on controller provided by react hook form
 */
export declare const FileUploaderControl: ({ "data-testid": dataTestId, name, label, disabled, caption, defaultValue, control, formControlOverrides, noExternalMargins, infoTooltip, ...rest }: FileUploaderControlProps) => ReactElement;
