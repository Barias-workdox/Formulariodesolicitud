import { ReactElement } from 'react';
import { TabProps as BaseTabProps } from 'baseui/tabs-motion';
export type TabProps = BaseTabProps & {
    'data-testid'?: string;
};
/**
 * The `Tab` component is a wrapper around the Tab component from the baseui library.
 * It's used to display individual tabs within a tab-based navigation or content switching mechanism.
 */
export declare const Tab: (props: TabProps) => ReactElement;
