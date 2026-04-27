import { Star } from '@carbon/icons-react';

import { mockUseCollapsibleBoxContext } from '@components/collapsible-box/__mocks__/next/collapsible-box-context.mock';
import { PanelBackgroundIcon } from '@components/collapsible-box/next/components/panel/components/panel-background-icon';
import { render } from '@test/test-utils';

import type { RenderType } from '@test/test-utils';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType => {
  return render(<PanelBackgroundIcon Icon={Star} />);
};

describe('PanelBackgroundIcon - tests', () => {
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
});
