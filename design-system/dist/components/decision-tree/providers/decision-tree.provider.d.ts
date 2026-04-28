import { DecisionTreeContextValues } from '../contexts/decision-tree.context';
interface DecisionTreeProviderProps extends DecisionTreeContextValues {
    children: React.ReactNode;
}
/**
 * DecisionTreeProvider component to provide decision tree context to its children.
 */
export declare const DecisionTreeProvider: ({ children, ...initialProps }: DecisionTreeProviderProps) => JSX.Element;
export {};
