import { createContext, useContext } from 'react';
import type { PropsWithChildren } from 'react';

import { COLLAPSIBLE_BOX_CONTEXT_DEFAULT_VALUES } from './collapsible-box.constants';

import type { Size } from './collapsible-box.interfaces';

export interface CollapsibleBoxProviderProps {
  size?: Size;
}

export type CollapsibleBoxContextType = {
  size: Size;
};

export const CollapsibleBoxContext = createContext<CollapsibleBoxContextType>(
  COLLAPSIBLE_BOX_CONTEXT_DEFAULT_VALUES,
);

/**
 * `CollapsibleBoxProvider` is a context provider component that supplies state
 * to its children regarding the visibility of the toolbar in a page header.
 */
export const CollapsibleBoxProvider = ({
  size,
  children,
}: PropsWithChildren<CollapsibleBoxProviderProps>): JSX.Element => {
  return (
    <CollapsibleBoxContext.Provider
      value={{
        size,
      }}
    >
      {children}
    </CollapsibleBoxContext.Provider>
  );
};

/**
 * This hook makes it easy to obtain the values from the collapsible box context
 */
export const useCollapsibleBoxContext = (): CollapsibleBoxContextType => {
  return useContext(CollapsibleBoxContext);
};
