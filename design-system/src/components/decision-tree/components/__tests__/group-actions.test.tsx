import { userEvent } from '@testing-library/user-event';

import { render, screen } from '@test/test-utils';
import '@test/__mocks__/use-virtualizer.mock';

import { decisionTreeRulesMock } from '../../__tests__/__mocks__/decision-tree.mock';
import { GroupActions } from '../group-actions';

import type { GroupActionsProps } from '../group-actions';
import type { ActionIdType } from '@components/decision-tree/interfaces';
import type { CommonOption } from '@components/select/next';
import type { RenderType } from '@test/test-utils';

const [
  {
    actions: [actionMock],
  },
] = decisionTreeRulesMock;

const dataTestId = 'test';
const optionsMock: CommonOption<ActionIdType>[] = [{ id: 'assign_taker', label: 'Option 1' }];
const valuesMock: CommonOption[] = [{ id: 'value-1', label: 'Option 1' }];
const mockOnUpdateAction = vi.fn();
const mockOnLoadMore = vi.fn();

const defaultProps: GroupActionsProps = {
  dataTestId,
  action: actionMock,
  isActionValueDisabled: false,
  distributionsModeOptions: [],
  isLoadingMore: false,
  options: optionsMock,
  values: valuesMock,
  onLoadMore: mockOnLoadMore,
  onUpdateAction: mockOnUpdateAction,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<GroupActionsProps>): RenderType => {
  return render(
    <GroupActions
      {...defaultProps}
      {...props}
    />,
  );
};

describe('GroupActions', () => {
  it('should render the component successfully', async () => {
    renderComponent();

    const actionTypeSelect = screen.getByTestId(`${dataTestId}__actionType--select__input`);
    const targetIdSelect = screen.getByTestId(`${dataTestId}__targetId--select__input`);

    expect(actionTypeSelect).toBeInTheDocument();
    expect(targetIdSelect).toBeInTheDocument();

    await userEvent.click(actionTypeSelect);
    const [firstOption] = screen.getAllByRole('option');

    await userEvent.click(firstOption);

    await userEvent.click(targetIdSelect);
    const [firstValue] = screen.getAllByRole('option');

    await userEvent.click(firstValue);

    expect(mockOnUpdateAction).toHaveBeenCalledTimes(2);
  });

  it('should display the targetId select as disabled', () => {
    renderComponent({ isActionValueDisabled: true });

    const targetIdSelect = screen.getByTestId(`${dataTestId}__targetId--select__input`);

    expect(targetIdSelect).toBeDisabled();
  });
});
