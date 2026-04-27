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

import { UserSelect } from '../user-select';

import type { UserOption, UserSelectProps } from '../user-select.interfaces';
import type { CommonOption } from '@components/select/next';
import type { RenderType } from '@test/test-utils';

const mockOnChange = testHelpers.fn();
const mockOnInputChange = testHelpers.fn();
const mockOnLoadMore = testHelpers.fn();

/* A default option for the select. */
const defaultOption: CommonOption<number> = {
  id: 0,
  label: 'Default option',
  email: 'default@email.com',
};

const options: UserOption[] = [
  defaultOption,
  {
    id: 1,
    label: 'First option',
    email: 'first@email.com',
  },
  {
    id: 2,
    label: 'Second option',
  },
];

const [, firstOption, secondOption] = options;
const defaultOptionLabel = `${defaultOption.label} (${defaultOption.email})`;

/* Setting the default props for the component. */
const defaultProps: UserSelectProps = {
  isLoading: false,
  isLoadingMore: false,
  options,
  value: [defaultOption],
  onChange: mockOnChange,
  onInputChange: mockOnInputChange,
  onLoadMore: mockOnLoadMore,
};

/**
 * renderComponent is a function that takes in props as an optional parameter and returns a component with
 * defaultProps and the received props
 */
const renderComponent = (props: Partial<UserSelectProps> = {}): RenderType =>
  render(
    <UserSelect
      {...defaultProps}
      {...props}
    />,
  );

describe('UserSelect - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render with default props', () => {
    renderComponent();
    expect(screen.getByText(defaultOptionLabel)).toBeInTheDocument();
    expect(screen.getByTestId('avatar-list-item--avatar--initials')).toBeInTheDocument();
  });

  it('should render options', async () => {
    renderComponent();

    expect(screen.queryByText(firstOption.label as string)).not.toBeInTheDocument();
    expect(screen.queryByText(secondOption.label as string)).not.toBeInTheDocument();

    await userEvent.click(screen.getByText(defaultOptionLabel));

    expect(screen.getByText(firstOption.label as string)).toBeInTheDocument();
    expect(screen.getByText(secondOption.label as string)).toBeInTheDocument();
  });

  it('should show "no results" message when there are no options', async () => {
    renderComponent({
      options: [],
    });

    await userEvent.click(screen.getByText(defaultOptionLabel));

    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('should call the onChange method', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(defaultOptionLabel));
    await userEvent.click(screen.getByText(secondOption.label as string));

    expect(mockOnChange).toHaveBeenCalledTimes(1);
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

    await userEvent.click(screen.getByText(defaultOptionLabel));

    // When the dropdown menu is shown, it will trigger the intersection observer immediately
    // because the list is too short (only 1 item) and the end of the list is already visible.
    // We don't need to scroll to reach the end of the list, so onLoadMore should be called.
    await waitFor(() => {
      expect(mockOnLoadMore).toHaveBeenCalled();
    });
  });
});
