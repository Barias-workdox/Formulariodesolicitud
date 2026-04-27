import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, waitFor } from '@test/test-utils';

import { DecisionTree } from '../decision-tree';

import {
  decisionTreeDynamicAttributesMock,
  decisionTreeGroupsMock,
  decisionTreeProfilesMock,
  decisionTreeUsersMock,
  decisionTreeWorkflowTemplatesMock,
} from './__mocks__/decision-tree-options.mock';
import { decisionTreeRulesMock } from './__mocks__/decision-tree.mock';

import type { DecisionTreeProps } from '../decision-tree';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const dataTestId = 'test';

const mockOnChange = vi.fn();

const defaultProps: DecisionTreeProps = {
  dataTestId,
  rules: decisionTreeRulesMock,
  users: decisionTreeUsersMock,
  groups: decisionTreeGroupsMock,
  profiles: decisionTreeProfilesMock,
  dynamicAttributes: decisionTreeDynamicAttributesMock,
  workflowTemplates: decisionTreeWorkflowTemplatesMock,
  onChange: mockOnChange,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DecisionTreeProps>): RenderType => {
  return render(
    <DecisionTree
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DecisionTree', () => {
  it('should render the component successfully', async () => {
    renderComponent();

    expect(screen.getByText(t('decisionTree.rule', { number: 1 }))).toBeInTheDocument();
    expect(screen.getAllByText(t('decisionTree.groupSubtitle'))[0]).toBeInTheDocument();
    expect(screen.getByTestId('test__0-group-rules-0-buttons--or-btn')).toBeInTheDocument();
    expect(
      screen.getByTestId('test__0-group-rules-0--conditions-0__objectToEval--select'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('test__0-group-rules-0--conditions-0__field--select'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('test__0-group-rules-0--conditions-0__operator--select'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('test__0-group-rules-0--conditions-0__value--string-select'),
    ).toBeInTheDocument();
    expect(screen.getByText(t('decisionTree.then'))).toBeInTheDocument();
    expect(screen.getByText(t('decisionTree.addGroup'))).toBeInTheDocument();
    expect(screen.getByTestId('test__0-actions-0__actionType--select')).toBeInTheDocument();
    expect(screen.getByTestId('test__0-actions-0__targetId--select')).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText(t('decisionTree.groupRuleComplete'))).toBeInTheDocument(),
    );
  });

  it('should execute the onChange function with the DELETE_RULE_GROUP action', async () => {
    renderComponent();

    const deleteBtn = screen.getByTestId('test__0-header--delete-btn');

    expect(deleteBtn).toBeInTheDocument();

    await userEvent.click(deleteBtn);

    const modalConfirmationButton = screen.getByText(t('general.continue'));

    expect(modalConfirmationButton).toBeInTheDocument();

    await userEvent.click(modalConfirmationButton);

    expect(mockOnChange).toHaveBeenCalledWith({
      type: 'DELETE_RULE_GROUP',
      payload: { ruleGroupId: 1 },
    });
  });

  it('should execute the onChange function with the DELETE_TREE_RULE action', async () => {
    renderComponent();

    const deleteBtn = screen.getByText(t('decisionTree.deleteGroup'));

    expect(deleteBtn).toBeInTheDocument();

    await userEvent.click(deleteBtn);

    expect(mockOnChange).toHaveBeenCalledWith({
      type: 'DELETE_TREE_RULE',
      payload: { ruleGroupId: 1, treeRuleId: 2 },
    });
  });
});
