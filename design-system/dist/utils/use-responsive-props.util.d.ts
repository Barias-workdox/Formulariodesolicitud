import { ResponsiveTheme } from '../themes/theme.interfaces';
type BreakpointKeys = keyof ResponsiveTheme['mediaQuery'];
type UseResponsivePropsParams<T> = Partial<Record<BreakpointKeys, T>>;
/**
 * This hook provides a convenient way to dynamically apply Component props based on the current screen size.
 *
 * **Example:**
 * ```typescript
 * const responsiveProps = useResponsiveProps({
 *   large: { size: '44px' },
 *   small: { size: '32' },
 * }, {size: "24px"});
 *
 * return <Button {...responsiveProps}>Click</div>;
 * ```
 */
export declare const useResponsiveProps: <T>(values: UseResponsivePropsParams<T>, defaultProps?: T) => T | undefined;
export {};
