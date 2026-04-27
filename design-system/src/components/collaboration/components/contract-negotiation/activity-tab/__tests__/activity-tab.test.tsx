import { userEvent } from '@testing-library/user-event';

import { expect, render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import {
  activityDocumentsMock1,
  collaborationDetailsMock1,
} from '../../../../__mocks__/collaboration.mock';
import { ActivityTab } from '../activity-tab';

import type { ActivityTabProps } from '../activity-tab';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const dataTestId = 'test';
const [mockSelectedDocument] = activityDocumentsMock1;
const mockDocuments: ActivityTabProps['documents'] = activityDocumentsMock1;
const {
  thirdParties: [{ name: thirdPartyName }],
} = mockSelectedDocument;

const mockHandleOnChange = testHelpers.fn();
const mockOnClose = testHelpers.fn();

const defaultProps: ActivityTabProps = {
  'data-testid': dataTestId,
  collaborationDetails: collaborationDetailsMock1,
  documents: mockDocuments,
  handleOnChange: mockHandleOnChange,
  onClose: mockOnClose,
  selectedDocument: mockSelectedDocument,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ActivityTabProps>): RenderType => {
  return render(
    <ActivityTab
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ActivityTab - tests', () => {
  it('should render the component successfully', () => {
    renderComponent();

    expect(
      screen.getByText(t('contractNegotiationCollaboration.activityTab.title')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.activityTab.approvers')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.activityTab.filterByDocument')),
    ).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}--select`)).toBeInTheDocument();
    expect(screen.getByText(thirdPartyName)).toBeInTheDocument();
  });

  it('should call the handleOnChange method successfully', async () => {
    renderComponent();
    const [{ name: label1 }] = activityDocumentsMock1;

    await userEvent.click(screen.getByTestId(`${dataTestId}--select__input`));

    const [, option] = screen.getAllByText(label1);

    expect(option).toBeInTheDocument();

    await userEvent.click(option);

    expect(mockHandleOnChange).toHaveBeenCalled();
  });

  it('should call the onClose method successfully', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${dataTestId}--close`));

    expect(mockOnClose).toHaveBeenCalled();
  });
});
