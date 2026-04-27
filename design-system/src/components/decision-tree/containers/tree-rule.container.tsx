import { useContext } from 'react';

import { themedStyled } from '@themes/utilities';

import { ConditionalButtons } from '../components';
import { TreeRule } from '../components/tree-rule';
import { RuleGroupContext } from '../contexts/rule-group.context';
import { TreeRuleContext } from '../contexts/tree-rule.context';
import { useDecisionTreeContext } from '../hooks';

const StyledConditionalButtonsWrapper = themedStyled('div', () => ({
  display: 'flex',
  justifyContent: 'center',
}));

/**
 * Container component that manages and displays the tree rules within a decision tree rule group.
 * It handles the rendering of individual group rules, their conditions, and associated actions.
 */
export const TreeRuleContainer = (): JSX.Element => {
  const { baseTestId } = useDecisionTreeContext();
  const { ruleGroup, ruleGroupIndex } = useContext(RuleGroupContext);
  const {
    treeRule,
    treeRuleId,
    treeRuleIndex,
    onAddCondition,
    onDeleteCondition,
    onDeleteGroupRule,
    onUpdateCondition,
    onUpdateConditionLogicalConnector,
    onUpdateLogicConnector,
  } = useContext(TreeRuleContext);

  const { treeRules = [], logicConnector } = ruleGroup ?? {};

  const areConditionalButtonsVisible = treeRuleIndex !== treeRules.length - 1;

  if (!treeRule) {
    return <></>;
  }

  return (
    <>
      <TreeRule
        dataTestId={`${baseTestId}__${ruleGroupIndex}-group-rules-${treeRuleIndex}`}
        data={treeRule}
        isFirstGroup={treeRuleIndex === 0}
        onAddCondition={onAddCondition}
        onUpdateCondition={onUpdateCondition}
        onDeleteCondition={onDeleteCondition}
        onUpdateConditionLogicalConnector={onUpdateConditionLogicalConnector}
        onDeleteGroupRule={onDeleteGroupRule}
      />

      {areConditionalButtonsVisible && logicConnector && treeRuleId && (
        <StyledConditionalButtonsWrapper>
          <ConditionalButtons
            dataTestId={`${baseTestId}__${ruleGroupIndex}-group-buttons-${treeRuleIndex}`}
            logicConnector={logicConnector}
            onUpdateLogicConnector={onUpdateLogicConnector}
          />
        </StyledConditionalButtonsWrapper>
      )}
    </>
  );
};
