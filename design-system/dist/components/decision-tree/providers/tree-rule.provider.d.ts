import { ReactNode } from 'react';
import { TreeRuleType } from '../interfaces';
interface TreeRuleProviderProps {
    children: ReactNode;
    treeRule: TreeRuleType;
    treeRuleIndex: number;
}
/**
 * Provider component that supplies context values and handlers for a specific tree rule
 * within a decision tree rule group.
 *
 * It manages actions such as adding, updating, and deleting conditions, as well as
 * updating logical connectors for the tree rule.
 */
export declare const TreeRuleProvider: ({ children, treeRule, treeRuleIndex, }: TreeRuleProviderProps) => JSX.Element;
export {};
