import { userEvent } from '@testing-library/user-event';

import { useElementOverflow } from '@components/utils/hooks/use-element-overflow';
import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { TruncatedText } from '../truncated-text';

describe('TruncatedText', () => {
  const text = 'Lorem ipsum dolor sit amet';
  const tooltipContent = 'Tooltip content';

  vi.mock('@components/utils/hooks/use-element-overflow', () => ({
    useElementOverflow: vi.fn(() => ({ isOverflowing: false })),
  }));

  const renderComponent = () =>
    render(
      <TruncatedText
        tooltipProps={{ content: tooltipContent }}
        textProps={{ variant: 'body' }}
      >
        {text}
      </TruncatedText>,
    );

  it('renders correctly', () => {
    renderComponent();

    const textElement = screen.getByText(text);

    expect(textElement).toBeInTheDocument();
  });

  it('renders tooltip when the text is overflowing', async () => {
    testHelpers.mocked(useElementOverflow).mockReturnValue({
      isOverflowing: true,
    });

    renderComponent();

    expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument();

    await userEvent.hover(screen.getByText(text));

    expect(await screen.findByText(tooltipContent)).toBeVisible();
  });

  it("doesn't render the tooltip when the text is not overflowing", async () => {
    testHelpers.mocked(useElementOverflow).mockReturnValue({
      isOverflowing: false,
    });

    renderComponent();

    expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument();

    await userEvent.hover(screen.getByText(text));

    waitFor(async () => {
      expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument();
    });
  });
});
