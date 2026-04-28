import { ConditionType, GroupConditionDataType } from '../../interfaces';
import { FieldSelectOptionType, ObjectToEvalSelectOptionType, OperatorSelectOptionsType } from '../../hooks';
import { CommonOption } from '../../../select/next';
import { WithTestId } from '../../../../interfaces/common.interfaces';
type GroupConditionsProps = WithTestId<{
    condition: ConditionType;
    isDeleteDisabled: boolean;
    isValueFieldEnabled: boolean;
    areValueFieldsEnabled: boolean;
    isObjectToEvalSelected: boolean;
    objectToEvalOptions: ObjectToEvalSelectOptionType[];
    fieldOptions: FieldSelectOptionType[];
    operatorOptions: OperatorSelectOptionsType[];
    valueOptions: CommonOption[];
    isLoadingData(type: GroupConditionDataType): boolean;
    onDeleteCondition(): void;
    onUpdateCondition(body: Partial<ConditionType>): void;
    onLoadMore(type: GroupConditionDataType): void;
}>;
/**
 * Component responsible for rendering a single condition within a decision tree group.
 * It provides a structured layout for defining the components of a condition, such as the object,
 * type, and operator. Additionally, it includes an option to delete the
 * condition unless it is explicitly disabled.
 */
export declare const GroupConditions: ({ dataTestId, condition, isDeleteDisabled, isValueFieldEnabled, areValueFieldsEnabled, isObjectToEvalSelected, objectToEvalOptions, fieldOptions, operatorOptions, valueOptions, isLoadingData, onDeleteCondition, onUpdateCondition, onLoadMore, }: GroupConditionsProps) => JSX.Element;
export {};
