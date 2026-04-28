import { ReactElement } from 'react';
export type FileUploaderMessageProps = {
    title: string;
    subtitle?: string;
};
/** Custom Message component for a `FileUploader` component */
export declare function FileUploaderMessage({ title, subtitle }: FileUploaderMessageProps): ReactElement;
