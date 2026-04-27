import { userEvent } from '@testing-library/user-event';

import {
  afterEach,
  describe,
  expect,
  it,
  render,
  screen,
  testHelpers,
  waitFor,
} from '@test/test-utils';
import '@test/__mocks__/use-virtualizer.mock';

import { SelectWithPagination } from './select-with-pagination';

import type { SelectWithPaginationProps } from './select-with-pagination.interfaces';
import type { RenderType } from '@test/test-utils';

const mockOnChange = testHelpers.fn();
const mockOnInputChange = testHelpers.fn();
const mockOnLoadMore = testHelpers.fn();

/* A default option for the select. */
const defaultOption = { id: 0, label: 'Default option' };

const options = [
  defaultOption,
  {
    id: 1,
    label: 'First option',
  },
  {
    id: 2,
    label: 'Second option',
  },
];

const [, firstOption, secondOption] = options;

/* Setting the default props for the component. */
const defaultProps: SelectWithPaginationProps = {
  isLoading: false,
  isLoadingMore: false,
  options,
  value: defaultOption,
  onChange: mockOnChange,
  onInputChange: mockOnInputChange,
  onLoadMore: mockOnLoadMore,
};

/**
 * renderComponent is a function that takes in props as an optional parameter and returns a component with
 * defaultProps and the received props
 */
const renderComponent = (props: Partial<SelectWithPaginationProps> = {}): RenderType =>
  render(
    <SelectWithPagination
      {...defaultProps}
      {...props}
    />,
  );

describe('SelectWithPagination - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render with default props', () => {
    renderComponent();
    expect(screen.getByText(defaultOption.label)).toBeInTheDocument();
  });

  it('should render options', async () => {
    renderComponent();

    expect(screen.queryByText(firstOption.label)).not.toBeInTheDocument();
    expect(screen.queryByText(secondOption.label)).not.toBeInTheDocument();

    await userEvent.click(screen.getByText(defaultOption.label));

    expect(screen.getByText(firstOption.label)).toBeInTheDocument();
    expect(screen.getByText(secondOption.label)).toBeInTheDocument();
  });

  it('should show "no results" message when there are no options', async () => {
    renderComponent({
      options: [],
    });

    await userEvent.click(screen.getByText(defaultOption.label));

    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('should call the onChange method', async () => {
    renderComponent();

    expect(mockOnChange).toHaveBeenCalledTimes(0);

    await userEvent.click(screen.getByText(defaultOption.label));
    await userEvent.click(screen.getByText(firstOption.label));

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should call the onInputChange method', async () => {
    renderComponent();

    expect(mockOnInputChange).toHaveBeenCalledTimes(0);

    const input = screen.getByRole('combobox');

    await userEvent.type(input, 'testing');

    expect(mockOnInputChange).toHaveBeenCalled();
  });

  it('should call the onLoadMore method', async () => {
    renderComponent({
      onLoadMore: mockOnLoadMore,
    });

    expect(mockOnLoadMore).toHaveBeenCalledTimes(0);

    await userEvent.click(screen.getByText(defaultOption.label));

    // When the dropdown menu is shown, it will trigger the intersection observer immediately
    // because the list is too short (only 1 item) and the end of the list is already visible.
    // We don't need to scroll to reach the end of the list, so onLoadMore should be called.
    await waitFor(() => {
      expect(mockOnLoadMore).toHaveBeenCalled();
    });
  });
});
