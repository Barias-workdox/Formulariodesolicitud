import { userEvent } from '@testing-library/user-event';

import { mockUseCollapsibleBoxContext } from '@components/collapsible-box/__mocks__/next/collapsible-box-context.mock';
import { PanelHeader } from '@components/collapsible-box/next/components/panel/components/panel-header';
import { render, screen, testHelpers } from '@test/test-utils';

import type { PanelHeaderProps } from '@components/collapsible-box/next/components/panel/components/panel-header';
import type { RenderType } from '@test/test-utils';

const titleMock = 'Panel Title';
const startEnhancerMock = <div data-testid="start-enhancer">Start Enhancer</div>;
const endEnhancerMock = <div data-testid="end-enhancer">End Enhancer</div>;
const onClickMock = testHelpers.fn();

const defaultProps: PanelHeaderProps = {
  children: titleMock,
  startEnhancer: startEnhancerMock,
  endEnhancer: endEnhancerMock,
  onClick: onClickMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<PanelHeaderProps>): RenderType => {
  return render(
    <PanelHeader
      {...defaultProps}
      {...props}
    >
      {titleMock}
    </PanelHeader>,
  );
};

describe('PanelHeader - tests', () => {
  mockUseCollapsibleBoxContext();

  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText(titleMock)).toBeInTheDocument();
    expect(screen.getByTestId('start-enhancer')).toBeInTheDocument();
    expect(screen.getByTestId('end-enhancer')).toBeInTheDocument();
  });

  it('should call `onClick` when clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(titleMock));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should render the draggable icon when `isDraggable` is true', () => {
    renderComponent({ isDraggable: true, draggableId: '1' });

    expect(screen.getByTestId('panel-header-1--draggable-icon')).toBeInTheDocument();
  });
});
