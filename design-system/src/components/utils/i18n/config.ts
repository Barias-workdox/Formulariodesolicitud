import { NAMESPACE as DOCUMENT_VIEWER_NS } from '@webdoxclm/document-viewer-front/i18n';
import documentViewerEn from '@webdoxclm/document-viewer-front/locales/en.json';
import documentViewerEs from '@webdoxclm/document-viewer-front/locales/es.json';
import documentViewerPt from '@webdoxclm/document-viewer-front/locales/pt.json';
import { default as i18next } from 'i18next';
import httpApi from 'i18next-http-backend';
import mergeWith from 'lodash/mergeWith';
import { initReactI18next } from 'react-i18next';

import { en as enContractTypes } from '../../../locales/contract-types/en';
import { es as esContractTypes } from '../../../locales/contract-types/es';
import { pt as ptContractTypes } from '../../../locales/contract-types/pt';
import { en as enCountries } from '../../../locales/countries/en';
import { es as esCountries } from '../../../locales/countries/es';
import { pt as ptCountries } from '../../../locales/countries/pt';
import { en as enCurrencies } from '../../../locales/currencies/en';
import { es as esCurrencies } from '../../../locales/currencies/es';
import { pt as ptCurrencies } from '../../../locales/currencies/pt';
import { en as enDataTypes } from '../../../locales/data-types/en';
import { es as esDataTypes } from '../../../locales/data-types/es';
import { pt as ptDataTypes } from '../../../locales/data-types/pt';
import { en } from '../../../locales/design-system/en';
import { es } from '../../../locales/design-system/es';
import { pt } from '../../../locales/design-system/pt';

import {
  CONTRACT_TYPE_NAMESPACE,
  COUNTRIES_NAMESPACE,
  CURRENCIES_NAMESPACE,
  DATA_TYPE_NAMESPACE,
  PROJECT_NAMESPACE,
  defaultLng,
} from './i18n.constants';

import type { Locale } from './i18n.interface';
import type { InitOptions, ResourceLanguage } from 'i18next';
import type { HttpBackendOptions } from 'i18next-http-backend';

/** All namespaces provided by the design system that should always be available */
const DESIGN_SYSTEM_NAMESPACES = [
  PROJECT_NAMESPACE,
  COUNTRIES_NAMESPACE,
  CURRENCIES_NAMESPACE,
  DATA_TYPE_NAMESPACE,
] as const;

/**
 * Custom merge function that concatenates arrays instead of replacing them.
 * Used to merge i18next options so that consumer namespaces are added to design system namespaces.
 */
const mergeArrays = <T>(objValue: T, srcValue: T): T[] | undefined => {
  if (Array.isArray(objValue) && Array.isArray(srcValue)) {
    return [...objValue, ...srcValue];
  }

  return undefined; // Let lodash handle non-array values
};

/** i18next resources type structured with namespaces */
export type Resources<T extends string = string> = Record<Locale, Record<T, ResourceLanguage>>;

/**
 * Initialize i18next with the Design System resources and the extra resources passed as a parameter.
 * Extra init options are also accepted.
 */
export function initI18next(initOptions: InitOptions<HttpBackendOptions> = {}): void {
  // Base design system config - consumer options will be merged on top
  const baseConfig: InitOptions<HttpBackendOptions> = {
    load: 'languageOnly',
    partialBundledLanguages: true,
    fallbackLng: defaultLng,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    ns: [...DESIGN_SYSTEM_NAMESPACES],
    resources: {
      en: {
        [PROJECT_NAMESPACE]: en,
        [COUNTRIES_NAMESPACE]: enCountries,
        [CURRENCIES_NAMESPACE]: enCurrencies,
        [DATA_TYPE_NAMESPACE]: enDataTypes,
        [CONTRACT_TYPE_NAMESPACE]: enContractTypes,
        [DOCUMENT_VIEWER_NS]: documentViewerEn,
      },
      es: {
        [PROJECT_NAMESPACE]: es,
        [COUNTRIES_NAMESPACE]: esCountries,
        [CURRENCIES_NAMESPACE]: esCurrencies,
        [DATA_TYPE_NAMESPACE]: esDataTypes,
        [CONTRACT_TYPE_NAMESPACE]: esContractTypes,
        [DOCUMENT_VIEWER_NS]: documentViewerEs,
      },
      pt: {
        [PROJECT_NAMESPACE]: pt,
        [COUNTRIES_NAMESPACE]: ptCountries,
        [CURRENCIES_NAMESPACE]: ptCurrencies,
        [DATA_TYPE_NAMESPACE]: ptDataTypes,
        [CONTRACT_TYPE_NAMESPACE]: ptContractTypes,
        [DOCUMENT_VIEWER_NS]: documentViewerPt,
      },
      base: {
        [PROJECT_NAMESPACE]: es,
        [COUNTRIES_NAMESPACE]: esCountries,
        [CURRENCIES_NAMESPACE]: esCurrencies,
        [DATA_TYPE_NAMESPACE]: esDataTypes,
        [CONTRACT_TYPE_NAMESPACE]: esContractTypes,
        [DOCUMENT_VIEWER_NS]: documentViewerEs,
      },
    },
  };

  // Merge consumer options with base config (arrays are concatenated, objects are deep merged)
  const i18nextConfig = mergeWith(baseConfig, initOptions, mergeArrays);

  // We are only using translations under /public/locales in consumer apps as portal-frontend, etc.
  if (!import.meta.env.DEV) {
    i18next.use(httpApi);
    i18nextConfig.backend = mergeWith(
      { loadPath: '/locales/{{ns}}/{{lng}}.json' },
      initOptions.backend,
      mergeArrays,
    );
  }

  // Always use initReactI18next (unless you specifically only want it in dev as well)
  i18next.use(initReactI18next);

  // Initialize
  i18next.init(i18nextConfig);
}
