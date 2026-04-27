import { act, renderHook } from '@testing-library/react';

import { useContractNegotiationTabs } from './use-contract-negotiation-tabs.hook';

describe('useContractNegotiationTabs - tests', () => {
  it('should return the correct values', async () => {
    const { result } = renderHook(useContractNegotiationTabs);

    expect(result.current.isLeftTabsOpen).toBeTruthy();
    expect(result.current.isRightTabsOpen).toBeFalsy();

    act(() => result.current.handleCloseLeftTabs());

    expect(result.current.isLeftTabsOpen).toBeFalsy();
    expect(result.current.isRightTabsOpen).toBeFalsy();

    act(() => result.current.handleOpenLeftTabs());

    expect(result.current.isLeftTabsOpen).toBeTruthy();
    expect(result.current.isRightTabsOpen).toBeFalsy();

    act(() => result.current.handleOpenRightTabs());

    expect(result.current.isLeftTabsOpen).toBeFalsy();
    expect(result.current.isRightTabsOpen).toBeTruthy();

    act(() => result.current.handleCloseRightTabs());

    expect(result.current.isLeftTabsOpen).toBeFalsy();
    expect(result.current.isRightTabsOpen).toBeFalsy();
  });
});
