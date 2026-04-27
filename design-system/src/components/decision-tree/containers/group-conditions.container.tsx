import { useCallback, useContext } from 'react';

import { GroupConditions } from '../components/group-conditions';
import { ConditionGroupContext } from '../contexts/condition-group.context';
import { RuleGroupContext } from '../contexts/rule-group.context';
import { TreeRuleContext } from '../contexts/tree-rule.context';
import {
  useFieldOptions,
  useObjectToEvalOptions,
  useOperatorOptions,
  useValueOptions,
} from '../hooks';
import { useDecisionTreeContext } from '../hooks/use-decision-tree-context.hook';
import { getOptionsConfig } from '../utils/decision-tree.utils';

import type { ConditionType, GroupConditionDataType } from '../interfaces';

/**
 * Container that manages the state and options for individual conditions within a group
 * in a decision tree.
 *
 * It utilizes custom hooks to fetch options for objects to evaluate, fields, operators,
 * and values based on the current condition's context.
 */
export const GroupConditionsContainer = (): JSX.Element => {
  const { baseTestId, dynamicAttributes, groups, profiles } = useDecisionTreeContext();
  const { ruleGroupIndex } = useContext(RuleGroupContext);
  const { treeRuleIndex, onUpdateCondition, onDeleteCondition } = useContext(TreeRuleContext);
  const { conditionGroup, conditionGroupIndex } = useContext(ConditionGroupContext);

  const { id, objectToEval, field, operator, dataType = 'string' } = conditionGroup || {};
  const isFirstGroup = ruleGroupIndex === 0;
  const isObjectToEvalSelected = !!objectToEval;
  const areValueFieldsEnabled = !!field;
  const isDeleteDisabled = isFirstGroup && conditionGroupIndex === 0;
  const isValueFieldEnabled = operator === undefined;

  const dataTestId = `${baseTestId}__${ruleGroupIndex}-group-rules-${treeRuleIndex}--conditions-${conditionGroupIndex}`;

  const {
    options: dynamicAttributesOptions,
    isLoadingMore: dynamicAttributesIsLoadingMore,
    onLoadMore: dynamicAttributesOnLoadMore,
  } = getOptionsConfig(dynamicAttributes);

  const {
    options: groupsOptions,
    isLoadingMore: groupsIsLoadingMore,
    onLoadMore: groupsOnLoadMore,
  } = getOptionsConfig(groups);

  const {
    options: profilesOptions,
    isLoadingMore: profilesIsLoadingMore,
    onLoadMore: profilesOnLoadMore,
  } = getOptionsConfig(profiles);

  /** Handler function that loads more options for a specific type */
  const handleLoadMore = (type: GroupConditionDataType): void => {
    if (type === 'dynamicAttributes') {
      dynamicAttributesOnLoadMore();
    }
    if (type === 'groups') {
      groupsOnLoadMore();
    }
    if (type === 'profiles') {
      profilesOnLoadMore();
    }
  };

  /** Checks if data is loading for a specific type */
  const isLoadingData = useCallback(
    (type: GroupConditionDataType): boolean => {
      if (type === 'dynamicAttributes') {
        return dynamicAttributesIsLoadingMore;
      }
      if (type === 'groups') {
        return groupsIsLoadingMore;
      }
      if (type === 'profiles') {
        return profilesIsLoadingMore;
      }

      return false;
    },
    [dynamicAttributesIsLoadingMore, groupsIsLoadingMore, profilesIsLoadingMore],
  );

  const objectToEvalOptions = useObjectToEvalOptions();

  const fieldOptions = useFieldOptions({
    objectToEval,
    dynamicAttributes: dynamicAttributesOptions,
  });

  const operatorOptions = useOperatorOptions({ dataType });

  const values = useValueOptions({
    objectToEval,
    field,
    dataType,
    groups: groupsOptions,
    profiles: profilesOptions,
    dynamicAttributes: dynamicAttributesOptions,
  });

  /** Handler function that updates the values of the condition */
  const handleOnUpdateCondition = useCallback(
    (body: Partial<ConditionType>) =>
      conditionGroup && id && onUpdateCondition(id, { ...conditionGroup, ...body }),
    [id, conditionGroup, onUpdateCondition],
  );

  /** Handler function that deletes a condition */
  const handleOnDeleteCondition = useCallback(
    () => conditionGroup && id && onDeleteCondition(id),
    [id, conditionGroup, onDeleteCondition],
  );

  return conditionGroup ? (
    <GroupConditions
      dataTestId={dataTestId}
      objectToEvalOptions={objectToEvalOptions}
      fieldOptions={fieldOptions}
      operatorOptions={operatorOptions}
      valueOptions={values}
      condition={conditionGroup}
      isDeleteDisabled={isDeleteDisabled}
      isValueFieldEnabled={isValueFieldEnabled}
      areValueFieldsEnabled={areValueFieldsEnabled}
      isObjectToEvalSelected={isObjectToEvalSelected}
      onDeleteCondition={handleOnDeleteCondition}
      onUpdateCondition={handleOnUpdateCondition}
      isLoadingData={isLoadingData}
      onLoadMore={handleLoadMore}
    />
  ) : (
    <></>
  );
};
