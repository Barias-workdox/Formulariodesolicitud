import { createThemedStyled, createThemedUseStyletron, createThemedWithStyle } from 'baseui';
import { DesignSystemTheme } from './theme.interfaces';
export declare const themedStyled: ReturnType<typeof createThemedStyled<DesignSystemTheme>>;
export declare const themedWithStyle: {
    <C extends import('styletron-react').StyletronComponent<any, any>, P extends {}, Theme = DesignSystemTheme>(component: C, style: import('styletron-standard').StyleObject | ((props: Omit<P, "$theme"> & {
        $theme: Theme;
    } & (C extends import('styletron-react').StyletronComponent<infer CC extends import('react').ElementType<any, keyof import("react").JSX.IntrinsicElements>, infer PP extends {}> ? PP : never)) => import('styletron-standard').StyleObject)): C extends import('styletron-react').StyletronComponent<infer CC extends import('react').ElementType<any, keyof import("react").JSX.IntrinsicElements>, infer PP extends {}> ? import('styletron-react').StyletronComponent<CC, P & PP> : never;
    <C extends import('styletron-react').StyletronComponent<any, any>>(component: C, style: import('styletron-standard').StyleObject): C;
};
export declare const themedUseStyletron: () => [(a: import('styletron-standard').StyleObject) => string, DesignSystemTheme];
/** Required by apps that implements another Theme */
export declare function themedStyledGeneric<T>(): ReturnType<typeof createThemedStyled<T>>;
/** Required by apps that implements another Theme */
export declare function themedWithStyleGeneric<T>(): ReturnType<typeof createThemedWithStyle<T>>;
/** Required by apps that implements another Theme */
export declare function themedUseStyletronGeneric<T>(): ReturnType<typeof createThemedUseStyletron<T>>;
/** Create a new App theme with the extra colors or override props from the Design System */
export declare function createAppTheme<ConsumerAppTheme>(overrides: any): ConsumerAppTheme;
