import { useEffect } from 'react';
import type { ReactElement } from 'react';

import { FormProvider, useForm } from '@components/forms';

import { FinalizeDrawer } from '../components/contract-negotiation/finalize-drawer';
import { useFinalizeNegotiationFieldArray } from '../components/contract-negotiation/finalize-drawer/finalize-drawer.logic';
import { FINALIZE_FORM_DEFAULT_VALUES } from '../constants';
import { useContractNegotiationContext } from '../logic/contexts';

import type { FinalizeNegotiationFormFields } from '../interfaces';

type FinalizeDrawerContainerProps = {
  'data-testid': string;
  isOpen: boolean;
  onClose(): void;
};

/**
 * Container that manages the state and behavior of a form
 * that finalizes the contract negotiation process
 */
export const FinalizeDrawerContainer = ({
  'data-testid': dataTestId,
  isOpen,
  onClose,
}: FinalizeDrawerContainerProps): ReactElement => {
  const formMethods = useForm<FinalizeNegotiationFormFields>({
    mode: 'onSubmit',
    defaultValues: FINALIZE_FORM_DEFAULT_VALUES,
  });

  const { control, setValue } = formMethods;

  const { activityDocuments, isLoading, onFinalize } = useContractNegotiationContext();
  const { fields } = useFinalizeNegotiationFieldArray(control);

  useEffect(() => {
    setValue(
      'documents',
      activityDocuments.map((document, index) => ({ ...document, index, value: false })),
    );
  }, [activityDocuments, setValue]);

  /** Handler function that triggers the finalization of a collaboration */
  const handleOnSubmit = (payload: FinalizeNegotiationFormFields): void => {
    onFinalize(payload, () => onClose());
  };

  return (
    <FormProvider {...formMethods}>
      <FinalizeDrawer
        data-testid={dataTestId}
        documents={fields}
        isOpen={isOpen}
        isLoading={isLoading}
        onClose={onClose}
        onSubmit={handleOnSubmit}
      />
    </FormProvider>
  );
};
