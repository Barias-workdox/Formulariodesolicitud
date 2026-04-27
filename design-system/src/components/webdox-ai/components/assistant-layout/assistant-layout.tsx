import type { PropsWithChildren } from 'react';

import { Close, ShrinkScreenFilled } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { POPOVER_Z_INDEX } from '@components/popover/popover.constants';
import { Select } from '@components/select/next';
import { Tab, Tabs } from '@components/tabs';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';

import { ReactComponent as BrainIcon } from '../../../../assets/icons/webdox-ai/brain-icon.svg';
import { ActionIconButton } from '../action-icon-button';
import {
  WEBDOX_AI_BUTTON_ICON_SIZE,
  WEBDOX_AI_SELECT_WIDTH,
} from '../webdox-ai-button/webdox-ai-button.constants';

import {
  StyledBrainIconContainer,
  StyledContainer,
  StyledHeader,
  tabsOverrides,
} from './assistant-layout.styles';

import type { SelectProps } from '@components/select/select.interfaces';
import type { TabsProps } from '@components/tabs';
import type { Option, Options } from 'baseui/select';

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
const AssistantLayout = ({
  'data-testid': dataTestId,
  selectOptions,
  selectedOption = [],
  children,
  onClose,
  onClickDynamicView,
  onSelectChange,
}: AssistantLayoutProps): React.JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledBrainIconContainer>
          <BrainIcon
            data-testid={`${dataTestId}--brain-icon`}
            height={WEBDOX_AI_BUTTON_ICON_SIZE}
            width={WEBDOX_AI_BUTTON_ICON_SIZE}
          />
        </StyledBrainIconContainer>
        <Text
          variant="h2"
          margin={0}
          fontWeight="700"
          flex={1}
          color="neutralStrong"
        >
          {t(selectedOption[0]?.value)}
        </Text>
        {selectOptions && (
          <Select
            data-testid={`${dataTestId}--select`}
            options={selectOptions}
            onChange={onSelectChange}
            placeholder={t('webdoxAI.chat.assistantSelectPlaceholder')}
            kind="white"
            size="sm"
            width={WEBDOX_AI_SELECT_WIDTH}
            searchable={false}
            zIndex={POPOVER_Z_INDEX}
          />
        )}
        <ActionIconButton
          dataTestId={`${dataTestId}--shrink-screen`}
          Icon={<ShrinkScreenFilled />}
          tooltipContent={t('webdoxAI.assistantLayout.dynamicViewTooltip')}
          onClick={onClickDynamicView}
          zIndex={POPOVER_Z_INDEX}
        />
        <IconButton
          data-testid={`${dataTestId}--close-button`}
          kind="control"
          size="32px"
          onClick={onClose}
        >
          <Close size={16} />
        </IconButton>
      </StyledHeader>
      {children}
    </StyledContainer>
  );
};

/**
 * Tabs used in AssistantLayout
 */
const AssistantLayoutTabs = ({
  children,
  activeKey,
  onChange,
}: AssistantLayoutTabsProps): JSX.Element => (
  <Tabs
    data-testid="assistant-layout-tabs"
    activeKey={activeKey}
    kind="medium"
    onChange={onChange}
    overrides={tabsOverrides}
  >
    {children}
  </Tabs>
);

AssistantLayout.Tab = Tab;
AssistantLayout.Tabs = AssistantLayoutTabs;

export { AssistantLayout };
