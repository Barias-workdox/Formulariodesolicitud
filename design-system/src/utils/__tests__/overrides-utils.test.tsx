import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import type { OverrideObject } from '@themes/theme.interfaces';

describe('getOverride - tests', () => {
  it('should return the component implementation override if it exists', () => {
    const override: OverrideObject<{ prop1: string }> = {
      component: () => <div />,
      props: { prop1: 'value1' },
      style: { backgroundColor: 'red' },
    };
    const result = getOverride(override);

    expect(result).toBe(override.component);
  });

  it('should return undefined if the override is not an object', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const override: any = 'not an object';
    const result = getOverride(override);

    expect(result).toBeUndefined();
  });

  it('should return undefined if the override is null or undefined', () => {
    const result = getOverride(null);
    const result2 = getOverride(undefined);

    expect(result).toBeUndefined();
    expect(result2).toBeUndefined();
  });
});

describe('getOverrideProps - tests', () => {
  it('should return the override props', () => {
    const override: OverrideObject<{ prop1: string }> = {
      props: { prop1: 'value1' },
      style: { backgroundColor: 'red' },
    };
    const result = getOverrideProps(override);

    expect(result).toEqual({ prop1: 'value1', $style: { backgroundColor: 'red' } });
  });

  it('should return an empty object if the override is null or undefined', () => {
    const result = getOverrideProps(null);
    const result2 = getOverrideProps(undefined);

    expect(result).toEqual({});
    expect(result2).toEqual({});
  });
});
