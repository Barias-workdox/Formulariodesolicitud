import { LINK_STRICTNESS_MODES } from '../constants/link-validation.constants';
/** All supported control types for the dynamic form control */
export type ControlKindType = 'input' | 'datepicker' | 'colorPicker' | 'country' | 'nicInput' | 'radioGroup' | 'select' | 'selectWithPagination' | 'switch' | 'textareaControl' | 'phone' | 'checkbox' | 'fileUploader';
export type LinkStrictnessModeType = keyof typeof LINK_STRICTNESS_MODES;
