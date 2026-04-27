import { UserAvatar } from '@carbon/icons-react';

import { render, screen } from '@test/test-utils';

import { BorderedRadioContent } from './bordered-radio-content';

import type { BorderedRadioContentProps } from './bordered-radio-content';
import type { RenderType } from '@test/test-utils';

// MOCKS
const mockIconDataTestId = 'bordered-radio-content-icon-testid';
const mockDescription = 'Mock description';

/* Default props for the component. */
const defaultProps: BorderedRadioContentProps = {
  description: mockDescription,
  icon: (
    <UserAvatar
      size={24}
      data-testid={mockIconDataTestId}
    />
  ),
};

/**
 * Function that takes in props as an optional parameter and returns a component with
 * defaultProps and the received props
 */
const renderComponent = (props?: Partial<BorderedRadioContentProps>): RenderType =>
  render(
    <BorderedRadioContent
      {...defaultProps}
      {...props}
    />,
  );

describe('bordered-radio-content - tests', () => {
  it('should render the description', () => {
    renderComponent();

    expect(screen.getByText(mockDescription)).toBeInTheDocument();
  });

  it('should render the icon', () => {
    renderComponent();

    expect(screen.getByTestId(mockIconDataTestId)).toBeInTheDocument();
  });
});
