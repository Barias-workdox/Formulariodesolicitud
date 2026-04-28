import { ConditionType, GroupConditionDataType } from '../../interfaces';
import { CommonOption } from '../../../select/next';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type GroupConditionValueProps = WithTestId<{
    condition: ConditionType;
    disabled: boolean;
    valueOptions: CommonOption[];
    isLoadingData(type: GroupConditionDataType): boolean;
    onLoadMore(type: GroupConditionDataType): void;
    onUpdateCondition(updates: Partial<ConditionType>): void;
}>;
/**
 * Component that renders the appropriate input element based on the dataType provided.
 * It ensures that users can interact with the input in a way that matches the expected
 * data type, enhancing the flexibility and usability of the decision tree interface
 */
export declare const GroupConditionValue: ({ dataTestId, disabled, condition: { objectToEval, dataType, field, value }, valueOptions, isLoadingData, onLoadMore, onUpdateCondition, }: GroupConditionValueProps) => JSX.Element;
