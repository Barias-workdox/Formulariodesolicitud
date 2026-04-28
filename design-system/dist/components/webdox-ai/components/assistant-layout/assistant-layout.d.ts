import { PropsWithChildren } from 'react';
import { SelectProps } from '../../../select/select.interfaces';
import { TabsProps } from '../../../tabs';
import { Option, Options } from 'baseui/select';
export type AssistantLayoutProps = PropsWithChildren<{
    'data-testid': string;
    onSelectChange: SelectProps['onChange'];
    selectOptions?: Options;
    selectedOption?: Option;
    onClose(): void;
    onClickDynamicView(): void;
}>;
export type AssistantLayoutTabsProps = PropsWithChildren<{
    activeKey: TabsProps['activeKey'];
    onChange: TabsProps['onChange'];
}>;
/**
 * A layout component for WebdoxAI Assistant.
 */
declare const AssistantLayout: {
    ({ "data-testid": dataTestId, selectOptions, selectedOption, children, onClose, onClickDynamicView, onSelectChange, }: AssistantLayoutProps): React.JSX.Element;
    Tab: (props: import('../../../tabs').TabProps) => import('react').ReactElement;
    Tabs: ({ children, activeKey, onChange, }: AssistantLayoutTabsProps) => JSX.Element;
};
export { AssistantLayout };
