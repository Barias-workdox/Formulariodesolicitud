import { render, screen } from '@test/test-utils';

import { PopoverTitleWithIcon } from '../../components/webdox-ai-button-information-popover/components/popover-title-with-icon';

import type { PopoverTitleWithIconProps } from '../../components/webdox-ai-button-information-popover/components/popover-title-with-icon';
import type { RenderType } from 'test/test-utils';

const baseDataTestId = 'popover-title-with-icon';
const childrenText = 'Example text';

const defaultProps: Omit<PopoverTitleWithIconProps, 'children'> = {
  'data-testid': baseDataTestId,
};

const renderComponent = (props?: Partial<PopoverTitleWithIconProps>): RenderType =>
  render(
    <PopoverTitleWithIcon
      {...defaultProps}
      {...props}
    >
      <div>{childrenText}</div>
    </PopoverTitleWithIcon>,
  );

describe('PopoverTitleWithIcon - tests', () => {
  it('should render correctly the component when showIcon is false', async () => {
    renderComponent();

    expect(screen.getByText(childrenText)).toBeInTheDocument();
    expect(screen.queryByTestId(`${baseDataTestId}--icon`)).not.toBeInTheDocument();
  });

  it('should render correctly the component when showIcon is true', async () => {
    renderComponent({ showIcon: true });

    expect(screen.getByText(childrenText)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--icon`)).toBeInTheDocument();
  });
});
