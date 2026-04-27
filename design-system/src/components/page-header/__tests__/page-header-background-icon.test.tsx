import { Chat } from '@carbon/icons-react';

import { mockUseMedia } from '@test/__mocks__/use-media.mock';
import { render } from '@test/test-utils';
import { mediaQueries } from '@tokens/breakpoints';

import { PageHeaderBackgroundIcon } from '../components/page-header-background-icon';

import type { RenderType } from '@test/test-utils';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType => {
  return render(
    <PageHeaderBackgroundIcon
      Icon={Chat}
      backgroundColor="bgBase"
      iconColor="iconBase"
    />,
  );
};

beforeAll(() => {
  mockUseMedia();
});

describe('PageHeaderBackgroundIcon - tests', () => {
  test('should render the component correctly when screen is extrasmall', () => {
    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot();
  });

  test('should render the component correctly when screen is small', () => {
    mockUseMedia({
      [mediaQueries.small]: true,
    });

    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot();
  });
});
