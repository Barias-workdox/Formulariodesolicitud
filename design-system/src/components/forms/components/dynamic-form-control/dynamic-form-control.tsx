import { CheckboxControl, type CheckboxControlProps } from '../checkbox';
import { ColorPickerControl, type ColorPickerControlProps } from '../color-picker';
import { CountryControl, type CountryControlProps } from '../country';
import { DatePickerControl, type DatePickerControlProps } from '../datepicker';
import { FileUploaderControl, type FileUploaderControlProps } from '../file-uploader';
import { InputControl, type InputControlProps } from '../input';
import { NicInputControl, type NicInputControlProps } from '../nic-input';
import { PhoneControl, type PhoneControlProps } from '../phone';
import { RadioGroupControl, type RadioGroupControlProps } from '../radio-group';
import { SelectControl, type SelectControlProps } from '../select';
import {
  SelectWithPaginationControl,
  type SelectWithPaginationControlProps,
} from '../select-with-pagination';
import { SwitchControl, type SwitchControlProps } from '../switch';
import { TextareaControl, type TextareaControlProps } from '../textarea-control';

import type { ControlKindType } from '../../interfaces/form.interface';

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
export const DynamicFormControl = <K extends ControlKindType>({
  controlKind,
  ...props
}: DynamicFormControlProps<K>): JSX.Element => {
  switch (controlKind) {
    case 'input':
      return <InputControl {...(props as InputControlProps)} />;
    case 'datepicker':
      return <DatePickerControl {...(props as DatePickerControlProps)} />;
    case 'colorPicker':
      return <ColorPickerControl {...(props as ColorPickerControlProps)} />;
    case 'country':
      return <CountryControl {...(props as CountryControlProps)} />;
    case 'nicInput':
      return <NicInputControl {...(props as NicInputControlProps)} />;
    case 'radioGroup':
      return <RadioGroupControl {...(props as RadioGroupControlProps)} />;
    case 'select':
      return <SelectControl {...(props as SelectControlProps)} />;
    case 'selectWithPagination':
      return (
        <SelectWithPaginationControl {...(props as unknown as SelectWithPaginationControlProps)} />
      );
    case 'switch':
      return <SwitchControl {...(props as SwitchControlProps)} />;
    case 'textareaControl':
      return <TextareaControl {...(props as TextareaControlProps)} />;
    case 'phone':
      return <PhoneControl {...(props as PhoneControlProps)} />;
    case 'checkbox':
      return <CheckboxControl {...(props as CheckboxControlProps)} />;
    case 'fileUploader':
      return <FileUploaderControl {...(props as unknown as FileUploaderControlProps)} />;
  }
};
