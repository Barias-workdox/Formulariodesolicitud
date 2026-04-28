import { HeaderTabsProps } from '../../../../../header-tab/header-tabs.interfaces';
export type SectionedCardHeaderTabsProps = Omit<HeaderTabsProps, 'size' | 'isDisabled'> & {
    defaultValue?: React.Key;
};
/**
 * Sectioned Card HeaderTabs component that wraps HeaderTabs component.
 */
declare const SectionedCardHeaderTabs: (props: SectionedCardHeaderTabsProps) => JSX.Element;
export { SectionedCardHeaderTabs };
