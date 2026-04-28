import { Locale } from './i18n.interface';
import { InitOptions, ResourceLanguage } from 'i18next';
import { HttpBackendOptions } from 'i18next-http-backend';
/** i18next resources type structured with namespaces */
export type Resources<T extends string = string> = Record<Locale, Record<T, ResourceLanguage>>;
/**
 * Initialize i18next with the Design System resources and the extra resources passed as a parameter.
 * Extra init options are also accepted.
 */
export declare function initI18next(initOptions?: InitOptions<HttpBackendOptions>): void;
