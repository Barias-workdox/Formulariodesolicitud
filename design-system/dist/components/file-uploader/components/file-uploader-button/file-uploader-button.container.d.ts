import { FileUploaderButtonProps } from './file-uploader-button';
import { SelectionType } from '../../interfaces';
export type FileUploaderButtonContainerProps = FileUploaderButtonProps & {
    directorySelection: boolean;
    onSelectionTypeChange(selectionType: SelectionType): void;
};
/**
 * Component wrapper that utilizes the `FileUploaderButton` component to provide a button
 * that allows the user to select files or folders.
 */
export declare const FileUploaderButtonContainer: ({ "data-testid": dataTestId, directorySelection, selectedFiles, onSelectionTypeChange, onClick, ...buttonProps }: FileUploaderButtonContainerProps) => JSX.Element;
