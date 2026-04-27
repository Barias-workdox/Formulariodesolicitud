import { mockUseCollapsibleBoxContext } from '@components/collapsible-box/__mocks__/next/collapsible-box-context.mock';
import { ToggleIcon } from '@components/collapsible-box/next/components/panel/components/panel-header/components/toggle-icon';
import { render, screen } from '@test/test-utils';

import type { RenderType } from '@test/test-utils';

const dataTestId = 'toggle-icon';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props = {}): RenderType => {
  return render(
    <ToggleIcon
      data-testid={dataTestId}
      {...props}
    />,
  );
};

describe('ToggleIcon - tests', () => {
  const { mockedValues, useCollapsibleBoxContextHookSpy } = mockUseCollapsibleBoxContext();

  it('should render the component correctly when `size` is `large`', () => {
    useCollapsibleBoxContextHookSpy.mockReturnValueOnce({ ...mockedValues, size: 'large' });

    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot('when size is large');
  });

  it('should render the component correctly when `size` is `small`', () => {
    useCollapsibleBoxContextHookSpy.mockReturnValueOnce({ ...mockedValues, size: 'small' });

    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot('when size is small');
  });

  it('should render the component correctly when `$expanded` is true', () => {
    renderComponent({ $expanded: true });

    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
  });

  it('should render the component correctly when `$expanded` is false', () => {
    renderComponent({ $expanded: false });

    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
  });
});
