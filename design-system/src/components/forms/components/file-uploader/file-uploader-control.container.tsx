import { useFormContext } from '../../hooks';

import { FileUploaderControl } from './file-uploader-control';

import type { FileUploaderControlProps } from './file-uploader-control';

export type FileUploaderControlContainerProps = Omit<FileUploaderControlProps, 'control'>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const FileUploaderControlContainer = (
  props: FileUploaderControlContainerProps,
): JSX.Element => {
  const methods = useFormContext();

  return (
    <FileUploaderControl
      {...methods}
      {...props}
    />
  );
};
