import { TrashCan } from '@carbon/icons-react';

import { Button } from '@components/button';
import { useTranslation } from '@components/utils';

import { GroupLayout } from './group-layout';
import { GroupRules } from './group-rules';

import type { TreeRuleContextValues } from '../contexts/tree-rule.context';
import type { TreeRuleType } from '../interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

interface TreeRuleProps extends WithTestId<
  Pick<
    TreeRuleContextValues,
    | 'onAddCondition'
    | 'onUpdateCondition'
    | 'onUpdateConditionLogicalConnector'
    | 'onDeleteCondition'
  >
> {
  data: TreeRuleType;
  isFirstGroup: boolean;
  onDeleteGroupRule?(groupRuleId: number): void;
}

/**
 * Component that represents a group rule within a decision tree structure. It encapsulates the logic and UI for managing
 * a group of conditions, including adding new conditions, updating existing ones,
 * and deleting the entire group if necessary.
 */
export const TreeRule = ({
  dataTestId,
  data: { id: treeRuleId, logicConnector: groupLogicConnector, conditions },
  isFirstGroup,
  onDeleteGroupRule,
  ...props
}: TreeRuleProps): JSX.Element => {
  const { t } = useTranslation();
  const isDeleteGroupRuleVisible = !isFirstGroup;
  const isAddConditionDisabled = conditions.length >= 2;

  return (
    <GroupLayout
      header={{
        title: t('decisionTree.groupTitle', {
          letter: isFirstGroup ? 'A' : 'B',
        }),
        subtitle: t('decisionTree.groupSubtitle'),
        action: isDeleteGroupRuleVisible ? (
          <Button
            data-testid={`${dataTestId}--delete`}
            kind="tertiary"
            size="32px"
            startEnhancer={<TrashCan />}
            onClick={() => onDeleteGroupRule?.(treeRuleId)}
          >
            {t('decisionTree.deleteGroup')}
          </Button>
        ) : undefined,
      }}
    >
      <GroupRules
        dataTestId={dataTestId}
        logicConnector={groupLogicConnector}
        conditions={conditions}
        disabled={isAddConditionDisabled}
        {...props}
      />
    </GroupLayout>
  );
};
