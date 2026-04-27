import type { DesignSystemTheme } from '../../themes';
import type { FileUploaderBasicOverrides } from 'baseui/file-uploader-basic';
import type { StyleObject } from 'styletron-standard';

/**
 * Utility function that returns an object of overrides for the `FileUploader` component.
 */
export const fileUploaderOverrides = (
  theme: DesignSystemTheme,
  { $hasError }: { $hasError?: boolean },
): FileUploaderBasicOverrides => ({
  FileDragAndDrop: {
    style: {
      border: `1.5px dashed ${$hasError ? theme.colors.negativeSubdued : theme.colors.neutralSubtle}`,
      backgroundColor: theme.colors.bgBase,
    } as StyleObject,
  },
});
