import { mockUseMedia } from '@test/__mocks__/use-media.mock';
import { render } from '@test/test-utils';
import { mediaQueries } from '@tokens/breakpoints';

import { PageHeaderPrimaryButton } from '../components/page-header-primary-button';

import type { RenderType } from '@test/test-utils';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType => {
  return render(<PageHeaderPrimaryButton>Button</PageHeaderPrimaryButton>);
};

beforeAll(() => {
  mockUseMedia();
});

describe('PageHeaderPrimaryButton - tests', () => {
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
