import { AddAlt } from '@carbon/icons-react';

import { Button } from '@components/button';
import { ConditionGroupContext } from '@components/decision-tree/contexts/condition-group.context';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { GroupConditionsContainer } from '../../containers';
import { ConditionalButtons } from '../conditional-buttons';

import { styles } from './group-rules.styles';

import type { LogicConnectorType, TreeRuleType } from '../../interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export type GroupRulesProps = Pick<TreeRuleType, 'conditions' | 'logicConnector'> &
  WithTestId<{
    disabled: boolean;
    onAddCondition(): void;
    onUpdateConditionLogicalConnector(logicConnector: LogicConnectorType): void;
  }>;

/**
 * Component that is responsible for rendering a list of conditions within a group in a
 * decision tree structure. It allows users to add, manage, and organize conditions within a group,
 * with the option to combine conditions using logical operators
 */
export const GroupRules = ({
  dataTestId,
  conditions,
  disabled,
  logicConnector,
  onAddCondition,
  onUpdateConditionLogicalConnector,
}: GroupRulesProps): JSX.Element => {
  const { t } = useTranslation();
  const { containerStyles, actionContainerStyles } = useCss(styles);

  return (
    <div className={containerStyles}>
      {conditions.map((condition, conditionIndex) => (
        <ConditionGroupContext.Provider
          key={condition.id}
          value={{
            conditionGroup: condition,
            conditionGroupId: condition.id,
            conditionGroupIndex: conditionIndex,
          }}
        >
          <div key={condition.id}>
            <GroupConditionsContainer />

            {conditionIndex !== conditions.length - 1 && (
              <ConditionalButtons
                dataTestId={`${dataTestId}-buttons`}
                logicConnector={logicConnector}
                onUpdateLogicConnector={onUpdateConditionLogicalConnector}
              />
            )}
          </div>
        </ConditionGroupContext.Provider>
      ))}

      <div className={actionContainerStyles}>
        <Button
          data-testid={`${dataTestId}--add-condition-btn`}
          kind="secondary"
          size="compact"
          disabled={disabled}
          startEnhancer={<AddAlt />}
          onClick={onAddCondition}
        >
          {t('decisionTree.addCondition')}
        </Button>
      </div>
    </div>
  );
};
