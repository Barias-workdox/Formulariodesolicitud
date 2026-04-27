import { CheckboxControlContainer, type CheckboxControlContainerProps } from '../checkbox';
import {
  ColorPickerControlContainer,
  type ColorPickerControlContainerProps,
} from '../color-picker';
import { CountryControlContainer, type CountryControlContainerProps } from '../country';
import { DatePickerControlContainer, type DatePickerControlContainerProps } from '../datepicker';
import {
  FileUploaderControlContainer,
  type FileUploaderControlContainerProps,
} from '../file-uploader';
import { InputControlContainer, type InputControlContainerProps } from '../input';
import { NicInputControlContainer, type NicInputControlContainerProps } from '../nic-input';
import { PhoneControlContainer, type PhoneControlContainerProps } from '../phone';
import { RadioGroupControlContainer, type RadioGroupControlContainerProps } from '../radio-group';
import { SelectControlContainer, type SelectControlContainerProps } from '../select';
import {
  SelectWithPaginationControlContainer,
  type SelectWithPaginationControlContainerProps,
} from '../select-with-pagination';
import { SwitchControlContainer, type SwitchControlContainerProps } from '../switch';
import { TextareaControlContainer, type TextareaControlContainerProps } from '../textarea-control';

import type { ControlKindType } from '../../interfaces/form.interface';

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
export const DynamicFormControlContainer = <K extends ControlKindType>({
  controlKind,
  ...props
}: DynamicFormControlContainerProps<K>): JSX.Element => {
  switch (controlKind) {
    case 'input':
      return <InputControlContainer {...(props as InputControlContainerProps)} />;
    case 'datepicker':
      return <DatePickerControlContainer {...(props as DatePickerControlContainerProps)} />;
    case 'colorPicker':
      return <ColorPickerControlContainer {...(props as ColorPickerControlContainerProps)} />;
    case 'country':
      return <CountryControlContainer {...(props as CountryControlContainerProps)} />;
    case 'nicInput':
      return <NicInputControlContainer {...(props as NicInputControlContainerProps)} />;
    case 'radioGroup':
      return <RadioGroupControlContainer {...(props as RadioGroupControlContainerProps)} />;
    case 'select':
      return <SelectControlContainer {...(props as SelectControlContainerProps)} />;
    case 'selectWithPagination':
      return (
        <SelectWithPaginationControlContainer
          {...(props as unknown as SelectWithPaginationControlContainerProps)}
        />
      );
    case 'switch':
      return <SwitchControlContainer {...(props as SwitchControlContainerProps)} />;
    case 'textareaControl':
      return <TextareaControlContainer {...(props as TextareaControlContainerProps)} />;
    case 'phone':
      return <PhoneControlContainer {...(props as PhoneControlContainerProps)} />;
    case 'checkbox':
      return <CheckboxControlContainer {...(props as CheckboxControlContainerProps)} />;
    case 'fileUploader':
      return (
        <FileUploaderControlContainer
          {...(props as unknown as FileUploaderControlContainerProps)}
        />
      );
  }
};
