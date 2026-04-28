import { Trans, TransProps } from 'react-i18next';
import { PROJECT_NAMESPACE } from './i18n.constants';
import { ParseKeys, TOptions } from 'i18next';
/** A Trans component with the DS namespace set */
export declare const DSTrans: (props: Omit<TransProps<ParseKeys<typeof PROJECT_NAMESPACE, undefined, undefined>, typeof PROJECT_NAMESPACE, undefined, undefined, TOptions>, "ns">) => ReturnType<typeof Trans>;
