import { userEvent } from '@testing-library/user-event';

import { mockUseMedia } from '@test/__mocks__/use-media.mock';
import { render, screen, testHelpers } from '@test/test-utils';
import { mediaQueries } from '@tokens/breakpoints';

import { ProgressStep } from '../../';

import type { ProgressStepProps } from '../../';
import type { RenderResult } from '@testing-library/react';

const mockTitle = 'Lorem ipsum';
const mockDataTestId = 'data-test-id';
const mockOnClick = testHelpers.fn();

const defaultProps: ProgressStepProps = {
  'data-testid': mockDataTestId,
  index: 0,
  kind: 'default',
  title: mockTitle,
  onClick: mockOnClick,
};

/** Utility component render function */
const renderComponent = (props?: Partial<ProgressStepProps>): RenderResult =>
  render(
    <ProgressStep
      {...defaultProps}
      {...props}
    />,
  );

describe('ProgressStep', () => {
  beforeEach(() => {
    testHelpers.resetAllMocks();
    mockUseMedia();
  });

  it('renders the component with the correct title', () => {
    renderComponent();

    const titleElement = screen.getByText(mockTitle);

    expect(titleElement).toBeInTheDocument();
  });

  it('triggers onClick function when clicked', async () => {
    renderComponent();

    const stepElement = screen.getByTestId(`${mockDataTestId}--default`);

    await userEvent.click(stepElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('does not trigger onClick when kind is pending', async () => {
    const handleClick = vi.fn();

    renderComponent({ kind: 'pending' });

    const stepElement = screen.getByTestId(`${mockDataTestId}--pending`);

    await userEvent.click(stepElement);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders the correct icon based on the kind', () => {
    renderComponent({ kind: 'checked' });

    const iconElement = screen.getByTestId(`${mockDataTestId}--checked`).querySelector('svg');

    expect(iconElement).toBeInTheDocument();
  });

  it('should render a step as disabled when kind is pending', () => {
    renderComponent({ kind: 'pending' });

    expect(screen.getByTestId(`${mockDataTestId}--pending`)).toBeInTheDocument();
  });

  it('should render the step without text when hideText is true (default mediaQuery)', async () => {
    renderComponent({ hideText: true });

    expect(screen.queryByText(mockTitle)).not.toBeInTheDocument();

    const icon = screen.getByTestId(`${mockDataTestId}--icon-wrapper`);

    expect(icon).toBeInTheDocument();

    await userEvent.hover(icon);

    expect(await screen.findByText(mockTitle)).toBeInTheDocument();
  });

  it('should render the step with text when hideText is true but mediaQuery is not matched', async () => {
    mockUseMedia({ [mediaQueries.medium]: true });

    renderComponent({ hideText: true });

    expect(screen.queryByText(mockTitle)).toBeInTheDocument();
  });
});
