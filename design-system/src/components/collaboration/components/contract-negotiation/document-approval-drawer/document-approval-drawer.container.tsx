import { useEffect } from 'react';
import type { ReactElement } from 'react';

import { FormProvider, useForm } from '../../../../forms';

import { DocumentApprovalDrawer } from './document-approval-drawer';
import { FORM_DEFAULT_VALUES, validationSchema } from './document-approval-form.logic';

import type { DocumentApprovalFormFields } from './document-approval-form.logic';
import type { IContractNegotiationContext } from '../../../interfaces';
import type { IUseDocumentLastModificationText } from '../hooks/use-document-last-modification-text.hook';

export type DocumentApprovalDrawerContainerProps = Pick<
  IContractNegotiationContext,
  'isLoading'
> & {
  'data-testid': string;
  document: IContractNegotiationContext['selectedDocument']['document'];
  documentLastModificationText: IUseDocumentLastModificationText['lastModificationText'];
  isOpen: boolean;
  onClose(): void;
  onSubmit(values: DocumentApprovalFormFields): void;
};

/**
 * Document Approval Drawer Container. Will have the form layer
 * wrapper only.
 */
export const DocumentApprovalDrawerContainer = ({
  'data-testid': dataTestId,
  document,
  documentLastModificationText,
  isLoading = false,
  isOpen,
  onClose,
  onSubmit,
}: DocumentApprovalDrawerContainerProps): ReactElement => {
  const formMethods = useForm<DocumentApprovalFormFields>({
    schema: validationSchema(),
    mode: 'onSubmit',
    defaultValues: FORM_DEFAULT_VALUES,
  });

  const { reset } = formMethods;

  useEffect(() => {
    reset();
  }, [isOpen, reset]);

  return (
    <FormProvider {...formMethods}>
      <DocumentApprovalDrawer
        data-testid={dataTestId}
        isOpen={isOpen}
        document={document}
        isLoading={isLoading}
        documentLastModificationText={documentLastModificationText}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    </FormProvider>
  );
};
