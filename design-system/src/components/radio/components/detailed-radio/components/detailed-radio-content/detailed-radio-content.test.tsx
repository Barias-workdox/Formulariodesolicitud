import { TestTool } from '@carbon/icons-react';

import { render, screen } from '@test/test-utils';

import { Text } from '../../../../../text';

import { DetailedRadioContent } from './detailed-radio-content';

import type { DetailedRadioContentProps } from './detailed-radio-content';
import type { RenderType } from '@test/test-utils';

// MOCKS
const mockDescriptionText = 'Test description for the detailed radio';
const mockTitle = 'Test title';
const mockTestId = 'data-testid-mock';

/* Setting the default props for the component. */
const defaultProps: DetailedRadioContentProps = {
  description: (
    <Text
      variant="bodySmall"
      color="neutralSubdued"
      margin={0}
    >
      {mockDescriptionText}
    </Text>
  ),
  children: mockTitle,
  icon: <TestTool />,
  'data-testid': mockTestId,
};

/**
 * renderComponent is a function that takes in props as an optional parameter and returns a component with
 * defaultProps and the received props
 */
const renderComponent = (props?: Partial<DetailedRadioContentProps>): RenderType =>
  render(
    <DetailedRadioContent
      {...defaultProps}
      {...props}
    />,
  );

describe('DetailedRadioContent component tests', () => {
  it('should render with default props', () => {
    renderComponent();

    expect(screen.getByText(mockDescriptionText)).toBeInTheDocument();
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    expect(screen.getByTestId(`${mockTestId}--icon`)).toBeInTheDocument();
  });

  it('should render correctly without icon', () => {
    renderComponent({ icon: undefined });

    expect(screen.getByText(mockDescriptionText)).toBeInTheDocument();
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    expect(screen.queryByTestId(`${mockTestId}--icon`)).not.toBeInTheDocument();
  });
});
