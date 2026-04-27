import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { LeftTabs } from './left-tabs';

import type { LeftTabsProps } from './left-tabs';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'left-tabs';
const documentsTabDataTestId = `${baseDataTestId}__documents-tab--tab`;
const documentsCloseIconDataTestId = `${baseDataTestId}__documents-tab--close`;

const mockOnClose = testHelpers.fn();
const mockOnOpen = testHelpers.fn();

const defaultProps: LeftTabsProps = {
  'data-testid': baseDataTestId,
  showPanels: true,
  showTabList: true,
  enabledTabs: ['documents'],
  onClose: mockOnClose,
  onOpen: mockOnOpen,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<LeftTabsProps>): RenderType => {
  return render(
    <LeftTabs
      {...defaultProps}
      {...props}
    />,
  );
};

describe('LeftTabs - tests', () => {
  it('should render the component correctly when the tabs are open', () => {
    renderComponent();

    expect(screen.getByTestId(documentsTabDataTestId)).toBeInTheDocument();
    expect(screen.getByTestId(documentsCloseIconDataTestId)).toBeInTheDocument();
  });

  it('should render the component correctly when the tabs are close', () => {
    renderComponent({ showPanels: false });

    expect(screen.getByTestId(documentsTabDataTestId)).toBeInTheDocument();
    expect(screen.queryByTestId(documentsCloseIconDataTestId)).not.toBeInTheDocument();
  });

  it('should execute onClose when the close button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.queryByTestId(documentsCloseIconDataTestId));

    expect(mockOnClose).toBeCalled();
  });

  it('should execute onOpen when the tab button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.queryByTestId(documentsTabDataTestId));

    expect(mockOnOpen).toBeCalled();
  });
});
