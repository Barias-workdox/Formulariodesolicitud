import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen } from '@test/test-utils';

import { GroupRuleHeaderActions } from '../group-rule-header-actions';

import type { GroupRuleHeaderActionsProps } from '../group-rule-header-actions';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const dataTestId = 'test';
const mockOnDelete = vi.fn();
const mockOnAddGroup = vi.fn();

const defaultProps: GroupRuleHeaderActionsProps = {
  dataTestId,
  isGroupRuleValid: true,
  disabledAdd: false,
  onAddGroup: mockOnAddGroup,
  onDelete: mockOnDelete,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<GroupRuleHeaderActionsProps>): RenderType => {
  return render(
    <GroupRuleHeaderActions
      {...defaultProps}
      {...props}
    />,
  );
};

describe('GroupRuleHeaderActions', () => {
  it('should render the component with valid state correctly', () => {
    renderComponent();

    expect(screen.getByText(t('decisionTree.groupRuleComplete'))).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}--valid-icon`)).toBeInTheDocument();
  });

  it('should render the component with invalid state correctly', () => {
    renderComponent({ isGroupRuleValid: false });

    expect(screen.getByText(t('decisionTree.groupRuleIncomplete'))).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}--invalid-icon`)).toBeInTheDocument();
  });

  it('should call the onDelete function correctly', async () => {
    renderComponent();

    const deleteBtn = screen.getByTestId(`${dataTestId}--delete-btn`);

    expect(deleteBtn).toBeInTheDocument();

    await userEvent.click(deleteBtn);
    expect(mockOnDelete).toHaveBeenCalled();
  });
});
