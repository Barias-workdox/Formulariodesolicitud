import { userEvent } from '@testing-library/user-event';

import { FormProviderWrapper } from '@test/form-provider-utils';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { CancelModal } from '../cancel-modal';

import type { CancelModalProps } from '../cancel-modal';
import type { CancelCollaborationFormFields } from '@components/collaboration/interfaces';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const dataTestId = 'test';
const mockOnCancel = testHelpers.fn();
const mockOnSubmit = testHelpers.fn();

const defaultProps: CancelModalProps = {
  'data-testid': dataTestId,
  isLoading: false,
  isOpen: true,
  onClose: mockOnCancel,
  onSubmit: mockOnSubmit,
};

const defaultFormValues: CancelCollaborationFormFields = {
  message: '',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (
  props?: Partial<CancelModalProps>,
  formValues?: Partial<CancelCollaborationFormFields>,
): RenderType => {
  return render(
    <FormProviderWrapper defaultValues={{ ...defaultFormValues, ...formValues }}>
      <CancelModal
        {...defaultProps}
        {...props}
      />
      ,
    </FormProviderWrapper>,
  );
};

describe('CancelModal - tests', () => {
  it('should render the component successfully', async () => {
    renderComponent();

    const [header, submitButton] = screen.getAllByText(
      t('contractNegotiationCollaboration.cancel'),
    );

    await userEvent.type(
      screen.getByPlaceholderText(
        t('contractNegotiationCollaboration.cancelModal.cancelationReasonPlaceholder'),
      ),
      'test',
    );

    expect(
      screen.getByText(t('contractNegotiationCollaboration.cancelModal.alert')),
    ).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.cancelModal.alert')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.cancelModal.stepTitle')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.cancelModal.step1')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.cancelModal.step2')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.cancelModal.step3')),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(
        t('contractNegotiationCollaboration.cancelModal.cancelationReasonPlaceholder'),
      ),
    ).toBeInTheDocument();
  });

  it('should not render if modal is closed', () => {
    renderComponent({ isOpen: false });

    expect(
      screen.queryByText(t('contractNegotiationCollaboration.cancelModal.alert')),
    ).not.toBeInTheDocument();
  });

  it('should call the submit function', async () => {
    renderComponent();

    await userEvent.type(
      screen.getByPlaceholderText(
        t('contractNegotiationCollaboration.cancelModal.cancelationReasonPlaceholder'),
      ),
      'test',
    );

    const [, submitButton] = screen.getAllByText(t('contractNegotiationCollaboration.cancel'));

    // Submit event
    await userEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('should call the cancel function', async () => {
    renderComponent();

    // Submit event
    await userEvent.click(screen.getByText(t('general.cancel')));

    expect(mockOnCancel).toHaveBeenCalled();
  });
});
