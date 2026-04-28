import { UseFormReturn } from '../../../forms/hooks';
import { TFunction } from '../../../utils';
import { NegativeFeedbackFormValues } from '../../interfaces/webdox-ai.interfaces';
import { Option } from 'baseui/select';
import * as yup from 'yup';
/** Get the Negative feedback form validation schema */
export declare const useChatBotNegativeFeedbackValidationSchema: () => yup.AnyObjectSchema;
export declare const defaultNegativeFeedbackFormValues: NegativeFeedbackFormValues;
/** Formik context wrapper used across the forward step form, typed with the values types */
export declare const useNegativeFeedbackFormContext: () => UseFormReturn<NegativeFeedbackFormValues, unknown, undefined>;
/** Get all options for the radio form element `option` */
export declare const getFormOptions: (t: TFunction) => Option[];
