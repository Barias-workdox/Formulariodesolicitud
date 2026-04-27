import { useContext } from 'react';
import type { PropsWithChildren, ReactElement } from 'react';

import { render, renderHook, screen } from '@testing-library/react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StyletronSnapshotEngine } from 'styletron-engine-snapshot';
import { afterEach, beforeEach, describe, expect, it, vi as testHelpers } from 'vitest';

import {
  ToasterContainerProvider,
  getToasterContainerContext,
  toaster,
} from '../components/notification';
import {
  defaultLng,
  useCountriesTranslation,
  useTranslation,
  COUNTRIES_NAMESPACE,
  PROJECT_NAMESPACE,
} from '../components/utils/i18n';
import { DesignSystemProvider } from '../contexts/design-system-provider';
import { es as esCountries } from '../locales/countries/es';
import { es } from '../locales/design-system/es';
import { lightTheme } from '../themes/';

import type { ToasterProps } from '../components/notification';
import type { Locale } from '../components/utils/i18n';
import type { RenderOptions } from '@testing-library/react';
import type { UseTranslationResponse } from 'react-i18next';
import type { MockedFunction } from 'vitest';

export const TEST_DEFAULT_LOCALE = defaultLng;

const tagsToReplace = ['strong'];

/** Replace html values that are parsed in the component to test assertion correctly */
export const replaceHtmlTagsFromText = (text: string): string => {
  let newText = text;

  tagsToReplace.forEach(
    (tag) => (newText = newText.replace(`<${tag}>`, '').replace(`</${tag}>`, '')),
  );

  return newText;
};

/** Custom i18next init to avoid backend requests errors */
export const mockI18nextInit = (): void => {
  i18next.use(initReactI18next).init({
    load: 'languageOnly',
    partialBundledLanguages: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      es: {
        [PROJECT_NAMESPACE]: es,
        [COUNTRIES_NAMESPACE]: esCountries,
      },
    },
    backend: {
      loadPath: '/locales/{{ns}}/{{lng}}.json',
    },
    react: {
      // Required by jest to not crash
      useSuspense: false,
    },
  });
};

mockI18nextInit();

export const ToasterContainerContext = getToasterContainerContext();

/** Utility to improve the snapshots */
const snapshotEngine = new StyletronSnapshotEngine();

/** Utility that returns a toast with custom properties and styles.  */
export function useToaster(): ToasterProps {
  const context = useContext(ToasterContainerContext);

  if (!context) {
    throw new Error('useToaster must be used within a ToasterContainerProvider');
  }

  const { updateToasterContainerProps, canShowToast, addToastToQueue, removeToastFromQueue } =
    context;

  return toaster(updateToasterContainerProps, {
    canShowToast,
    addToastToQueue,
    removeToastFromQueue,
  });
}

/**
 * Renders a hook that uses the useTranslation function and returns its response
 */
export const renderUseTranslation = (): UseTranslationResponse<
  typeof PROJECT_NAMESPACE,
  undefined
> => {
  const {
    result: { current },
  } = renderHook(() => useTranslation());

  return current;
};

/**
 * Renders a hook that uses the useTranslation function and returns its response
 */
export const renderUseCountriesTranslation = (): UseTranslationResponse<
  typeof COUNTRIES_NAMESPACE,
  undefined
> => {
  const {
    result: { current },
  } = renderHook(() => useCountriesTranslation());

  return current;
};

/** A utility to theme with baseweb every component */
export const ThemedComponent = ({
  children,
  locale = 'es',
}: PropsWithChildren<{ locale?: Locale }>): ReactElement => {
  return (
    <MemoryRouter>
      <DesignSystemProvider
        engine={snapshotEngine}
        theme={lightTheme}
        locale={locale}
      >
        <ToasterContainerProvider toasterContext={ToasterContainerContext}>
          {children}
        </ToasterContainerProvider>
      </DesignSystemProvider>
    </MemoryRouter>
  );
};

type CustomRenderType = ReturnType<typeof render>;

/** A custom render to override the one from testing library, with theme from design system */
const customRender = (ui: React.ReactElement, options?: RenderOptions): CustomRenderType =>
  render(ui, { wrapper: ThemedComponent, ...options });

/** Utility to build a render component quickly with default props and allows overrides of every prop */
const buildRenderComponent =
  <TProps,>(
    Component: React.ComponentType<TProps>,
    defaultProps: TProps,
    options?: RenderOptions,
  ) =>
  (props?: Partial<TProps>): CustomRenderType =>
    customRender(
      <Component
        {...defaultProps}
        {...props}
      />,
      options,
    );

/**
 * withResolvers is not supported in `node version < 22` (tests environment)
 * once we upgrade to `node >= 22` we can remove this polyfill
 *
 * @see https://stackoverflow.com/questions/78415681/pdf-js-pdfjs-dist-promise-withresolvers-is-not-a-function
 */
if (typeof Promise.withResolvers === 'undefined') {
  if (window)
    // @ts-expect-error This does not exist outside of polyfill which this is doing
    window.Promise.withResolvers = function (): unknown {
      let resolve, reject;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });

      return { promise, resolve, reject };
    };
}

export { renderHook } from '@testing-library/react';

export * from '@testing-library/react';

export { customRender as render, screen, buildRenderComponent };

export { beforeEach, afterEach, describe, expect, it, testHelpers };

export type { MockedFunction };

export type { CustomRenderType as RenderType };
