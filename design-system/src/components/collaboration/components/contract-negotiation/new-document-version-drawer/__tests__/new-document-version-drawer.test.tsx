import { userEvent } from '@testing-library/user-event';

import { FormProviderWrapper } from '@test/form-provider-utils';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { NewDocumentVersionDrawer } from '../new-document-version-drawer';
import { validationSchema } from '../new-document-version-drawer.logic';

import type { NewDocumentVersionDrawerProps } from '../new-document-version-drawer';
import type { NewDocumentVersionFormFields } from '../new-document-version-drawer.logic';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const dataTestId = 'test';
const mockOnClose = testHelpers.fn();
const mockOnSubmit = testHelpers.fn();

const defaultProps: NewDocumentVersionDrawerProps = {
  'data-testid': dataTestId,
  selectedFiles: [],
  isOpen: true,
  isLoading: false,
  handleSelectFile: testHelpers.fn(),
  onClose: mockOnClose,
  onSubmit: mockOnSubmit,
};

const defaultFormValues: NewDocumentVersionFormFields = {
  comment: '',
  document: new File([''], 'test.docx', {
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  }),
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (
  props?: Partial<NewDocumentVersionDrawerProps>,
  formValues?: Partial<NewDocumentVersionFormFields>,
): RenderType => {
  return render(
    <FormProviderWrapper
      defaultValues={{ ...defaultFormValues, ...formValues }}
      schema={validationSchema()}
    >
      <NewDocumentVersionDrawer
        {...defaultProps}
        {...props}
      />
      ,
    </FormProviderWrapper>,
  );
};

describe('NewDocumentVersionDrawer - tests', () => {
  it('should render the component successfully', () => {
    renderComponent();

    expect(screen.getByTestId(`${dataTestId}__form`)).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.loadNewVersionInfo')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.forms.comments.label')),
    ).toBeInTheDocument();
    expect(screen.getByText(t('general.cancel'))).toBeInTheDocument();
    expect(screen.getByText(t('contractNegotiationCollaboration.load'))).toBeInTheDocument();
  });

  it('calls onClose when the cancel button is clicked', async () => {
    renderComponent();

    const cancelButton = screen.getByText(t('general.cancel'));

    await userEvent.click(cancelButton);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it('calls onSubmit when the form is submitted', async () => {
    renderComponent();

    const submitButton = screen.getByText(t('contractNegotiationCollaboration.load'));

    await userEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('disables the upload button when there are errors', async () => {
    renderComponent({}, { document: null });

    const submitButton = screen.getByText(t('contractNegotiationCollaboration.load'));

    expect(submitButton).toBeEnabled();

    await userEvent.click(submitButton);

    expect(submitButton).toBeDisabled();
  });
});
