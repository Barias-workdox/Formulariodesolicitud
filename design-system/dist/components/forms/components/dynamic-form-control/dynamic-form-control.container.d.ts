import { CheckboxControlContainerProps } from '../checkbox';
import { ColorPickerControlContainerProps } from '../color-picker';
import { CountryControlContainerProps } from '../country';
import { DatePickerControlContainerProps } from '../datepicker';
import { FileUploaderControlContainerProps } from '../file-uploader';
import { InputControlContainerProps } from '../input';
import { NicInputControlContainerProps } from '../nic-input';
import { PhoneControlContainerProps } from '../phone';
import { RadioGroupControlContainerProps } from '../radio-group';
import { SelectControlContainerProps } from '../select';
import { SelectWithPaginationControlContainerProps } from '../select-with-pagination';
import { SwitchControlContainerProps } from '../switch';
import { TextareaControlContainerProps } from '../textarea-control';
import { ControlKindType } from '../../interfaces/form.interface';
type DynamicFormControlContainerPropsMap = {
    input: InputControlContainerProps;
    datepicker: DatePickerControlContainerProps;
    colorPicker: ColorPickerControlContainerProps;
    country: CountryControlContainerProps;
    nicInput: NicInputControlContainerProps;
    radioGroup: RadioGroupControlContainerProps;
    select: SelectControlContainerProps;
    selectWithPagination: SelectWithPaginationControlContainerProps;
    switch: SwitchControlContainerProps;
    textareaControl: TextareaControlContainerProps;
    phone: PhoneControlContainerProps;
    checkbox: CheckboxControlContainerProps;
    fileUploader: FileUploaderControlContainerProps;
};
export type DynamicFormControlContainerProps<K extends ControlKindType> = {
    controlKind: K;
} & DynamicFormControlContainerPropsMap[K];
/**
 * Dynamic form control container with a routing to each existing control kind. Useful in
 * dynamic forms
 */
export declare const DynamicFormControlContainer: <K extends ControlKindType>({ controlKind, ...props }: DynamicFormControlContainerProps<K>) => JSX.Element;
export {};
