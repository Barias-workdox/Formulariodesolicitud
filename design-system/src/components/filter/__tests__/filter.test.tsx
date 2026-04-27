import { userEvent } from '@testing-library/user-event';

import { render, screen, waitFor } from '@test/test-utils';

import { Filter } from '../filter';

import type { FilterProps, FilterValue } from '../filter.interfaces';

describe('Filter Component', () => {
  const testId = 'test-id';
  const label = 'Test Label';
  const content = 'Popover Content';
  const tooltipText = 'Selected Items';

  const options = [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
  ];

  const singleValue: FilterValue[] = [options[0]];
  const multiValue: FilterValue[] = [...options];

  const renderComponent = (props: Partial<FilterProps> = {}) =>
    render(
      <Filter
        data-testid={testId}
        label={label}
        content={content}
        tooltipText={tooltipText}
        {...props}
      />,
    );

  it('renders without crashing', () => {
    renderComponent();

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it('displays the correct label', () => {
    renderComponent();

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('displays the value text correctly', () => {
    renderComponent({ value: singleValue });

    expect(screen.getByText(`${label}: ${singleValue[0].label}`)).toBeInTheDocument();
  });

  it('shows the popover content when clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(label));

    const contentText = await screen.findByText(content);

    expect(contentText).toBeInTheDocument();
  });

  it('handles multi-selection correctly', async () => {
    renderComponent({ multi: true, value: multiValue });

    const tag = screen.getByText(multiValue.length);

    expect(tag).toBeInTheDocument();

    await userEvent.hover(tag);

    expect(await screen.findByText(tooltipText)).toBeInTheDocument();
  });

  it('calls onClear when the clear button is clicked', async () => {
    const mockOnClear = vi.fn();

    renderComponent({ value: multiValue, onClear: mockOnClear });

    await userEvent.click(screen.getByTestId(`${testId}__end-enhancer-clear`));

    expect(mockOnClear).toHaveBeenCalled();
  });

  it('displays the start enhancer', () => {
    const startEnhancerTestId = 'start-enhancer';
    const startEnhancer = <div data-testid={startEnhancerTestId}>🧨</div>;

    renderComponent({ startEnhancer });

    expect(screen.getByTestId(startEnhancerTestId)).toBeInTheDocument();
  });

  describe('content prop tests', () => {
    it('renders the popover content if it is a ReactNode', async () => {
      const reactNodeContent = 'React Node Content';

      renderComponent({ content: <div>{reactNodeContent}</div> });

      // Open the popover
      await userEvent.click(screen.getByText(label));

      // Verify the content is displayed
      expect(screen.getByText(reactNodeContent)).toBeInTheDocument();
    });

    it('uses the render-prop `close` function to close the popover', async () => {
      const renderPropContent = ({ close }: { close(): void }) => (
        <button onClick={close}>Close me</button>
      );

      renderComponent({ content: renderPropContent });

      // Open the popover
      await userEvent.click(screen.getByText(label));
      expect(screen.getByText('Close me')).toBeInTheDocument();

      // Click the "Close me" button to invoke `close`
      await userEvent.click(screen.getByText('Close me'));

      await waitFor(() => {
        expect(screen.queryByText('Close me')).not.toBeInTheDocument();
      });
    });
  });
});
