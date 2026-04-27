import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';

import { FormProvider, useForm } from '@components/forms';

import { NewDocumentVersionDrawer } from '../components/contract-negotiation/new-document-version-drawer';
import {
  FORM_DEFAULT_VALUES,
  validationSchema,
} from '../components/contract-negotiation/new-document-version-drawer/new-document-version-drawer.logic';

import type { NewDocumentVersionFormFields } from '../components/contract-negotiation/new-document-version-drawer/new-document-version-drawer.logic';
import type { FileType, FileUploaderProps } from '@components/file-uploader';

interface NewDocumentVersionDrawerContainerProps {
  'data-testid': string;
  isOpen: boolean;
  isLoading: boolean;
  onClose(): void;
  onSubmit(values: NewDocumentVersionFormFields): void;
}

/**
 * Container that manages the state and behavior of a form for uploading a new document version.
 */
export const NewDocumentVersionDrawerContainer = ({
  'data-testid': dataTestId,
  isOpen,
  isLoading,
  onClose,
  onSubmit,
}: NewDocumentVersionDrawerContainerProps): ReactElement => {
  const [selectedFiles, setSelectedFiles] = useState<FileType[]>([]);

  const formMethods = useForm<NewDocumentVersionFormFields>({
    mode: 'onSubmit',
    schema: validationSchema(),
    defaultValues: FORM_DEFAULT_VALUES,
  });

  const { reset, setValue } = formMethods;

  /**
   * Effect that executes after the submit callback is successful and prepares
   * the initial form state as dirty in order to disable the submit button
   */
  useEffect(() => {
    if (!isOpen) {
      reset();
      setSelectedFiles([]);
      setValue('document', null, { shouldValidate: true });
    }
  }, [isOpen, reset, setValue]);

  /** Handler function that triggers the onClose method and clears the form state */
  const handleOnClose = (): void => {
    setSelectedFiles([]);
    reset();
    setValue('document', null, { shouldValidate: true });
    onClose();
  };

  /**
   * Function is responsible for handling the selection of a file and setting its size as well as
   * updating a value associated with a form field.
   */
  const handleSelectFile: FileUploaderProps['onDrop'] = (accepted: File[]) => {
    const [file] = accepted;

    setSelectedFiles([{ size: file.size }]);
    setValue('document', file, { shouldValidate: true });
  };

  return (
    <FormProvider {...formMethods}>
      <NewDocumentVersionDrawer
        data-testid={dataTestId}
        selectedFiles={selectedFiles}
        isOpen={isOpen}
        isLoading={isLoading}
        handleSelectFile={handleSelectFile}
        onClose={handleOnClose}
        onSubmit={onSubmit}
      />
    </FormProvider>
  );
};
