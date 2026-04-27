import { useCallback, useContext } from 'react';

import { GroupActions } from '../components';
import { GroupActionNotification } from '../components/group-action-notification';
import { ActionGroupContext } from '../contexts/action-group.context';
import { RuleGroupContext } from '../contexts/rule-group.context';
import { useActionOptions, useActionValues } from '../hooks';
import { useDecisionTreeContext } from '../hooks/use-decision-tree-context.hook';
import { useDistributionModeOptions } from '../hooks/use-distribution-mode-options.hook';
import { getDistributionModeVisibility, getOptionsConfig } from '../utils/decision-tree.utils';

import type { ActionType } from '../interfaces';

/**
 * This component manages the state and options for group actions within a decision tree.
 * It utilizes custom hooks to retrieve action options and corresponding values
 */
export const GroupActionsContainer = (): JSX.Element => {
  const { baseTestId, groups, users, workflowTemplates, isDistributionModeEnabled, onChange } =
    useDecisionTreeContext();
  const { ruleGroupId, ruleGroupIndex } = useContext(RuleGroupContext);
  const { actionGroup, actionGroupId, actionGroupIndex } = useContext(ActionGroupContext);

  const { actionType: actionTypeId, targetObject, distributionMode } = actionGroup ?? {};

  const isActionValueDisabled = actionTypeId === undefined;

  const showDistributionMode =
    isDistributionModeEnabled && getDistributionModeVisibility(targetObject, actionTypeId);

  const handleUpdateAction = useCallback(
    (body: Partial<ActionType>) =>
      ruleGroupId &&
      actionGroupId &&
      onChange({
        type: 'UPDATE_ACTION',
        payload: { ruleGroupId, actionId: actionGroupId, body },
      }),
    [actionGroupId, onChange, ruleGroupId],
  );

  const {
    options: usersOptions,
    isLoadingMore: usersIsLoadingMore,
    onLoadMore: usersOnLoadMore,
  } = getOptionsConfig(users);

  const {
    options: groupsOptions,
    isLoadingMore: groupsIsLoadingMore,
    onLoadMore: groupsOnLoadMore,
  } = getOptionsConfig(groups);

  const {
    options: workflowTemplatesOptions,
    isLoadingMore: workflowTemplatesIsLoadingMore,
    onLoadMore: workflowTemplatesOnLoadMore,
  } = getOptionsConfig(workflowTemplates);

  const distributionsModes = useDistributionModeOptions();
  const options = useActionOptions();
  const values = useActionValues({
    actionIdType: actionGroup?.actionType,
    users: usersOptions,
    groups: groupsOptions,
    workflowTemplates: workflowTemplatesOptions,
  });

  /** Handle the load of more options based on the actionTypeId */
  const handleLoadMore = (): void => {
    if (actionTypeId === 'assign_taker') {
      usersOnLoadMore();
      groupsOnLoadMore();
    }
    if (actionTypeId === 'start_workflow') {
      workflowTemplatesOnLoadMore();
    }
  };

  const isLoadingMore =
    actionTypeId === 'assign_taker'
      ? usersIsLoadingMore || groupsIsLoadingMore
      : workflowTemplatesIsLoadingMore;

  return (
    <div>
      {actionGroup && (
        <GroupActions
          dataTestId={`${baseTestId}__${ruleGroupIndex}-actions-${actionGroupIndex}`}
          action={actionGroup}
          options={options}
          values={values}
          distributionsModeOptions={distributionsModes}
          showDistributionMode={showDistributionMode}
          isActionValueDisabled={isActionValueDisabled}
          onLoadMore={handleLoadMore}
          isLoadingMore={isLoadingMore}
          onUpdateAction={handleUpdateAction}
        />
      )}
      {showDistributionMode && <GroupActionNotification distributionMode={distributionMode} />}
    </div>
  );
};
