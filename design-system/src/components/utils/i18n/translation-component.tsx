import { Trans } from 'react-i18next';

import { PROJECT_NAMESPACE } from './i18n.constants';

import type { ParseKeys, TOptions } from 'i18next';
import type { TransProps } from 'react-i18next';

/** A Trans component with the DS namespace set */
export const DSTrans = (
  props: Omit<
    TransProps<
      ParseKeys<typeof PROJECT_NAMESPACE, undefined, undefined>,
      typeof PROJECT_NAMESPACE,
      undefined,
      undefined,
      TOptions
    >,
    'ns'
  >,
): ReturnType<typeof Trans> => (
  <Trans
    ns={PROJECT_NAMESPACE}
    {...props}
  />
);
