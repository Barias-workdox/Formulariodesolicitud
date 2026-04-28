import { DecisionTreeContextValues } from './contexts/decision-tree.context';
import { WithTestId } from '../../interfaces/common.interfaces';
export type DecisionTreeProps = WithTestId<Pick<DecisionTreeContextValues, 'rules' | 'users' | 'groups' | 'profiles' | 'dynamicAttributes' | 'workflowTemplates' | 'isDistributionModeEnabled' | 'onChange'>>;
/**
 * Component that renders a set of collapsible decision rules, each containing groups of
 * conditions and associated actions. This component is structured to support the creation
 * and management of decision trees, which can be useful for workflows,
 * form handling, or other rule-based logic in applications.
 */
export declare const DecisionTree: ({ dataTestId, isDistributionModeEnabled, rules, users, profiles, groups, workflowTemplates, dynamicAttributes, onChange, }: DecisionTreeProps) => JSX.Element;
