import { CompoundTitle } from '@components/collapsible-box/next/components/panel/components/compound-title';
import { render, screen } from '@test/test-utils';

import type { CompoundTitleProps } from '@components/collapsible-box/next/components/panel/components/compound-title';
import type { RenderType } from '@test/test-utils';

const titleMock = 'Main Title';
const subtitleMock = 'Subtitle';
const baseTestId = 'compound-title';

const defaultProps: CompoundTitleProps = {
  'data-testid': baseTestId,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props = {}): RenderType => {
  return render(
    <CompoundTitle
      {...defaultProps}
      {...props}
    >
      <div>{titleMock}</div>
      <div>{subtitleMock}</div>
    </CompoundTitle>,
  );
};

describe('CompoundTitle - tests', () => {
  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText(titleMock)).toBeInTheDocument();
    expect(screen.getByText(subtitleMock)).toBeInTheDocument();
  });

  it('should render dividers between children', () => {
    renderComponent();

    const dividers = screen.getAllByTestId(`${baseTestId}--divider`);

    expect(dividers.length).toBe(1);
  });
});
