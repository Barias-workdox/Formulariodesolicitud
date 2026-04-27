import { userEvent } from '@testing-library/user-event';

import { formatDateAsText } from '@components/utils/strings/date.utils';
import { FormProviderWrapper } from '@test/form-provider-utils';
import { TEST_DEFAULT_LOCALE, render, renderUseTranslation, screen } from '@test/test-utils';

import { activityDocumentsMock1 } from '../../../../../../__mocks__/collaboration.mock';
import { getDocumentVersion } from '../../../../utils/document-version';
import { CheckboxForm } from '../checkbox-form';

import type {
  CollaborationActivityDocumentsForm,
  CollaborationResourceStatusInfo,
  FinalizeNegotiationFormFields,
} from '../../../../../../interfaces';
import type { CheckboxFormProps } from '../checkbox-form';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const dataTestId = 'test';
const [document] = activityDocumentsMock1;
const status: CollaborationResourceStatusInfo = 'approved';
const {
  updatedAt,
  officeDocumentVersion: { versionNumber },
} = document;
const mockDocument: CollaborationActivityDocumentsForm = {
  index: 0,
  value: false,
  ...document,
};

const defaultProps: CheckboxFormProps = {
  'data-testid': dataTestId,
  document: mockDocument,
  status: 'approved',
};

const defaultFormValues: FinalizeNegotiationFormFields = {
  documents: [mockDocument],
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (
  props?: Partial<CheckboxFormProps>,
  formValues?: Partial<FinalizeNegotiationFormFields>,
): RenderType => {
  return render(
    <FormProviderWrapper defaultValues={{ ...defaultFormValues, ...formValues }}>
      <CheckboxForm
        {...defaultProps}
        {...props}
      />
      ,
    </FormProviderWrapper>,
  );
};

describe('CheckboxForm - tests', () => {
  it('renders the component with document details', () => {
    renderComponent();

    expect(screen.getByText(document.name)).toBeInTheDocument();
    expect(screen.getByText(getDocumentVersion(versionNumber))).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}__status-icon__${status}`)).toBeInTheDocument();
    expect(
      screen.getByText(
        t('contractNegotiationCollaboration.updatedOnDate', {
          date: formatDateAsText(updatedAt, TEST_DEFAULT_LOCALE, true),
        }),
      ),
    ).toBeInTheDocument();
  });

  it('handles the checkbox correctly', async () => {
    renderComponent();

    const checkElement = screen.getByRole('checkbox');

    expect(checkElement).not.toBeChecked();

    await userEvent.click(checkElement);

    expect(checkElement).toBeChecked();
  });
});
