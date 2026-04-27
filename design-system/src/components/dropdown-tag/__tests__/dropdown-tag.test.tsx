import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { DropdownTag } from '../dropdown-tag';

import type { DropdownTagProps } from '../dropdown-tag.interfaces';
import type { RenderType } from '@test/test-utils';

const children = 'dummy text';

const items = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  label: `Option ${i}`,
}));

const defaultProps: DropdownTagProps = {
  kind: 'default',
  onItemSelect: testHelpers.fn(),
  children,
  items,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DropdownTagProps>): RenderType =>
  render(
    <DropdownTag
      {...defaultProps}
      {...props}
    />,
  );

describe('DropdownTag - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('Should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it('Should render the options when tag is clicked', async () => {
    renderComponent();

    const tag = screen.getByText(children);

    await userEvent.click(tag);

    await waitFor(() => {
      items.forEach(({ label }) => {
        expect(screen.getByText(label)).toBeInTheDocument();
      });
    });
  });

  it('Should call the onItemSelect callback when an option is clicked', async () => {
    renderComponent();

    const tag = screen.getByText(children);

    await userEvent.click(tag);

    await waitFor(() => {
      items.forEach(({ label }) => {
        expect(screen.getByText(label)).toBeInTheDocument();
      });
    });

    await userEvent.click(screen.getByText(items[0].label));

    expect(defaultProps.onItemSelect).toHaveBeenCalledOnce();
  });
});
