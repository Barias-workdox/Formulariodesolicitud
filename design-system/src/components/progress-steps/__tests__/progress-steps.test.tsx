import { userEvent } from '@testing-library/user-event';

import { mockUseMedia } from '@test/__mocks__/use-media.mock';
import { render, screen, testHelpers } from '@test/test-utils';

import { ProgressStep, ProgressSteps } from '../';

import type { ProgressStepsProps } from '../';
import type { RenderResult } from '@testing-library/react';

const mockOnStepClick = testHelpers.fn();
const mockDataTestId = 'data-test-id';

const defaultProps: ProgressStepsProps = {
  'data-testid': mockDataTestId,
  onStepClick: mockOnStepClick,
  type: 'default',
  size: 'sm',
  stepWidth: '180px',
  children: [],
};

/** Utility component render function */
const renderComponent = (props?: Partial<ProgressStepsProps>): RenderResult =>
  render(
    <ProgressSteps
      {...defaultProps}
      {...props}
    >
      <ProgressStep
        title="Step 1"
        kind="default"
      />
      <ProgressStep
        title="Step 2"
        kind="pending"
      />
    </ProgressSteps>,
  );

describe('ProgressSteps', () => {
  beforeEach(() => {
    testHelpers.resetAllMocks();
    mockUseMedia();
  });

  it('renders the correct number of ProgressStep children', () => {
    renderComponent();

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
  });

  it('renders compressed dividers between steps', () => {
    renderComponent({ type: 'compressed' });

    const dividers = screen.getAllByRole('separator');

    expect(dividers.length).toBe(1);
  });

  it('renders non-compressed dividers between steps', () => {
    renderComponent();

    const dividers = screen.getAllByRole('separator');

    expect(dividers.length).toBe(1);
  });

  it('calls onStepClick with correct index when a step is clicked', async () => {
    renderComponent();

    const stepIndex = 0;
    const step = screen.getByTestId(`${mockDataTestId}--step-${stepIndex}--default`);

    await userEvent.click(step);

    expect(mockOnStepClick).toHaveBeenCalledWith(stepIndex);
  });

  it('does not call onStepClick for pending steps', async () => {
    renderComponent();

    const stepIndex = 1;
    const step = screen.getByTestId(`${mockDataTestId}--step-${stepIndex}--pending`);

    await userEvent.click(step);

    expect(mockOnStepClick).not.toHaveBeenCalled();
  });
});
