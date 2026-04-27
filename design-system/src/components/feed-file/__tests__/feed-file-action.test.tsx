import { userEvent } from '@testing-library/user-event';

import { render, testHelpers } from '@test/test-utils';

import { FeedFileAction } from '../components';

import type { FeedFileActionProps } from '../feed-file.interfaces';
import type { RenderType } from '@test/test-utils';

const mockDataTestId = 'data-testid';
const mockOnClick = testHelpers.fn();

const defaultProps: FeedFileActionProps = {
  'data-testid': mockDataTestId,
  action: 'delete',
  onClick: mockOnClick,
};

/** Utility to render component quickly with default props */
const renderComponent = (props?: Partial<FeedFileActionProps>): RenderType => {
  return render(
    <FeedFileAction
      {...defaultProps}
      {...props}
    />,
  );
};

describe('FeedFileAction', () => {
  it('should render correctly and trigger an action on click', async () => {
    const { getByTestId } = renderComponent();

    const deleteButton = getByTestId(`${mockDataTestId}`);

    await userEvent.click(deleteButton);

    expect(mockOnClick.mock.calls.length).toBe(1);
  });
});
