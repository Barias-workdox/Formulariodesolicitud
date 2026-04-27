import { testHelpers } from '@test/test-utils';

import * as UseCollapsibleBoxContextHook from '../../next/collapsible-box.context';

import type { CollapsibleBoxContextType } from '../../next/collapsible-box.context';
import type { MockInstance } from 'vitest';

type MockUseCollapsibleBoxContextHookReturn = {
  mockedValues: CollapsibleBoxContextType;
  useCollapsibleBoxContextHookSpy: MockInstance;
};

/**
 * Mocks the `useCollapsibleBoxContext` hook and returns the mock objects for its properties.
 */
export const mockUseCollapsibleBoxContext = (): MockUseCollapsibleBoxContextHookReturn => {
  const mockedValues: CollapsibleBoxContextType = {
    size: 'large',
  };

  // Spy on the `useCollapsibleBoxContext` hook and return the mock values
  const useCollapsibleBoxContextHookSpy = testHelpers
    .spyOn(UseCollapsibleBoxContextHook, 'useCollapsibleBoxContext')
    .mockReturnValue(mockedValues);

  // Return the mocks for reuse in tests
  return {
    mockedValues,
    useCollapsibleBoxContextHookSpy,
  };
};
