import { ReactElement } from 'react';
import { IUseContractNegotiationTabs } from '../hooks/use-contract-negotiation-tabs.hook';
import { ContractNegotiationThirdPartyProps } from '../layouts/contract-negotiation-third-party';
export type LeftTabsProps = Pick<ContractNegotiationThirdPartyProps, 'enabledTabs'> & {
    'data-testid'?: string;
    showPanels?: IUseContractNegotiationTabs['isLeftTabsOpen'];
    showTabList?: IUseContractNegotiationTabs['isLeftTabsOpen'];
    onClose: IUseContractNegotiationTabs['handleCloseLeftTabs'];
    onOpen: IUseContractNegotiationTabs['handleOpenLeftTabs'];
};
/**
 * Renders a set of tabs on the left side for contract negotiation.
 * These tabs allow showing or hiding the content of each tab through the `onOpen` and `onClose` functions.
 * Different types of tabs, including documents are displayed within.
 */
export declare const LeftTabs: ({ "data-testid": dataTestId, enabledTabs, showPanels, showTabList, onOpen, onClose, }: LeftTabsProps) => ReactElement;
