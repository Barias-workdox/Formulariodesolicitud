import { useContext, useEffect, useState } from 'react';

import { GroupRuleHeaderActions, ModalDeleteGroupRule } from '../components';
import { RuleGroupContext } from '../contexts/rule-group.context';
import { useDecisionTreeContext } from '../hooks/use-decision-tree-context.hook';
import { groupRuleObjectSchema } from '../utils/decision-tree.utils';

/** Manages the validation state of a rule object against a schema */
export const RuleGroupHeaderActionsContainer = (): JSX.Element => {
  const [isGroupRuleValid, setIsGroupRuleValid] = useState(false);
  const [isDeleteGroupRuleModalOpen, setIsDeleteGroupRuleModalOpen] = useState(false);

  const { baseTestId } = useDecisionTreeContext();
  const {
    ruleGroup,
    ruleGroupId,
    ruleGroupIndex: ruleIndex,
    onAddRuleGroup,
    onDeleteRuleGroup,
  } = useContext(RuleGroupContext);

  const { treeRules = [] } = ruleGroup ?? {};

  const isAddGroupDisabled = treeRules.length >= 2;

  const dataTestId = `${baseTestId}__${ruleIndex}-header`;

  /** Validates the object schema for the rule provided */
  useEffect(() => {
    groupRuleObjectSchema
      .validate(ruleGroup)
      .then(() => setIsGroupRuleValid(true))
      .catch(() => setIsGroupRuleValid(false));
  }, [ruleGroup]);

  return (
    <>
      <GroupRuleHeaderActions
        dataTestId={dataTestId}
        isGroupRuleValid={isGroupRuleValid}
        disabledAdd={isAddGroupDisabled}
        onDelete={() => setIsDeleteGroupRuleModalOpen(true)}
        onAddGroup={onAddRuleGroup}
      />

      <ModalDeleteGroupRule
        dataTestId={`${dataTestId}__modal-delete-group-rule`}
        isOpen={isDeleteGroupRuleModalOpen}
        onClose={() => setIsDeleteGroupRuleModalOpen(false)}
        onDelete={() => ruleGroupId && onDeleteRuleGroup(ruleGroupId)}
      />
    </>
  );
};
