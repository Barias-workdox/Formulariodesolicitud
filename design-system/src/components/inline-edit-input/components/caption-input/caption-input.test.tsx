import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { CaptionInput } from './caption-input';

import type { CaptionInputProps } from './caption-input';
import type { RenderType } from '@test/test-utils';

const mockOnCaptionClick = testHelpers.fn();
const mockOnToggle = testHelpers.fn();

const defaultProps: CaptionInputProps = {
  'data-testid': 'data-testid',
  captionText: 'captionText',
  disabled: false,
  isLoading: false,
  onCaptionClick: mockOnCaptionClick,
  onToggle: mockOnToggle,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CaptionInputProps>): RenderType =>
  render(
    <CaptionInput
      {...defaultProps}
      {...props}
    />,
  );

describe('caption-input tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly', async () => {
    renderComponent();

    const captionText = screen.getByText(defaultProps.captionText);
    const allButtons = screen.getAllByRole('button');
    const [iconButton] = allButtons;

    expect(captionText).toBeInTheDocument();

    expect(allButtons).toHaveLength(1);

    // Check the caption when it is hovered
    await userEvent.hover(captionText);
    await waitFor(() => {
      expect(screen.getAllByText(defaultProps.captionText)).toHaveLength(2);
    });

    // Check click in the icon button
    await userEvent.click(iconButton);
    expect(mockOnToggle).toHaveBeenCalledTimes(1);

    // Check click on caption
    await userEvent.click(captionText);
    expect(mockOnCaptionClick).toHaveBeenCalledTimes(1);
  });

  it('should render correctly when `disabled` = `true`', async () => {
    renderComponent({ disabled: true });

    const allButtons = screen.queryAllByRole('button');

    expect(allButtons).toHaveLength(0);
  });

  it('should render correctly when `isLoading` = `true`', async () => {
    renderComponent({ isLoading: true });

    const allButtons = screen.queryAllByRole('button');

    expect(allButtons).toHaveLength(0);
  });
});
