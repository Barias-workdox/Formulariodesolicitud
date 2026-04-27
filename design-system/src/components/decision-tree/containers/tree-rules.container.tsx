import { useContext } from 'react';

import { useTranslation } from '@components/utils';

import { GroupLayout, GroupResolutions } from '../components';
import { ActionGroupContext } from '../contexts/action-group.context';
import { RuleGroupContext } from '../contexts/rule-group.context';
import { TreeRuleProvider } from '../providers/tree-rule.provider';

import { GroupActionsContainer } from './group-actions.container';
import { TreeRuleContainer } from './tree-rule.container';

/**
 * Container component that manages and displays the tree rules within a decision tree rule group.
 * It handles the rendering of individual group rules, their conditions, and associated actions.
 */
export const RuleGroupContainer = (): JSX.Element => {
  const { t } = useTranslation();

  const { ruleGroup } = useContext(RuleGroupContext);

  const { treeRules = [], actions = [] } = ruleGroup ?? {};

  return (
    <>
      {treeRules.map((treeRule, treeRuleIndex) => (
        <TreeRuleProvider
          key={treeRule.id}
          treeRule={treeRule}
          treeRuleIndex={treeRuleIndex}
        >
          <TreeRuleContainer />
        </TreeRuleProvider>
      ))}

      <GroupResolutions />

      <GroupLayout
        header={{
          title: t('decisionTree.actions'),
          subtitle: t('decisionTree.actionsSubtitle'),
        }}
      >
        {actions.map((action, actionIndex) => (
          <ActionGroupContext.Provider
            key={action.id}
            value={{
              actionGroup: action,
              actionGroupId: action.id,
              actionGroupIndex: actionIndex,
            }}
          >
            <GroupActionsContainer key={action.id} />
          </ActionGroupContext.Provider>
        ))}
      </GroupLayout>
    </>
  );
};
