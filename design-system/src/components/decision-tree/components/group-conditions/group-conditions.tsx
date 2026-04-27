import { useCallback } from 'react';

import { ArrowRight, TrashCan } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { Select } from '@components/select';
import { SelectWithPagination } from '@components/select-with-pagination';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { GroupConditionFieldLabel } from '../group-condition-field-label';
import { GroupConditionValue } from '../group-condition-value';

import { selectOverrides, styles } from './group-conditions.styles';

import type { ConditionType, GroupConditionDataType } from '../../interfaces';
import type {
  FieldSelectOptionType,
  ObjectToEvalSelectOptionType,
  OperatorSelectOptionsType,
} from '@components/decision-tree/hooks';
import type { CommonOption } from '@components/select/next';
import type { WithTestId } from '@interfaces/common.interfaces';

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

const defaultConditionValues: Partial<ConditionType> = {
  field: undefined,
  operator: undefined,
  value: undefined,
  dataType: undefined,
};

/**
 * Component responsible for rendering a single condition within a decision tree group.
 * It provides a structured layout for defining the components of a condition, such as the object,
 * type, and operator. Additionally, it includes an option to delete the
 * condition unless it is explicitly disabled.
 */
export const GroupConditions = ({
  dataTestId,
  condition,
  isDeleteDisabled,
  isValueFieldEnabled,
  areValueFieldsEnabled,
  isObjectToEvalSelected,
  objectToEvalOptions,
  fieldOptions,
  operatorOptions,
  valueOptions,
  isLoadingData,
  onDeleteCondition,
  onUpdateCondition,
  onLoadMore,
}: GroupConditionsProps): JSX.Element => {
  const { t } = useTranslation();
  const { containerStyles, conditionsContainerStyles, conditionContainerStyles } = useCss(styles);

  const { objectToEval, field, operator } = condition;

  /** Handler for changes to the object being evaluated */
  const handleObjectToEvalChange = useCallback(
    ([objectToEval]: ObjectToEvalSelectOptionType[]): void =>
      onUpdateCondition({
        ...defaultConditionValues,
        objectToEval: objectToEval?.id,
      }),
    [onUpdateCondition],
  );

  /** Handler for changes to the selected field */
  const handleSelectedFieldChange = useCallback(
    ([selectedField]: FieldSelectOptionType[]): void => {
      if (selectedField && typeof selectedField === 'object' && 'dataType' in selectedField) {
        const { id: fieldId, dataType } = selectedField as FieldSelectOptionType;

        onUpdateCondition({
          ...defaultConditionValues,
          field: fieldId,
          dataType,
        });
      } else {
        onUpdateCondition(defaultConditionValues);
      }
    },
    [onUpdateCondition],
  );

  return (
    <div className={containerStyles}>
      <div className={conditionsContainerStyles}>
        <div className={conditionContainerStyles}>
          <Text
            variant="bodySmall"
            margin={0}
          >
            {t('decisionTree.if')}
          </Text>
        </div>

        <div className={conditionContainerStyles}>
          <Select
            size="compact"
            data-testid={`${dataTestId}__objectToEval--select`}
            overrides={selectOverrides}
            placeholder={t('decisionTree.selectObject')}
            options={objectToEvalOptions}
            value={objectToEval ? [{ id: objectToEval }] : []}
            onChange={handleObjectToEvalChange}
          />
        </div>

        <div className={conditionContainerStyles}>
          <ArrowRight />
        </div>

        <div className={conditionContainerStyles}>
          <SelectWithPagination
            size="compact"
            data-testid={`${dataTestId}__field--select`}
            overrides={selectOverrides}
            disabled={!isObjectToEvalSelected}
            placeholder={t('decisionTree.selectType')}
            value={field ? [{ id: field }] : []}
            options={fieldOptions}
            getOptionLabel={({ option }) => (
              <GroupConditionFieldLabel
                data-testid={dataTestId}
                option={option as FieldSelectOptionType}
              />
            )}
            onChange={handleSelectedFieldChange}
            onLoadMore={() => onLoadMore('dynamicAttributes')}
            isLoadingMore={isLoadingData('dynamicAttributes')}
          />
        </div>

        {areValueFieldsEnabled && (
          <>
            <div className={conditionContainerStyles}>
              <Text
                variant="bodySmall"
                margin={0}
              >
                {t('decisionTree.is')}
              </Text>
            </div>

            <div className={conditionContainerStyles}>
              <Select
                size="compact"
                data-testid={`${dataTestId}__operator--select`}
                overrides={selectOverrides}
                placeholder={t('decisionTree.selectType')}
                options={operatorOptions}
                value={operator ? [{ id: operator }] : []}
                onChange={([operator]: OperatorSelectOptionsType[]) =>
                  onUpdateCondition({ operator: operator?.id })
                }
              />
            </div>

            <div className={conditionContainerStyles}>
              <GroupConditionValue
                dataTestId={`${dataTestId}__value`}
                disabled={isValueFieldEnabled}
                condition={condition}
                valueOptions={valueOptions}
                isLoadingData={isLoadingData}
                onUpdateCondition={onUpdateCondition}
                onLoadMore={onLoadMore}
              />
            </div>
          </>
        )}
      </div>

      {!isDeleteDisabled && (
        <IconButton
          data-testid={`${dataTestId}--delete-condition-btn`}
          size="32px"
          kind="tertiary"
          onClick={onDeleteCondition}
          aria-label="DeleteConditionButton"
        >
          <TrashCan />
        </IconButton>
      )}
    </div>
  );
};
