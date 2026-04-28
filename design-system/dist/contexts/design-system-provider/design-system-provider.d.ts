import { ReactElement, ReactNode } from 'react';
import { Locale } from '../../components/utils';
import { DesignSystemTheme } from '../../themes';
type DesignSystemProviderProps = {
    children: ReactNode;
    theme: DesignSystemTheme;
    locale?: Locale;
    /** Unit testing use styletron-engine-snapshot to improve snapshots */
    engine?: any;
};
/**
 * Provider of the Design System.
 * Contains the main layers of the Design System; the i18n and theme management layers.
 *
 * The locale param is /es/ by default.
 *
 * The locale param is temporary. Will be replaced in future
 * versions of the DS when the locale context will be implemented.
 * In the current version there are a problem in the locale context
 * to share its current value with other component from the DS.
 */
export declare const DesignSystemProvider: ({ children, theme, locale, engine, }: DesignSystemProviderProps) => ReactElement;
export {};
