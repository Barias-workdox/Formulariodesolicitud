import { DecisionTreeContext } from '../contexts/decision-tree.context';

import type { DecisionTreeContextValues } from '../contexts/decision-tree.context';

interface DecisionTreeProviderProps extends DecisionTreeContextValues {
  children: React.ReactNode;
}

/**
 * DecisionTreeProvider component to provide decision tree context to its children.
 */
export const DecisionTreeProvider = ({
  children,
  ...initialProps
}: DecisionTreeProviderProps): JSX.Element => {
  return (
    <DecisionTreeContext.Provider value={{ ...initialProps }}>
      {children}
    </DecisionTreeContext.Provider>
  );
};
