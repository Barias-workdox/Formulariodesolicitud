import { renderHook } from '@testing-library/react';

import { render, screen } from '@test/test-utils';

import { StatefulTabs, Tab } from '../';

import { useTabsOverrides } from './use-tabs-overrides';

import type { OverrideObject } from '../../../themes/theme.interfaces';

describe('useTabsOverrides', () => {
  it('should return base overrides when no kind or extra overrides are provided', () => {
    const { result } = renderHook(() =>
      useTabsOverrides({
        'data-testid': 'test',
        children: <Tab>Content 1</Tab>,
      }),
    );

    expect(
      (result.current.overridesByKind.TabList as OverrideObject<object>).props['data-testid'],
    ).toBe('test');
  });

  it('should merge kind-specific and extra overrides with base overrides', () => {
    const { result } = renderHook(() =>
      useTabsOverrides({
        'data-testid': 'test',
        kind: 'default',
        overrides: { TabList: { props: { 'data-testid': 'test-override' } } },
        children: <Tab>Content 1</Tab>,
      }),
    );

    expect(
      (result.current.overridesByKind.TabList as OverrideObject<object>).props['data-testid'],
    ).toBe('test-override');
  });

  it('should render the childrenWithOverrides', () => {
    const {
      result: {
        current: { childrenWithOverrides },
      },
    } = renderHook(() =>
      useTabsOverrides({
        'data-testid': 'test',
        kind: 'medium',
        children: <Tab>Content 1</Tab>,
      }),
    );

    render(<StatefulTabs>{childrenWithOverrides}</StatefulTabs>);

    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });
});
