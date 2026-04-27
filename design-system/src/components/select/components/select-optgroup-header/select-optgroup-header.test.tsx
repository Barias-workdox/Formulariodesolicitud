import { render, screen } from '@test/test-utils';

import { SelectOptgroupHeader, type SelectOptgroupHeaderProps } from './select-optgroup-header';

import type { RenderType } from '@test/test-utils';

const defaultChildrenText = 'dummy children';

const defaultChildren = <span>{defaultChildrenText}</span>;

const defaultProps: Omit<SelectOptgroupHeaderProps, 'children'> = {
  count: 2,
  isBorderless: false,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<SelectOptgroupHeaderProps>): RenderType =>
  render(
    <SelectOptgroupHeader
      {...defaultProps}
      {...props}
    >
      {defaultChildren}
    </SelectOptgroupHeader>,
  );

describe('SelectOptgroupHeader - tests', () => {
  it('should render the component', async () => {
    renderComponent();

    expect(screen.getByText(defaultChildrenText)).toBeInTheDocument();
    expect(screen.getByText(`(${defaultProps.count})`)).toBeInTheDocument();
  });

  it('should render the given count', async () => {
    const count = 20;

    renderComponent({ count });

    expect(screen.getByText(`(${count})`)).toBeInTheDocument();
  });
});
