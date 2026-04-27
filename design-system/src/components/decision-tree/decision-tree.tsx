import { RuleGroupsContainer } from './containers/rule-groups.container';
import { DecisionTreeProvider } from './providers/decision-tree.provider';

import type { DecisionTreeContextValues } from './contexts/decision-tree.context';
import type { WithTestId } from '@interfaces/common.interfaces';

export type DecisionTreeProps = WithTestId<
  Pick<
    DecisionTreeContextValues,
    | 'rules'
    | 'users'
    | 'groups'
    | 'profiles'
    | 'dynamicAttributes'
    | 'workflowTemplates'
    | 'isDistributionModeEnabled'
    | 'onChange'
  >
>;

/**
 * Component that renders a set of collapsible decision rules, each containing groups of
 * conditions and associated actions. This component is structured to support the creation
 * and management of decision trees, which can be useful for workflows,
 * form handling, or other rule-based logic in applications.
 */
export const DecisionTree = ({
  dataTestId = 'decision-tree',
  isDistributionModeEnabled,
  rules,
  users,
  profiles,
  groups,
  workflowTemplates,
  dynamicAttributes,
  onChange,
}: DecisionTreeProps): JSX.Element => {
  return (
    <DecisionTreeProvider
      baseTestId={dataTestId}
      isDistributionModeEnabled={isDistributionModeEnabled}
      rules={rules}
      users={users}
      profiles={profiles}
      groups={groups}
      workflowTemplates={workflowTemplates}
      dynamicAttributes={dynamicAttributes}
      onChange={onChange}
    >
      <RuleGroupsContainer />
    </DecisionTreeProvider>
  );
};
