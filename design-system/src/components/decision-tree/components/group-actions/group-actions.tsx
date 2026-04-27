import { useCallback } from 'react';

import { ArrowRight } from '@carbon/icons-react';

import { Select } from '@components/select';
import { SelectWithPagination } from '@components/select-with-pagination';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { selectOverrides } from '../group-conditions/group-conditions.styles';

import { styles } from './group-actions.styles';

import type {
  ActionSelectOptionsType,
  TargetIdSelectOptionsType,
  DistributionModeSelectOptionsType,
} from '@components/decision-tree/hooks';
import type { ActionType } from '@components/decision-tree/interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export type GroupActionsProps = WithTestId<{
  action: ActionType;
  isActionValueDisabled: boolean;
  isLoadingMore: boolean;
  options: ActionSelectOptionsType[];
  values: TargetIdSelectOptionsType[];
  distributionsModeOptions: DistributionModeSelectOptionsType[];
  showDistributionMode?: boolean;
  onLoadMore(): void;
  onUpdateAction(body: Partial<ActionType>): void;
}>;

/**
 * Component designed to render a set of dropdown selectors for defining actions within a decision tree.
 * It allows users to select actions and potentially corresponding parameters or targets for those actions.
 */
export const GroupActions = ({
  dataTestId,
  action: { actionType, targetId, targetObject, distributionMode },
  isActionValueDisabled,
  isLoadingMore,
  options,
  values,
  distributionsModeOptions,
  showDistributionMode = false,
  onLoadMore,
  onUpdateAction,
}: GroupActionsProps): JSX.Element => {
  const { t } = useTranslation();
  const { containerStyles, conditionContainerStyles } = useCss(styles);

  /** Handle changes to the action type */
  const handleActionTypeChange = useCallback(
    (values: ActionSelectOptionsType[]) =>
      onUpdateAction({
        actionType: values[0]?.id,
        targetId: undefined,
        targetObject: undefined,
        distributionMode: undefined,
      }),
    [onUpdateAction],
  );

  /** Handle changes to the action target */
  const handleActionTargetChange = useCallback(
    ([selectedValue]: TargetIdSelectOptionsType[]) => {
      if (selectedValue) {
        const { id, targetObject = 'decision_workflow_template' } = selectedValue;

        onUpdateAction({
          targetId: id,
          targetObject,
          distributionMode: distributionsModeOptions[0]?.id,
        });
      }
    },
    [distributionsModeOptions, onUpdateAction],
  );

  const handleDistributionModeChange = useCallback(
    ([distributionMode]: DistributionModeSelectOptionsType[]) =>
      onUpdateAction({ targetId, targetObject, distributionMode: distributionMode.id }),
    [onUpdateAction, targetId, targetObject],
  );

  return (
    <div className={containerStyles}>
      <div className={conditionContainerStyles}>
        <Select
          size="compact"
          data-testid={`${dataTestId}__actionType--select`}
          overrides={selectOverrides}
          placeholder={t('decisionTree.selectAction')}
          options={options}
          value={actionType ? [{ id: actionType }] : []}
          onChange={handleActionTypeChange}
        />
      </div>

      <div className={conditionContainerStyles}>
        <ArrowRight />
      </div>

      <div className={conditionContainerStyles}>
        <SelectWithPagination
          size="compact"
          data-testid={`${dataTestId}__targetId--select`}
          overrides={selectOverrides}
          disabled={isActionValueDisabled}
          options={values}
          value={targetId ? [{ id: targetId }] : []}
          isLoadingMore={isLoadingMore}
          onLoadMore={onLoadMore}
          onChange={handleActionTargetChange}
        />
      </div>

      {showDistributionMode && (
        <Select
          size="compact"
          data-testid={`${dataTestId}__distributionMode--select`}
          overrides={selectOverrides}
          placeholder={t('decisionTree.selectAction')}
          options={distributionsModeOptions}
          value={[{ id: distributionMode }]}
          onChange={handleDistributionModeChange}
        />
      )}
    </div>
  );
};
