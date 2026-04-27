import {
  Boolean,
  CalendarHeatMap,
  CharacterLowerCase,
  CharacterWholeNumber,
  List,
} from '@carbon/icons-react';
import * as yup from 'yup';

import { noop } from '@utils/noop';

import type { DataConfig } from '../contexts/decision-tree.context';
import type {
  ActionIdType,
  DataType,
  GroupConditionDataType,
  ObjectToEvalType,
  TargetObjectType,
  TreePaginatedOptionsConfig,
} from '../interfaces';
import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { CommonOption } from '@components/select/next';

export const groupRuleObjectSchema = yup.object({
  treeRules: yup.array().of(
    yup.object({
      conditions: yup.array().of(
        yup.object({
          objectToEval: yup.string().required(),
          field: yup.string().required(),
          operator: yup.string().required(),
          value: yup
            .mixed()
            .test('is-valid-type', 'Value must be an object, string, or number', (val) => {
              if (typeof val === 'string' && val.trim() !== '') {
                return true;
              }

              if (typeof val === 'number') {
                return true;
              }

              return false;
            })
            .required(),
        }),
      ),
    }),
  ),
  actions: yup.array().of(
    yup.object({
      actionType: yup.string().required(),
      targetId: yup.string().required(),
    }),
  ),
});

/** Utility function that returns an icon according to the `dataType` provided */
export const getDynamicAttributeIcon = (dataType?: DataType): CarbonIconType => {
  switch (dataType) {
    case 'string':
      return CharacterLowerCase;
    case 'numeric':
      return CharacterWholeNumber;
    case 'date':
      return CalendarHeatMap;
    case 'boolean':
      return Boolean;
    case 'list':
      return List;
    default:
      return CharacterLowerCase;
  }
};

/** Utility function to standardize options configuration */
export const getOptionsConfig = (options: DataConfig): TreePaginatedOptionsConfig<CommonOption> => {
  if (typeof options === 'object' && !Array.isArray(options)) {
    return options;
  }

  return {
    options,
    isLoadingMore: false,
    onLoadMore: noop,
  };
};

/** Get the value type for a given condition */
export const getGroupConditionDataType = ({
  objectToEval,
  field,
  dataType,
}: {
  objectToEval?: ObjectToEvalType;
  field?: string;
  dataType?: DataType;
}): GroupConditionDataType | undefined => {
  if (objectToEval === 'User') {
    if (field === 'group_ids') return 'profiles';
    if (field === 'job_ids') return 'groups';
  }

  if (objectToEval === 'WorkflowRequest') {
    if (dataType === 'boolean') return 'booleanAttributes';
    if (dataType === 'list') return 'dynamicAttributes';
  }

  return undefined;
};

/**
 * Determine whether to show the distribution mode selector based on the action type and target object
 */
export const getDistributionModeVisibility = (
  targetObject?: TargetObjectType,
  actionType?: ActionIdType,
): boolean => {
  return actionType === 'assign_taker' && targetObject === 'job';
};
