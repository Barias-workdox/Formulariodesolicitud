import { render, screen, testHelpers } from '@test/test-utils';

import { PageHeaderSearch } from '../components/page-header-search';

import type { PageHeaderSearchProps } from '../components/page-header-search';
import type { RenderType } from '@test/test-utils';

const baseTestId = 'page-header-search';

const defaultProps: PageHeaderSearchProps<string> = {
  'data-testid': baseTestId,
  onChange: testHelpers.fn(),
  placeholder: 'example placeholder',
  value: '',
  items: [],
  onSelect: testHelpers.fn(),
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType => {
  return render(<PageHeaderSearch {...defaultProps} />);
};

describe('PageHeaderSearch - tests', () => {
  test('should render the component correctly when toolbar is no visible', () => {
    const { asFragment } = renderComponent();

    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseTestId}--icon-button`)).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot('when toolbar is no visible');
  });
});
