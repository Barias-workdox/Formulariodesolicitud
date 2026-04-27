import { render, screen } from '@test/test-utils';

import { SelectControlContainer } from '../components/select-control-container';

import { sharedPropsMock } from './__mocks__/shared-props.mock';

import type { SelectControlContainerProps } from '../components/select-control-container';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'select-control-container-test-id';

const defaultProps: SelectControlContainerProps = {
  ...sharedPropsMock,
  'data-testid': baseDataTestId,
  leading: <div>Leading Element</div>,
  isHovered: false,
  kind: 'gray',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<SelectControlContainerProps>): RenderType =>
  render(
    <SelectControlContainer
      {...defaultProps}
      {...props}
    >
      <div>Children Content</div>
    </SelectControlContainer>,
  );

describe('SelectControlContainer', () => {
  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText('Leading Element')).toBeInTheDocument();
    expect(screen.getByText('Children Content')).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--search-icon`)).toBeInTheDocument();
  });

  it('should not render the start enhancer container when leading is undefined or type is select', () => {
    renderComponent({ leading: undefined, $type: 'select' });

    expect(
      screen.queryByTestId(`${baseDataTestId}--start-enhancer-container`),
    ).not.toBeInTheDocument();
  });

  it('should not render search icon when type is select', () => {
    renderComponent({ $type: 'select' });

    expect(screen.getByText('Leading Element')).toBeInTheDocument();
    expect(screen.queryByText(`${baseDataTestId}--search-icon`)).not.toBeInTheDocument();
  });
});
