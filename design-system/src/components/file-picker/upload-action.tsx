import type { ReactNode } from 'react';
import { useRef } from 'react';

import { Block } from 'baseui/block';

import { isFiletypeAccepted } from '../utils/files/file.utils';

import type { WithTestId } from '@interfaces/common.interfaces';

type BaseUploadActionProps = WithTestId & {
  /**
   * Accepted formats, uses HTML input accept attribute
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
   */
  accept?: string[];
  /**
   * Element rendered inside the action. When clicked, the OS file browser opens up.
   */
  children: ReactNode;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * Called with accepted and rejected files. Similar to BaseWeb FileUploader
   * https://baseweb.design/components/file-uploader/
   */
  onSelect(acceptedFiles: File[], rejectedFiles: File[]): void;
};

type FolderUploader = BaseUploadActionProps & {
  /** To indicate whether a file or folder can be selected */
  selectionType?: 'folder';
  /** To indicate whether a group of elements can be selected */
  multiple?: never;
};

type FileUploader = BaseUploadActionProps & {
  /** To indicate whether a file or folder can be selected */
  selectionType?: 'file';
  /** To indicate whether a group of elements can be selected */
  multiple?: boolean;
};

export type UploadActionProps = FolderUploader | FileUploader;

/**
 * Input file with files filter. When the `children` of this component is clicked, the OS file
 * browser is opened to select a file(s)/folder
 *
 * @deprecated - use `FilePicker` in newer development
 */
export const UploadAction = ({
  dataTestId = 'file-picker__upload-action',
  onSelect,
  accept = undefined,
  selectionType = 'file',
  multiple = false,
  disabled = false,
  children,
}: UploadActionProps): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement>();

  const inputProps =
    selectionType === 'folder' ? { directory: 'true', webkitdirectory: 'true' } : {};

  /**
   * Filter the selected files and execute `onSelect` function with the accepted and rejected files.
   */
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const files = Array.from(event.target.files);

    const acceptedFiles = (
      accept ? files.filter((file) => isFiletypeAccepted(file, accept)) : files
    ) as Array<File>;

    const rejectedFiles = (
      accept ? files.filter((file) => !isFiletypeAccepted(file, accept)) : []
    ) as Array<File>;

    onSelect(acceptedFiles, rejectedFiles);
  }

  return (
    <>
      <input
        hidden
        data-testid={`${dataTestId}--input`}
        onChange={handleChange}
        type="file"
        ref={inputRef}
        multiple={multiple}
        accept={accept ? accept.join(', ') : undefined}
        disabled={disabled}
        placeholder="file-input-label"
        {...inputProps}
      />
      <Block
        data-testid={`${dataTestId}--button-container`}
        onClick={(): void => inputRef.current.click()}
      >
        {children}
      </Block>
    </>
  );
};
