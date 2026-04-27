import { forwardRef, useCallback } from 'react';
import type { ReactElement, Ref } from 'react';

import { FileUploaderBasic as BUIFileUploader } from 'baseui/file-uploader-basic';

import { useSyncedRef } from '@hooks/use-synced-ref.hook';

import { useTranslation } from '../utils';
import { DEFAULT_FILE_EXTENSIONS } from '../utils/constants/file.constants';
import { useCss } from '../utils/hooks/use-css';

import { FileUploaderButtonContainer, FileUploaderMessage } from './components';
import { fileUploaderOverrides } from './file-uploader.styles';
import { DEFAULT_FILE_EXTENSION_NAMES } from './utils/file-uploader.constants';

import type { FileUploaderButtonProps, FileUploaderMessageProps } from './components';
import type { FileUploaderButtonContainerProps } from './components/file-uploader-button';
import type { FileType, SelectionType } from './interfaces';
import type { FileUploaderBasicProps as BUIFileUploaderProps } from 'baseui/file-uploader-basic';

export type FileUploaderProps = Omit<
  BUIFileUploaderProps,
  'overrides' | 'accept' | 'multiple' | 'disabled'
> & {
  'data-testid': string;
  /** Used to get a ref to the hidden file input (useful for focusing on validation errors) */
  inputRef?: Ref<HTMLInputElement>;
  /** Accepted extensions (format: .docx, .pdf, etc...) */
  accept?: string[];
  /** Accepted extensions names used on the subtitle of the file uploader (format: PDF, Word, Excel) */
  acceptedExtensionsNames?: string;
  /** Disable the interaction with the component */
  disabled?: boolean;
  /** Defaults to `false`. When true, shows a selector to choose between files and folders */
  directorySelection?: boolean;
  /** Defaults to `true`. Indicates if the file selection is multiple */
  multiple?: boolean;
  /** Files that has been selected in the component */
  selectedFiles?: FileType[];
  title?: string;
  /** Error message to be displayed */
  error?: boolean;
};

/**
 * Component wrapper that utilizes the `FileUploader` component from the Base Web UI library
 * to provide file uploading functionality.
 */
export const FileUploader = forwardRef<unknown, FileUploaderProps>(function FileUploaderComponent(
  {
    'data-testid': dataTestId = 'file-uploader',
    accept = DEFAULT_FILE_EXTENSIONS,
    acceptedExtensionsNames = DEFAULT_FILE_EXTENSION_NAMES,
    disabled = false,
    directorySelection = false,
    multiple = true,
    selectedFiles = [],
    title,
    inputRef: externalInputRef,
    error,
    ...props
  },
  ref,
): ReactElement {
  const { theme } = useCss();
  const { t } = useTranslation();

  // Keeps a ref to the hidden file input. Useful to trigger the file pick
  // when the user selects the type of selection (folder or files)
  const inputRef = useSyncedRef<HTMLInputElement>({
    externalRef: externalInputRef,
  });

  /**
   * Handle selection type change from the button wrapper
   */
  const handleSelectionTypeChange = useCallback(
    (newSelectionType: SelectionType): void => {
      // Set attributes directly on the input before clicking
      if (inputRef.current) {
        if (directorySelection && newSelectionType === 'folder') {
          inputRef.current.setAttribute('webkitdirectory', 'true');
        } else {
          inputRef.current.removeAttribute('webkitdirectory');
        }

        inputRef.current.click();
      }
    },
    [directorySelection, inputRef],
  );

  /**
   * Opens the file input for files only
   */
  const handleButtonClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.removeAttribute('webkitdirectory');
      inputRef.current.click();
    }
  }, [inputRef]);

  return (
    <BUIFileUploader
      {...props}
      accept={accept}
      disabled={disabled}
      multiple={multiple}
      overrides={{
        ...fileUploaderOverrides(theme, { $hasError: !!error }),
        HiddenInput: {
          props: {
            'data-testid': `${dataTestId}--hidden-input`,
            ...(props.name && { name: props.name }),
            ref: inputRef,
          },
        },
        Root: {
          props: {
            ref,
          },
        },
        ContentMessage: {
          component: FileUploaderMessage,
          props: {
            title: title?.trim() || t('fileuploader.dragAndDropMessage'),
            subtitle: t('fileuploader.allowedExtensions', {
              allowedExtensions: acceptedExtensionsNames,
            }),
          } as FileUploaderMessageProps,
        },
        ButtonComponent: {
          component: (buttonProps: FileUploaderButtonContainerProps) => (
            <FileUploaderButtonContainer
              {...buttonProps}
              data-testid={dataTestId}
              directorySelection={directorySelection}
              selectedFiles={selectedFiles}
              onSelectionTypeChange={handleSelectionTypeChange}
              onClick={handleButtonClick}
            />
          ),
          props: {
            'data-testid': dataTestId,
            disabled,
            text: t('fileuploader.selectFromPC'),
            selectedFiles,
          } as FileUploaderButtonProps,
        },
      }}
    />
  );
});
