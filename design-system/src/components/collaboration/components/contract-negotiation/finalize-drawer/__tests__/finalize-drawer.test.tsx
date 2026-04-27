import { userEvent } from '@testing-library/user-event';

import { FormProviderWrapper } from '@test/form-provider-utils';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { activityDocumentsMock1 } from '../../../../__mocks__/collaboration.mock';
import { FinalizeDrawer } from '../finalize-drawer';

import type {
  CollaborationActivityDocumentsForm,
  FinalizeNegotiationFormFields,
} from '../../../../interfaces';
import type { FinalizeDrawerProps } from '../finalize-drawer';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const dataTestId = 'test';
const [document1, document2] = activityDocumentsMock1;

const mockDocuments: CollaborationActivityDocumentsForm[] = [
  {
    index: 0,
    value: false,
    ...document1,
  },
  {
    index: 0,
    value: false,
    ...document2,
  },
];

const mockOnClose = testHelpers.fn();
const mockOnSubmit = testHelpers.fn();

const defaultProps: FinalizeDrawerProps = {
  'data-testid': dataTestId,
  documents: mockDocuments,
  isOpen: true,
  isLoading: false,
  onClose: mockOnClose,
  onSubmit: mockOnSubmit,
};

const defaultFormValues: FinalizeNegotiationFormFields = {
  documents: mockDocuments,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (
  props?: Partial<FinalizeDrawerProps>,
  formValues?: Partial<FinalizeNegotiationFormFields>,
): RenderType => {
  return render(
    <FormProviderWrapper defaultValues={{ ...defaultFormValues, ...formValues }}>
      <FinalizeDrawer
        {...defaultProps}
        {...props}
      />
      ,
    </FormProviderWrapper>,
  );
};

describe('FinalizeDrawer - tests', () => {
  it('should render the component successfully', () => {
    renderComponent();

    expect(
      screen.getByText(t('contractNegotiationCollaboration.endNegotiation')),
    ).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}__form`)).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.finalizeWarning')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.finalizeInfo')),
    ).toBeInTheDocument();
    expect(screen.getByText(t('general.cancel'))).toBeInTheDocument();
    expect(screen.getByText(t('contractNegotiationCollaboration.finalize'))).toBeInTheDocument();
  });

  it('should call the `onClose` function', async () => {
    renderComponent();

    const closeButton = screen.getByTestId(`${dataTestId}-close-drawer-button`);

    await userEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalled();

    expect(
      screen.getByText(t('contractNegotiationCollaboration.endNegotiation')),
    ).toBeInTheDocument();
  });

  it('should call the `onSubmit` function', async () => {
    renderComponent();

    const submitButton = screen.getByText(t('contractNegotiationCollaboration.finalize'));

    await userEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('render the drawer as closed', () => {
    renderComponent({ isOpen: false });

    expect(
      screen.queryByText(t('contractNegotiationCollaboration.endNegotiation')),
    ).not.toBeInTheDocument();
  });
});
