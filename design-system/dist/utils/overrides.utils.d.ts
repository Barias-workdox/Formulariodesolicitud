import { ComponentOverride, OverrideObject } from '../themes/theme.interfaces';
/**
 * Given an override argument, returns the component implementation override if it exists
 */
export declare function getOverride<T>(override?: OverrideObject<T>): ComponentOverride<T> | undefined;
/**
 * Given an override argument, returns the override props that should be passed
 * to the component when rendering it.
 */
export declare function getOverrideProps<T>(override?: OverrideObject<T>): T;
