import type { ReactElement } from 'react';

import { Document } from '@carbon/icons-react';

import { StatefulTabs, Tab, TabsOrientation } from '../../../../tabs';
import { useCss } from '../../../../utils/hooks/use-css';
import { DocumentsTabContainer } from '../documents-tab';

import { leftOrientationTabsOverridesStyles, leftTabOverridesStyles } from './left-tabs.styles';

import type { IUseContractNegotiationTabs } from '../hooks/use-contract-negotiation-tabs.hook';
import type { ContractNegotiationThirdPartyProps } from '../layouts/contract-negotiation-third-party';

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
export const LeftTabs = ({
  'data-testid': dataTestId = 'left-tabs',
  enabledTabs,
  showPanels = true,
  showTabList = true,
  onOpen,
  onClose,
}: LeftTabsProps): ReactElement => {
  const { theme } = useCss();

  const statefulTabsOverrides = leftOrientationTabsOverridesStyles(theme, {
    showPanels,
    showTabList,
  });

  return (
    <StatefulTabs
      showPanels={showPanels}
      overrides={{
        ...statefulTabsOverrides,
        TabList: {
          ...statefulTabsOverrides.TabList,
          props: {
            onClick: onOpen,
          },
        },
      }}
      activateOnFocus
      orientation={TabsOrientation.vertical}
      kind="medium"
    >
      {enabledTabs.includes('documents') && (
        <Tab
          data-testid={`${dataTestId}__documents-tab--tab`}
          overrides={leftTabOverridesStyles(theme, {
            showPanels,
          })}
          title={<Document />}
        >
          <DocumentsTabContainer
            onClose={onClose}
            data-testid={`${dataTestId}__documents-tab`}
          />
        </Tab>
      )}
    </StatefulTabs>
  );
};
