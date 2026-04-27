import type { ReactElement, ReactNode } from 'react';

import { BaseProvider } from 'baseui';
import { Client as Styletron } from 'styletron-engine-monolithic';
import { Provider as StyletronProvider } from 'styletron-react';

import { LocaleProvider } from '../locale-provider';

import '../../themes/global.css';

import type { Locale } from '../../components/utils';
import type { DesignSystemTheme } from '../../themes';
import type { Theme } from 'baseui';

const monolithicEngine = new Styletron();

type DesignSystemProviderProps = {
  children: ReactNode;
  theme: DesignSystemTheme;
  locale?: Locale;
  /** Unit testing use styletron-engine-snapshot to improve snapshots */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
export const DesignSystemProvider = ({
  children,
  theme,
  locale = 'es',
  engine = monolithicEngine,
}: DesignSystemProviderProps): ReactElement => {
  return (
    <LocaleProvider locale={locale}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme as unknown as Theme}>{children}</BaseProvider>
      </StyletronProvider>
    </LocaleProvider>
  );
};
