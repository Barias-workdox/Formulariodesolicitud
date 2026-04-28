import { FieldValues } from '../../../forms';
export type CustomPromptForm = FieldValues & {
    title?: string;
    description: string;
};
