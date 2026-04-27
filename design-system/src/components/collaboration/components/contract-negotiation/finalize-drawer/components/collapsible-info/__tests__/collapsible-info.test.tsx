import { userEvent } from '@testing-library/user-event';

import { formatDateAsText } from '@components/utils/strings/date.utils';
import { TEST_DEFAULT_LOCALE, render, renderUseTranslation, screen } from '@test/test-utils';

import { activityDocumentsMock1 } from '../../../../../../__mocks__/collaboration.mock';
import { CollapsibleInfo } from '../collapsible-info';

import type {
  CollaborationActivityDocumentsForm,
  CollaborationResourceStatusInfo,
} from '../../../../../../interfaces';
import type { CollapsibleInfoProps } from '../collapsible-info';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const [document] = activityDocumentsMock1;
const {
  updatedAt,
  thirdParties,
  officeDocumentVersion: {
    user: { firstName, lastName },
  },
} = document;
const [{ name: thirdPartyFullName }] = thirdParties;
const mockDocument: CollaborationActivityDocumentsForm = {
  index: 0,
  value: false,
  ...document,
};
const status: CollaborationResourceStatusInfo = 'approved';
const dateThirdPartyFullName = `${firstName} ${lastName}`;

const defaultProps: CollapsibleInfoProps = {
  document: mockDocument,
  status,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CollapsibleInfoProps>): RenderType => {
  return render(
    <CollapsibleInfo
      {...defaultProps}
      {...props}
    />,
  );
};

describe('CollapsibleInfo - tests', () => {
  it('should render the collapsible component not expanded', () => {
    renderComponent();

    expect(screen.getByText(t('contractNegotiationCollaboration.showSummary'))).toBeInTheDocument();
    expect(screen.queryByText(t('contractNegotiationCollaboration.state'))).not.toBeInTheDocument();
  });

  it('should render the component successfully', async () => {
    renderComponent();

    const toggleButton = screen.getByLabelText(
      `${t('contractNegotiationCollaboration.showSummary')} toggle button`,
    );

    await userEvent.click(toggleButton);

    expect(screen.getByText(t('contractNegotiationCollaboration.state'))).toBeInTheDocument();
    expect(screen.getByText(thirdPartyFullName)).toBeInTheDocument();
    expect(
      screen.getByText(
        t('contractNegotiationCollaboration.lastUpdatedDate', {
          date: formatDateAsText(updatedAt, TEST_DEFAULT_LOCALE, true),
          user: dateThirdPartyFullName,
        }),
      ),
    ).toBeInTheDocument();
  });
});
