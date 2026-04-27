import type { ReactElement } from 'react';

import { FormProvider, useForm } from '@components/forms';

import { CancelModal } from '../components/contract-negotiation/cancel-modal';
import { useCancelCollaborationFormValidationSchema } from '../components/contract-negotiation/cancel-modal/cancel-modal.logic';
import { CANCEL_COLLABORATION_FORM_DEFAULT_VALUES } from '../constants';
import { useContractNegotiationContext } from '../logic/contexts';

import type { CancelCollaborationFormFields } from '../interfaces';

type CancelModalContainerProps = {
  'data-testid': string;
  isOpen: boolean;
  onClose(): void;
};

/** Container that manages the state and behavior of the form for canceling the collaboration */
export const CancelModalContainer = ({
  'data-testid': dataTestId,
  isOpen,
  onClose,
}: CancelModalContainerProps): ReactElement => {
  const validationSchema = useCancelCollaborationFormValidationSchema();

  const formMethods = useForm<CancelCollaborationFormFields>({
    mode: 'onSubmit',
    schema: validationSchema,
    defaultValues: CANCEL_COLLABORATION_FORM_DEFAULT_VALUES,
  });

  const { isLoading, onCancel } = useContractNegotiationContext();

  const { reset } = formMethods;

  /** Handler function that triggers the onClose method and clears the form state */
  const handleOnClose = (): void => {
    reset();
    onClose();
  };

  /** Handler function that triggers the cancelation of a collaboration */
  const handleOnSubmit = (values: CancelCollaborationFormFields): void => {
    onCancel(values, () => handleOnClose());
  };

  return (
    <FormProvider {...formMethods}>
      <CancelModal
        data-testid={dataTestId}
        isOpen={isOpen}
        isLoading={isLoading}
        onClose={handleOnClose}
        onSubmit={handleOnSubmit}
      />
    </FormProvider>
  );
};
