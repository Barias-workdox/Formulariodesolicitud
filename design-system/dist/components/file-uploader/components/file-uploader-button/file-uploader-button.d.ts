import { ReactElement } from 'react';
import { FileType } from '../../interfaces';
import { ButtonProps } from '../../../button/button.interfaces';
export type FileUploaderButtonProps = Pick<ButtonProps, 'disabled' | 'onClick'> & {
    'data-testid': string;
    text: string;
    selectedFiles: FileType[];
};
/** Custom Button component for a `FileUploader` component */
export declare function FileUploaderButton({ 'data-testid': dataTestId, disabled, text, selectedFiles, onClick, }: FileUploaderButtonProps): ReactElement;
