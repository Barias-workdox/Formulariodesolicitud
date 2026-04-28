import { ReactNode } from 'react';
import { RuleGroupType } from '../interfaces';
interface RuleGroupProviderProps {
    rule: RuleGroupType;
    ruleIndex: number;
    children: ReactNode;
}
/**
 * Provides the RuleGroupContext to its children components.
 */
export declare const RuleGroupProvider: ({ rule, ruleIndex, children, }: RuleGroupProviderProps) => JSX.Element;
export {};
