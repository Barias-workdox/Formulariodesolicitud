import { useMemo } from 'react';

import type { ActionIdType, TargetObjectType } from '../interfaces';
import type { CommonOption } from '@components/select/next';

type IUseActionValuesParams = {
  actionIdType?: ActionIdType;
  users: CommonOption[];
  groups: CommonOption[];
  workflowTemplates: CommonOption[];
};

export type TargetIdSelectOptionsType = CommonOption & { targetObject?: TargetObjectType };

/**
 * Helper function to get assign taker options
 */
const getAssignTakerOptions = (
  users: CommonOption[],
  groups: CommonOption[],
): TargetIdSelectOptionsType[] => [
  ...users.map<TargetIdSelectOptionsType>((user) => ({
    ...user,
    id: `${user.id}-user`,
    targetObject: 'user',
  })),
  ...groups.map<TargetIdSelectOptionsType>((group) => ({
    ...group,
    id: `${group.id}-job`,
    targetObject: 'job',
  })),
];

/** Hook to retrieve action values based on the action type */
export const useActionValues = ({
  actionIdType,
  groups,
  users,
  workflowTemplates,
}: IUseActionValuesParams): TargetIdSelectOptionsType[] => {
  return useMemo(() => {
    if (actionIdType === 'assign_taker') {
      return getAssignTakerOptions(users, groups);
    }

    if (actionIdType === 'start_workflow') {
      return workflowTemplates;
    }

    return [];
  }, [actionIdType, users, groups, workflowTemplates]);
};
