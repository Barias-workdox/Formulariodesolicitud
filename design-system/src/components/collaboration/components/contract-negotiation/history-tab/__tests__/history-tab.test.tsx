import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import {
  collaborationActivitiesMock1,
  collaborationResponsibleMock1,
} from '../../../../__mocks__/collaboration.mock';
import { HistoryTab } from '../history-tab';

import type { HistoryTabProps } from '../history-tab';
import type { RenderType } from '@test/test-utils';

const mockOnClose = testHelpers.fn();
const baseDataTestId = 'history-tab';

const defaultProps: HistoryTabProps = {
  'data-testid': baseDataTestId,
  activities: collaborationActivitiesMock1,
  responsible: collaborationResponsibleMock1,
  onClose: mockOnClose,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<HistoryTabProps>): RenderType => {
  return render(
    <HistoryTab
      {...defaultProps}
      {...props}
    />,
  );
};

describe('HistoryTab - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', () => {
    renderComponent();

    expect(
      screen.getByText(t('contractNegotiationCollaboration.historyTab.activityHistory')),
    ).toBeInTheDocument();
  });

  it('should render the activities successfully', () => {
    renderComponent();

    collaborationActivitiesMock1.forEach(({ id }) => {
      expect(screen.getByTestId(`activity-${id}-icon--wrapper`)).toBeInTheDocument();
    });
  });

  it('should execute onClose when the close button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${baseDataTestId}--close`));

    expect(mockOnClose).toHaveBeenCalled();
  });
});
