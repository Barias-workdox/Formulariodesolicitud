import type { ReactElement } from 'react';

import { Chat, UpdateNow, WatsonHealthStackedScrolling_1 } from '@carbon/icons-react';

import { StatefulTabs, Tab, TabsOrientation } from '@components/tabs';
import { useCss } from '@components/utils/hooks/use-css';

import { ActivityTabContainer } from '../../../containers';
import { CommentsTabContainer } from '../comments-tab';
import { HistoryTabContainer } from '../history-tab';

import { rightOrientationTabsOverridesStyles, rightTabOverridesStyles } from './right-tabs.styles';

import type { IUseContractNegotiationTabs } from '../hooks/use-contract-negotiation-tabs.hook';
import type { ContractNegotiationThirdPartyProps } from '../layouts/contract-negotiation-third-party';

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
export const RightTabs = ({
  'data-testid': dataTestId = 'right-tabs',
  showPanels,
  enabledTabs,
  onOpen,
  onClose,
}: RightTabsProps): ReactElement => {
  const { theme } = useCss();

  return (
    <StatefulTabs
      showPanels={showPanels}
      overrides={{
        ...rightOrientationTabsOverridesStyles(theme, {
          showPanels,
        }),
        TabList: {
          props: {
            onClick: onOpen,
          },
        },
      }}
      activateOnFocus
      orientation={TabsOrientation.vertical}
      kind="medium"
      renderAll={false}
    >
      {enabledTabs.includes('activity') && (
        <Tab
          data-testid={`${dataTestId}__activity-tab--tab`}
          overrides={rightTabOverridesStyles(theme, {
            showPanels,
          })}
          title={<WatsonHealthStackedScrolling_1 />}
        >
          <ActivityTabContainer
            data-testid={`${dataTestId}__activity-tab`}
            onClose={onClose}
          />
        </Tab>
      )}
      {enabledTabs.includes('history') && (
        <Tab
          data-testid={`${dataTestId}__history-tab--tab`}
          overrides={rightTabOverridesStyles(theme, {
            showPanels,
          })}
          title={<UpdateNow />}
        >
          <HistoryTabContainer
            data-testid={`${dataTestId}__history-tab`}
            onClose={onClose}
          />
        </Tab>
      )}
      {enabledTabs.includes('comments') && (
        <Tab
          data-testid={`${dataTestId}__comments-tab--tab`}
          overrides={rightTabOverridesStyles(theme, {
            showPanels,
          })}
          title={<Chat />}
        >
          <CommentsTabContainer
            data-testid={`${dataTestId}__comments-tab`}
            onClose={onClose}
          />
        </Tab>
      )}
    </StatefulTabs>
  );
};
