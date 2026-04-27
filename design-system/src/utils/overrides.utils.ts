import type { ComponentOverride, OverrideObject } from '@themes/theme.interfaces';

/**
 * Given an override argument, returns the component implementation override if it exists
 */
export function getOverride<T>(override?: OverrideObject<T>): ComponentOverride<T> | undefined {
  if (override && typeof override === 'object' && override.component) {
    return override.component as ComponentOverride<T>;
  }

  return undefined;
}

/**
 * Given an override argument, returns the override props that should be passed
 * to the component when rendering it.
 */
export function getOverrideProps<T>(override?: OverrideObject<T>): T {
  const { props = {}, style } = override || {};

  return {
    ...props,
    ...(style !== undefined && { $style: style }),
  } as T;
}
