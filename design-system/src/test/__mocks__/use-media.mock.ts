import * as ReactUse from 'react-use';

import { testHelpers } from '@test/test-utils';

/**
 * Mocks the `useMedia` hook from `react-use` to return predefined values for specific media queries.
 */
export const mockUseMedia = (mockValues: { [key: string]: boolean } = {}): void => {
  testHelpers.spyOn(ReactUse, 'useMedia').mockImplementation((query: string) => {
    return mockValues[query] || false;
  });
};
