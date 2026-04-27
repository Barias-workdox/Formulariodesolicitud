import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { ContractNegotiationProviderMock } from '../../../__mocks__/contract-negotiation-provider.mock';

import { RightTabs } from './right-tabs';

import type { RightTabsProps } from './right-tabs';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'right-tabs';
const activityTabDataTestId = `${baseDataTestId}__activity-tab--tab`;
const historyTabDataTestId = `${baseDataTestId}__history-tab--tab`;
const commentsTabDataTestId = `${baseDataTestId}__comments-tab--tab`;
const activityCloseIconDataTestId = `${baseDataTestId}__activity-tab--close`;

const mockOnClose = testHelpers.fn();
const mockOnOpen = testHelpers.fn();

const defaultProps: RightTabsProps = {
  'data-testid': baseDataTestId,
  enabledTabs: ['activity', 'comments', 'history'],
  showPanels: true,
  onClose: mockOnClose,
  onOpen: mockOnOpen,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<RightTabsProps>): RenderType => {
  return render(
    <ContractNegotiationProviderMock>
      <RightTabs
        {...defaultProps}
        {...props}
      />
    </ContractNegotiationProviderMock>,
  );
};

describe('RightTabs - tests', () => {
  it('should render the component correctly when the tabs are open', () => {
    renderComponent();

    expect(screen.getByTestId(activityTabDataTestId)).toBeInTheDocument();
    expect(screen.getByTestId(historyTabDataTestId)).toBeInTheDocument();
    expect(screen.getByTestId(commentsTabDataTestId)).toBeInTheDocument();
    expect(screen.getByTestId(activityCloseIconDataTestId)).toBeInTheDocument();
  });

  it('should render the component correctly when the tabs are close', () => {
    renderComponent({ showPanels: false });

    expect(screen.getByTestId(activityTabDataTestId)).toBeInTheDocument();
    expect(screen.getByTestId(historyTabDataTestId)).toBeInTheDocument();
    expect(screen.getByTestId(commentsTabDataTestId)).toBeInTheDocument();
    expect(screen.queryByTestId(activityCloseIconDataTestId)).not.toBeInTheDocument();
  });

  it('should execute onClose when the close button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.queryByTestId(activityCloseIconDataTestId));

    expect(mockOnClose).toBeCalled();
  });

  it('should execute onOpen when the tab button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.queryByTestId(activityTabDataTestId));

    expect(mockOnOpen).toBeCalled();
  });
});
