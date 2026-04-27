import { render, screen } from '@test/test-utils';

import { ItemLabel } from '../components/menu-item/components/item-label';

import type { ItemLabelProps } from '../components/menu-item/components/item-label';
import type { RenderType } from '@test/test-utils';

const baseTestId = 'item-label';

const defaultProps: ItemLabelProps = {
  'data-testid': baseTestId,
  label: 'Menu Item',
  isActive: false,
  disabled: false,
  size: 'default',
};

const renderComponent = (props?: Partial<ItemLabelProps>): RenderType =>
  render(
    <ItemLabel
      {...defaultProps}
      {...props}
    />,
  );

describe('ItemLabel - tests', () => {
  it('renders the component correctly', () => {
    renderComponent();

    expect(screen.getByText(defaultProps.label as string)).toBeInTheDocument();
  });

  it('renders the component correctly when `label` is a `ReactNode`', () => {
    renderComponent({ label: <div>{defaultProps.label}</div> });

    expect(screen.getByText(defaultProps.label as string)).toBeInTheDocument();
  });

  it('renders the StartEnhancer when provided', () => {
    const StartEnhancer = () => <span>Start Icon</span>;

    renderComponent({ startEnhancer: <StartEnhancer /> });

    expect(screen.getByText('Start Icon')).toBeInTheDocument();
  });

  it('displays the counter when provided', () => {
    renderComponent({ counter: 3 });

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('applies the active styles when `isActive` is true', () => {
    const { asFragment } = renderComponent({ isActive: true });

    expect(asFragment()).toMatchSnapshot();
  });

  it('applies the disabled styles when `disabled` is true', () => {
    const { asFragment } = renderComponent({ disabled: true });

    expect(asFragment()).toMatchSnapshot();
  });
});
