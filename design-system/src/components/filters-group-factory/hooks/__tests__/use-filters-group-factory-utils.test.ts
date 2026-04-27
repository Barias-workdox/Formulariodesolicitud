import { ContentTypes } from '@components/filters-group-factory/filter-group-factory.constants';
import { act, renderHook } from '@test/test-utils';

import { useFiltersGroupFactoryUtils } from '../use-filters-group-factory-utils';

import type { FilterFactoryRawValues } from '../../filters-group-factory.interfaces';

describe('useFiltersGroupFactoryUtils', () => {
  const filtersRawValues: FilterFactoryRawValues[] = [
    { id: 'f1', type: ContentTypes.String, value: 'hello' },
    { id: 'f2', type: ContentTypes.Datepicker, date: '2025-01-01' },
    { id: 'f3', type: ContentTypes.List, pathIds: ['p1'], checkedIds: ['c1', 'c2'] },
  ];

  /**
   * Tests that visibleFiltersIds is initialized from `filtersRawValues`.
   */
  it('initializes visibleFiltersIds based on filtersRawValues', () => {
    const { result } = renderHook(() => useFiltersGroupFactoryUtils({ filtersRawValues }));

    expect(result.current.visibleFiltersIds).toEqual(['f1', 'f2', 'f3']);
  });

  it('showFilter appends a new filter ID to visibleFiltersIds', () => {
    const { result } = renderHook(() => useFiltersGroupFactoryUtils({ filtersRawValues }));

    act(() => {
      result.current.showFilter('f4');
    });

    expect(result.current.visibleFiltersIds).toEqual(['f1', 'f2', 'f3', 'f4']);
  });

  it('hideFilter removes a filter ID from visibleFiltersIds', () => {
    const { result } = renderHook(() => useFiltersGroupFactoryUtils({ filtersRawValues }));

    act(() => {
      result.current.hideFilter('f2');
    });

    expect(result.current.visibleFiltersIds).toEqual(['f1', 'f3']);
  });

  it('updateVisibleFiltersIds sets the new array of IDs directly', () => {
    const { result } = renderHook(() => useFiltersGroupFactoryUtils({ filtersRawValues }));

    act(() => {
      result.current.updateVisibleFiltersIds(['f9', 'f10']);
    });

    expect(result.current.visibleFiltersIds).toEqual(['f9', 'f10']);
  });

  it('isFilterAlreadyPresent returns true if filter exists, false otherwise', () => {
    const { result } = renderHook(() => useFiltersGroupFactoryUtils({ filtersRawValues }));

    expect(result.current.isFilterAlreadyPresent('f1')).toBe(true);
    expect(result.current.isFilterAlreadyPresent('unknown')).toBe(false);
  });

  it('getUpdatedFilterRawValues updates filter values based on type', () => {
    const { result } = renderHook(() => useFiltersGroupFactoryUtils({ filtersRawValues }));

    // 1. Update datepicker filter
    const newDate = '2026-02-02';
    let updated = result.current.applyFilterUpdates({
      filterId: 'f2',
      date: newDate,
    });
    const updatedDateFilter = updated.find((f) => f.id === 'f2');

    expect(updatedDateFilter).toMatchObject({
      id: 'f2',
      type: ContentTypes.Datepicker,
      date: newDate,
    });

    // 2. Update list filter
    updated = result.current.applyFilterUpdates({
      filterId: 'f3',
      pathIds: ['p2', 'p3'],
      checkedIds: ['c3'],
    });
    const updatedListFilter = updated.find((f) => f.id === 'f3');

    expect(updatedListFilter).toMatchObject({
      id: 'f3',
      type: ContentTypes.List,
      pathIds: ['p2', 'p3'],
      checkedIds: ['c3'],
    });

    // 3. Update string filter
    updated = result.current.applyFilterUpdates({
      filterId: 'f1',
      value: 'newVal',
    });
    const updatedStringFilter = updated.find((f) => f.id === 'f1');

    expect(updatedStringFilter).toMatchObject({
      id: 'f1',
      type: ContentTypes.String,
      value: 'newVal',
    });
  });
});
