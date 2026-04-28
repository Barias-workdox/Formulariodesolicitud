import { DesignSystemTheme } from '../../themes';
import { FileUploaderBasicOverrides } from 'baseui/file-uploader-basic';
/**
 * Utility function that returns an object of overrides for the `FileUploader` component.
 */
export declare const fileUploaderOverrides: (theme: DesignSystemTheme, { $hasError }: {
    $hasError?: boolean;
}) => FileUploaderBasicOverrides;
