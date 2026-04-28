import { CheckboxControlProps } from '../checkbox';
import { ColorPickerControlProps } from '../color-picker';
import { CountryControlProps } from '../country';
import { DatePickerControlProps } from '../datepicker';
import { FileUploaderControlProps } from '../file-uploader';
import { InputControlProps } from '../input';
import { NicInputControlProps } from '../nic-input';
import { PhoneControlProps } from '../phone';
import { RadioGroupControlProps } from '../radio-group';
import { SelectControlProps } from '../select';
import { SelectWithPaginationControlProps } from '../select-with-pagination';
import { SwitchControlProps } from '../switch';
import { TextareaControlProps } from '../textarea-control';
import { ControlKindType } from '../../interfaces/form.interface';
type DynamicFormControlPropsMap = {
    input: InputControlProps;
    datepicker: DatePickerControlProps;
    colorPicker: ColorPickerControlProps;
    country: CountryControlProps;
    nicInput: NicInputControlProps;
    radioGroup: RadioGroupControlProps;
    select: SelectControlProps;
    selectWithPagination: SelectWithPaginationControlProps;
    switch: SwitchControlProps;
    textareaControl: TextareaControlProps;
    phone: PhoneControlProps;
    checkbox: CheckboxControlProps;
    fileUploader: FileUploaderControlProps;
};
export type DynamicFormControlProps<K extends ControlKindType> = {
    controlKind: K;
} & DynamicFormControlPropsMap[K];
/**
 * Dynamic form control with a routing to each existing control kind. Useful in
 * dynamic forms
 */
export declare const DynamicFormControl: <K extends ControlKindType>({ controlKind, ...props }: DynamicFormControlProps<K>) => JSX.Element;
export {};
