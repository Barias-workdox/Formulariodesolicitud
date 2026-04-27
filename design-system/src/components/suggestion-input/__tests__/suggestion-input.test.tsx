import { userEvent } from '@testing-library/user-event';

import { ariaKeyDownHandler } from '@components/utils/accessibility.utils';

import { render, screen, testHelpers, waitFor } from '../../../test/test-utils';
import { SuggestionInput } from '../suggestion-input';

import type { SuggestionInputProps } from '../suggestion-input.interfaces';

const mockDataTestId = 'design-system-suggestion-input';
const mockItems = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];

const mockHandleChange = testHelpers.fn();
const mockHandleSelect = testHelpers.fn();
const mockHandleIsOpenChange = testHelpers.fn();

const defaultProps: SuggestionInputProps = {
  'data-testid': mockDataTestId,
  items: mockItems,
  value: '',
  placeholder: 'Search...',
  onChange: mockHandleChange,
  onSelect: mockHandleSelect,
  onIsOpenChange: mockHandleIsOpenChange,
  mapItemToNode: ({ item, $isActive, handleClick }) => (
    <div
      data-testid={`item-${item}`}
      style={{ background: $isActive ? '#007bff' : 'transparent' }}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={ariaKeyDownHandler(handleClick)}
    >
      {item}
    </div>
  ),
  mapItemToString: (item) => item,
};

const renderComponent = (props: Partial<SuggestionInputProps> = {}) => {
  return render(
    <SuggestionInput
      {...defaultProps}
      {...props}
    />,
  );
};

describe('SuggestionInput Component', () => {
  window.HTMLElement.prototype.scrollIntoView = function () {};

  beforeEach(() => {
    testHelpers.resetAllMocks();
  });

  test('renders input and opens list on focus', async () => {
    renderComponent();

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();

    await userEvent.click(input);
    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
  });

  test('closes list on click outside', async () => {
    renderComponent();

    const input = screen.getByRole('textbox');

    await userEvent.click(input);

    expect(screen.getByRole('list')).toBeInTheDocument();

    await userEvent.click(document.body);

    waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
  });

  test('navigates items with keyboard', async () => {
    renderComponent();

    const input = screen.getByRole('textbox');

    await userEvent.click(input);

    await userEvent.keyboard('[ArrowDown]');
    expect(screen.getByText('Apple')).toHaveStyle('background: #007bff');

    await userEvent.keyboard('[ArrowDown]');
    expect(screen.getByText('Banana')).toHaveStyle('background: #007bff');

    await userEvent.keyboard('[ArrowUp]');
    expect(screen.getByText('Apple')).toHaveStyle('background: #007bff');
  });

  test('selects an item on click', async () => {
    renderComponent();

    const input = screen.getByRole('textbox');

    await userEvent.click(input);

    const item = screen.getByText('Banana');

    await userEvent.click(item);

    expect(mockHandleSelect).toHaveBeenCalledWith('Banana');
    waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
  });

  test('submits the value on Enter key', async () => {
    renderComponent({ value: 'Pineapple' });

    const input = screen.getByRole('textbox');

    await userEvent.type(input, '{enter}');

    expect(mockHandleSelect).toHaveBeenCalledWith('Pineapple');
  });

  test('triggers onIsOpenChange when show/hide suggestions', async () => {
    renderComponent();

    const input = screen.getByRole('textbox');

    await userEvent.click(input);

    expect(mockHandleIsOpenChange).toHaveBeenCalledWith(true);

    await userEvent.click(document.body);

    expect(mockHandleIsOpenChange).toHaveBeenCalledWith(false);
  });
});
