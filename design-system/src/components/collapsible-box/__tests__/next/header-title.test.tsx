import { mockUseCollapsibleBoxContext } from '@components/collapsible-box/__mocks__/next/collapsible-box-context.mock';
import { HeaderTitle } from '@components/collapsible-box/next/components/panel/components/header-title';
import { render, screen } from '@test/test-utils';

import type { HeaderTitleProps } from '@components/collapsible-box/next/components/panel/components/header-title';
import type { RenderType } from '@test/test-utils';

const titleMock = 'Title';
const collapsedTitleMock = 'Collapsed Title';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<HeaderTitleProps>): RenderType => {
  const { children = titleMock } = props || {};

  return render(<HeaderTitle {...props}>{children}</HeaderTitle>);
};

describe('HeaderTitle - tests', () => {
  const { mockedValues, useCollapsibleBoxContextHookSpy } = mockUseCollapsibleBoxContext();

  it('should render the component correctly when `size` is `large`', () => {
    useCollapsibleBoxContextHookSpy.mockReturnValueOnce({ ...mockedValues, size: 'large' });

    const { asFragment } = renderComponent();

    expect(screen.getByText(titleMock)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot('when size is large');
  });

  it('should render the component correctly when `size` is `small`', () => {
    useCollapsibleBoxContextHookSpy.mockReturnValueOnce({ ...mockedValues, size: 'small' });

    const { asFragment } = renderComponent();

    expect(screen.getByText(titleMock)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot('when size is small');
  });

  it('should render collapsed subtitle when $expanded is true', () => {
    renderComponent({ $expanded: true, collapsedTitle: collapsedTitleMock });

    expect(screen.getByText(collapsedTitleMock)).toBeInTheDocument();
  });

  it('should render children when $expanded is false', () => {
    renderComponent({ $expanded: false });

    expect(screen.getByText(titleMock)).toBeInTheDocument();
  });

  it('should render children when is a `ReactNode`', () => {
    renderComponent({ children: <div>{titleMock}</div> });

    expect(screen.getByText(titleMock)).toBeInTheDocument();
  });

  it('should render collapsed title when is a `ReactNode` and $expanded is true', () => {
    renderComponent({ $expanded: true, collapsedTitle: <div>{collapsedTitleMock}</div> });

    expect(screen.getByText(collapsedTitleMock)).toBeInTheDocument();
  });
});
