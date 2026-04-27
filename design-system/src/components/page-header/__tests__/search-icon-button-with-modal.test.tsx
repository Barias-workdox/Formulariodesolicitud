import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { SearchIconButtonWithModal } from '../components/search-icon-button-with-modal';

import type { SearchIconButtonWithModalProps } from '../components/search-icon-button-with-modal';
import type { RenderType } from '@test/test-utils';

const baseTestId = 'search-icon-button';

const mockOnSelect = testHelpers.fn();
const mockOnChange = testHelpers.fn();

const defaultProps: SearchIconButtonWithModalProps<string> = {
  'data-testid': baseTestId,
  placeholder: 'placeholder example',
  onSelect: mockOnSelect,
  onChange: mockOnChange,
  value: '',
  items: ['item 1', 'item 2'],
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<SearchIconButtonWithModalProps<string>>): RenderType => {
  return render(
    <SearchIconButtonWithModal
      {...defaultProps}
      {...props}
    />,
  );
};

beforeEach(() => {
  testHelpers.resetAllMocks();
});

describe('SearchIconButtonWithModal - tests', () => {
  test('should render the component correctly when the modal is closed', () => {
    renderComponent();

    expect(screen.queryByPlaceholderText(defaultProps.placeholder)).not.toBeInTheDocument();
  });

  test('should render the component correctly when the modal is opened', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${baseTestId}--icon-button`));

    expect(await screen.findByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
  });

  test('should close the modal correctly when `Enter` key is pressed', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${baseTestId}--icon-button`));

    expect(await screen.findByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();

    await userEvent.keyboard('{Enter}');

    await waitFor(() => {
      expect(screen.queryByPlaceholderText(defaultProps.placeholder)).not.toBeInTheDocument();
    });
  });

  test('should execute `onEnter` when `Enter` key is pressed', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${baseTestId}--icon-button`));

    expect(await screen.findByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();

    await userEvent.keyboard('{Enter}');

    expect(mockOnSelect).toHaveBeenCalled();
  });
});
