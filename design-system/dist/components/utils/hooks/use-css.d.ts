import { DesignSystemTheme } from '../../../themes';
import { StyleOverrideFunction } from '../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-standard';
/**
 * Type for function generators of css styles, it is usually necessary for the function to receive the 'theme' of the application in its first parameter
 */
export type FunctionStyleObject<T = Record<string, never>, TExtraParams = object> = (theme: DesignSystemTheme & T, extraParams: TExtraParams) => StyleObject;
export type StyleType<T = Record<string, never>, TExtraParams = object> = StyleObject | FunctionStyleObject<T, TExtraParams> | StyleOverrideFunction<TExtraParams>;
/**
 * Object of all styles that the hook will convert to css classes
 */
export type StylesType<T = Record<string, never>, TExtraParams = object> = Record<string, StyleType<T, TExtraParams>>;
export type UseCssResponse<T = Record<string, never>, U = unknown> = (U extends Record<string, unknown> ? Record<keyof U, string> : Record<string, string>) & {
    theme: T extends Record<string, never> ? DesignSystemTheme : DesignSystemTheme & T;
    css(arg: StyleObject): string;
};
type UseStyleOverridesParams<T = Record<string, never>, U = unknown, TExtraParams = object> = {
    $styles: U & StylesType<T, TExtraParams>;
} & TExtraParams;
/**
 * Hook that helps to create multiple css styles with a styles object.
 * If the styles object contains a function style prop then it will get its first param type as the theme extension, it means that will maintain implicitly type-safety with your custom theme.
 *
 * @param styles - Object of all styles that the hook will convert to css classes
 * @param extraParams - Extra parameters to be applied in the generation of styles, this will be the second parameter that your style functions will receive.
 * @returns Object with style class names, Styletron css function and theme of the application.
 */
export declare const useCss: <T = Record<string, never>, U = unknown, TExtraParams = object>(styles?: U, extraParams?: TExtraParams, 
/**
 * indicate if the style function has to receive a StyleOverride format or normal format
 * StyleOverride `({ $theme, ..extraParams })`
 * normal `(theme, ...extraParams)`
 */
isStylesOverrides?: boolean) => UseCssResponse<T, U>;
/**
 * Hook based on `useCss`,
 */
export declare const useStyleOverrides: <T = Record<string, never>, U = unknown, TExtraParams = object>({ $styles, ...rest }: UseStyleOverridesParams<T, U, TExtraParams>) => UseCssResponse<T, U>;
/**
 * Explicit way to use the useCss hook to maintain type-safety with your custom theme.
 * This utility is useful when your styles object doesn't have any function with your `Custom Theme` param and you need to get the `theme` prop with your custom theme type.
 */
export declare const createThemedUseCss: <T = Record<string, never>>() => <U = unknown, TExtraParams = object>(styles?: U & StylesType<T, TExtraParams>, extraParams?: TExtraParams) => UseCssResponse<T, U>;
export {};
