import { TestTool } from '@carbon/icons-react';
import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { Text } from '../../../text';

import { DetailedRadio } from './detailed-radio';

import type { DetailedRadioProps } from './detailed-radio';
import type { RenderType } from '@test/test-utils';

// MOCKS
const mockDataTestId = 'detailed-radio-testing';
const mockTitle = 'Test title';
const mockOnChange = testHelpers.fn();

/* Setting the default props for the component. */
const defaultProps: DetailedRadioProps = {
  'data-testid': mockDataTestId,
  description: (
    <Text
      variant="bodySmall"
      color="neutralSubdued"
      margin={0}
    >
      Test description for the detailed radio
    </Text>
  ),
  children: mockTitle,
  icon: <TestTool />,
  onChange: mockOnChange,
};

/**
 * renderComponent is a function that takes in props as an optional parameter and returns a component with
 * defaultProps and the received props
 */
const renderComponent = (props?: Partial<DetailedRadioProps>): RenderType =>
  render(
    <DetailedRadio
      {...defaultProps}
      {...props}
    />,
  );

describe('DetailedRadio molecule tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render with default props', () => {
    renderComponent();

    expect(screen.getByTestId(mockDataTestId)).toBeInTheDocument();
  });

  it('should call the onChange method', async () => {
    renderComponent();

    const radio = screen.getByTestId(mockDataTestId);

    await userEvent.click(radio);

    expect(mockOnChange).toHaveBeenCalled();
  });
});
