import { ReactElement } from 'react';
import { IUseContractNegotiationTabs } from '../hooks/use-contract-negotiation-tabs.hook';
import { ContractNegotiationThirdPartyProps } from '../layouts/contract-negotiation-third-party';
export type RightTabsProps = Pick<ContractNegotiationThirdPartyProps, 'enabledTabs'> & {
    'data-testid'?: string;
    showPanels?: IUseContractNegotiationTabs['isRightTabsOpen'];
    showTabList?: IUseContractNegotiationTabs['isRightTabsOpen'];
    onClose: IUseContractNegotiationTabs['handleCloseRightTabs'];
    onOpen: IUseContractNegotiationTabs['handleOpenRightTabs'];
};
/**
 * Renders a set of tabs on the right side for contract negotiation.
 * These tabs allow showing or hiding the content of each tab through the `onOpen` and `onClose` functions.
 * Different types of tabs, including activity, history, and comments, are displayed within.
 */
export declare const RightTabs: ({ "data-testid": dataTestId, showPanels, enabledTabs, onOpen, onClose, }: RightTabsProps) => ReactElement;
