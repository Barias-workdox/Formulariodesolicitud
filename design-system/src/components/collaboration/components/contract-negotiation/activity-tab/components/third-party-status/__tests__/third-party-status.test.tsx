import { userEvent } from '@testing-library/user-event';

import { formatDateAsText } from '@components/utils/strings/date.utils';
import {
  TEST_DEFAULT_LOCALE,
  render,
  renderUseTranslation,
  screen,
  waitFor,
} from '@test/test-utils';

import { activityDocumentsMock1 } from '../../../../../../__mocks__/collaboration.mock';
import { ThirdPartyStatus } from '../third-party-status';

import type { ThirdPartyStatusProps } from '../third-party-status';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const [
  {
    thirdParties: [thirdPartyMock],
  },
] = activityDocumentsMock1;

const defaultProps: ThirdPartyStatusProps = {
  thirdParty: thirdPartyMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ThirdPartyStatusProps>): RenderType => {
  return render(
    <ThirdPartyStatus
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ThirdPartyStatus - tests', () => {
  it('should render the component with status `approved` successfully', () => {
    renderComponent({ thirdParty: { ...thirdPartyMock, status: 'approved' } });

    const { approvedAt } = thirdPartyMock;

    expect(
      screen.getByText(
        t('contractNegotiationCollaboration.activityTab.thirdParty.status.approved', {
          date: formatDateAsText(approvedAt, TEST_DEFAULT_LOCALE, true),
        }),
      ),
    ).toBeInTheDocument();
  });

  it('should render the component with status `pending` successfully', () => {
    renderComponent({ thirdParty: { ...thirdPartyMock, status: 'pending' } });

    const { approvedAt } = thirdPartyMock;

    expect(
      screen.getByText(
        t('contractNegotiationCollaboration.activityTab.thirdParty.status.pending', {
          date: formatDateAsText(approvedAt, TEST_DEFAULT_LOCALE, true),
        }),
      ),
    ).toBeInTheDocument();
  });

  it('should display the tooltips correctly', async () => {
    renderComponent();

    const { name } = thirdPartyMock;

    await userEvent.hover(screen.getByText(name));

    await waitFor(() => {
      expect(screen.getAllByText(name).length).toEqual(2);
    });
  });
});
