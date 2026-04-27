import { render } from '@test/test-utils';

import { ItemLabelCounter } from '../components/menu-item/components/item-label-counter';

import type { ItemLabelCounterProps } from '../components/menu-item/components/item-label-counter';
import type { RenderType } from '@test/test-utils';

const renderComponent = (props: Partial<ItemLabelCounterProps> = {}): RenderType => {
  const { counter = 5, isActive = false, disabled = false, ...rest } = props;

  return render(
    <ItemLabelCounter
      counter={counter}
      isActive={isActive}
      disabled={disabled}
      {...rest}
    />,
  );
};

describe('ItemLabelCounter - tests', () => {
  it('renders the component correctly', () => {
    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the component correctly when `isActive` is `true`', () => {
    const { asFragment } = renderComponent({ isActive: true });

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the component correctly when `disabled` is `true`', () => {
    const { asFragment } = renderComponent({ disabled: true });

    expect(asFragment()).toMatchSnapshot();
  });
});
