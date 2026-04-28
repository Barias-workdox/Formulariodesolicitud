import { ActionSelectOptionsType, TargetIdSelectOptionsType, DistributionModeSelectOptionsType } from '../../hooks';
import { ActionType } from '../../interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
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
export declare const GroupActions: ({ dataTestId, action: { actionType, targetId, targetObject, distributionMode }, isActionValueDisabled, isLoadingMore, options, values, distributionsModeOptions, showDistributionMode, onLoadMore, onUpdateAction, }: GroupActionsProps) => JSX.Element;
