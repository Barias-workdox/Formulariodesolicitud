import { userEvent } from '@testing-library/user-event';

import { render, screen, waitFor } from '@test/test-utils';
import '@test/__mocks__/use-virtualizer.mock';

import { GroupConditionValue } from '../group-condition-value';

import type { ConditionType, DataType } from '../../interfaces';
import type { GroupConditionValueProps } from '../group-condition-value';
import type { CommonOption } from '@components/select/next';
import type { RenderType } from '@test/test-utils';

const dataTestId = 'test';
const mockOnUpdateCondition = vi.fn();
const mockOnLoadMore = vi.fn();
const mockOptions: CommonOption[] = [{ id: '1', label: 'Option' }];

const dataTestIdInput = (dataType: DataType, input: 'input' | 'select__input') =>
  `${dataTestId}--${dataType}-${input}`;

const mockCondition: ConditionType = {
  id: 1,
  field: 'name',
  dataType: 'string',
  objectToEval: undefined,
  value: undefined,
};

const defaultProps: GroupConditionValueProps = {
  dataTestId,
  disabled: false,
  condition: mockCondition,
  valueOptions: mockOptions,
  onUpdateCondition: mockOnUpdateCondition,
  isLoadingData: () => false,
  onLoadMore: mockOnLoadMore,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<GroupConditionValueProps>): RenderType => {
  return render(
    <GroupConditionValue
      {...defaultProps}
      {...props}
    />,
  );
};

describe('GroupConditionValue', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders Input for string dataType', async () => {
    renderComponent();

    const input = screen.getByTestId(dataTestIdInput('string', 'input'));
    const select = screen.queryByTestId(dataTestIdInput('string', 'select__input'));

    expect(input).toBeInTheDocument();
    expect(select).not.toBeInTheDocument();

    await userEvent.type(input, 'new value');

    await waitFor(
      () => {
        expect(input).toHaveValue('new value');
        expect(mockOnUpdateCondition).toHaveBeenCalledWith({ value: 'new value' });
      },
      { timeout: 1000 },
    );
  });

  it('renders Select for string dataType', async () => {
    renderComponent({ condition: { ...mockCondition, objectToEval: 'User' } });

    const select = screen.getByTestId(dataTestIdInput('string', 'select__input'));
    const input = screen.queryByTestId(dataTestIdInput('string', 'input'));

    expect(select).toBeInTheDocument();
    expect(input).not.toBeInTheDocument();

    await userEvent.click(select);
    const [firstOption] = screen.getAllByRole('option');

    await userEvent.click(firstOption);

    expect(mockOnUpdateCondition).toHaveBeenCalled();
  });

  it('renders Input for numeric dataType', async () => {
    renderComponent({ condition: { ...mockCondition, dataType: 'numeric' } });

    const input = screen.getByTestId(dataTestIdInput('numeric', 'input'));

    expect(input).toBeInTheDocument();

    await userEvent.type(input, '12345');

    await waitFor(
      () => {
        expect(input).toHaveValue('12345');
        expect(mockOnUpdateCondition).toHaveBeenCalledWith({ value: '12345' });
      },
      { timeout: 1000 },
    );
  });

  it('renders Date for date dataType', async () => {
    renderComponent({ condition: { ...mockCondition, dataType: 'date', value: undefined } });

    const datepicker = screen.getByTestId(dataTestIdInput('date', 'input'));

    expect(datepicker).toBeInTheDocument();
  });

  it('renders Select for boolean dataType', async () => {
    renderComponent({ condition: { ...mockCondition, dataType: 'boolean', value: undefined } });

    const select = screen.getByTestId(dataTestIdInput('boolean', 'select__input'));

    expect(select).toBeInTheDocument();

    await userEvent.click(select);
    const [firstOption] = screen.getAllByRole('option');

    await userEvent.click(firstOption);

    expect(mockOnUpdateCondition).toHaveBeenCalled();
  });

  it('renders Select for list dataType', async () => {
    renderComponent({ condition: { ...mockCondition, dataType: 'list', value: undefined } });

    const select = screen.getByTestId(dataTestIdInput('list', 'select__input'));

    expect(select).toBeInTheDocument();

    await userEvent.click(select);
    const [firstOption] = screen.getAllByRole('option');

    await userEvent.click(firstOption);

    expect(mockOnUpdateCondition).toHaveBeenCalled();
  });

  it('renders the component as disabled', async () => {
    renderComponent({ disabled: true });

    const input = screen.getByTestId(dataTestIdInput('string', 'input'));

    expect(input).toBeDisabled();
  });
});
